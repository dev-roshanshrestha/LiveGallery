import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { removeItems } from "../services/setLocalItems";

function Navbar() {
  const token = localStorage.getItem("token");
  return (
    <header className="d-flex flex-wrap  align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <Link
          to="/"
          className="d-inline-flex link-body-emphasis text-decoration-none"
        >
          <span className="fs-3 fw-bold text-uppercase">Gallery</span>
        </Link>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <Link to="/gallery" className="nav-link px-2 link-secondary">
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/feature" className="nav-link px-2">
            Features
          </Link>
        </li>
      </ul>

      <div className="col-md-3 text-end d-flex justify-content-center">
        {token ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={removeItems}
          >
            Logout
          </button>
        ) : (
          <div>
            <Link
              type="button"
              to={"/login"}
              className="btn btn-outline-primary me-2"
            >
              Login
            </Link>
            <Link type="button" to={"/signup"} className="btn btn-primary me-2">
              Sign up
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
