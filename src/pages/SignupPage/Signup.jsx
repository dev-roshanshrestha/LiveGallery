import React from "react";

function Signup() {
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
          <input type="email" className="form-control" placeholder="Email" />
        </div>
        <div className="form-group mb-3">
          <label>Username</label>
          <input type="text" className="form-control" placeholder="Username" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
