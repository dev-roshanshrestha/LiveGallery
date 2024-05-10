import React, { useContext, useEffect, useRef } from "react";
import { Gallery } from "../../context/GalleryManager";
import { useNavigate } from "react-router-dom";
import { StoreItem } from "../../services/setLocalItems";

function Signup() {
  const navigate = useNavigate();
  const { signUp } = useContext(Gallery);
  const username = useRef();
  const email = useRef();
  const password = useRef();

  const subData = async (e) => {
    e.preventDefault();
    let payload = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    let msg = await signUp(payload);

    if (msg.status == "Fill") {
      alert(msg.msg);
    }
    if (msg.status == "Exists") {
      alert(msg.msg);
    }
    if (msg.status == "success") {
      StoreItem(msg.token);
      navigate("/login");
    }
  };
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: 500 }}
    >
      <form className="d-flex flex-column border w-50 p-5 rounded shadow">
        <span className="fs-3 fw-bold text-uppercase border-bottom pb-1 mb-3">
          Sign Up
        </span>
        <small id="emailHelp" className="form-text text-muted pb-4">
          Account Already have{" "}
          <a className="text-decoration-none" href="/login">
            Login now
          </a>
        </small>
        <div className="form-group mb-3">
          <label>Email address</label>
          <input
            ref={email}
            type="email"
            className="form-control"
            placeholder="Email"
          />
        </div>
        <div className="form-group mb-3">
          <label>Username</label>
          <input
            ref={username}
            type="text"
            className="form-control"
            placeholder="Username"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            ref={password}
            type="password"
            className="form-control mb-3"
            placeholder="Password"
          />
        </div>

        <button
          type="submit"
          onClick={(e) => {
            subData(e);
          }}
          className="btn btn-primary"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
