import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Gallery } from "../../context/GalleryManager";
import { StoreItem } from "../../services/setLocalItems";

function Loginpage() {


  const navigate = useNavigate();
  const { login } = useContext(Gallery);
  const email = useRef();
  const password = useRef();

  const subData = async (e) => {
    e.preventDefault();
    let payload = {
      email: email.current.value,
      password: password.current.value,
    };
    let msg = await login(payload);
    if (msg.status == "Fill") {
      alert(msg.msg);
    }

    if (msg.status == "invalid") {
      alert(msg.msg);
    }
    if (msg.status == "success") {
      StoreItem(msg.token);
      navigate("/gallery");
    }
  };
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: 500 }}
    >
      <form className="d-flex flex-column border w-50 p-5 rounded shadow">
        <span className="fs-3 fw-bold text-uppercase border-bottom pb-1 mb-3">
          Login
        </span>
        <small id="emailHelp" className="form-text text-muted pb-4">
          Create New Account{" "}
          <a className="text-decoration-none" href="/signup">
            Create Now
          </a>
        </small>
        <div className="form-group mb-3">
          <label>Email address</label>
          <input
            ref={email}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            ref={password}
            type="password"
            className="form-control mb-3"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => {
            subData(e);
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Loginpage;
