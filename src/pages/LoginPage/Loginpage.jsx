import React from "react";

function Loginpage() {
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
            Create New Account <a className='text-decoration-none' href="/signup">Create Now</a>
          </small>
        <div className="form-group mb-3">
          <label >Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label >Password</label>
          <input
            type="password"
            className="form-control mb-3"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default Loginpage;
