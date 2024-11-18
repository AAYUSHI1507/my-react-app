import React from "react";
import PropTypes from "prop-types";
//import { useState } from "react";

function Navbar(props) {
  console.log(`This is mode prop ${props.mode}`);
  return (
    <nav
      className={`navbar navbar-expand-lg bg-${props.mode} border-bottom border-body`}
      data-bs-theme={props.mode === "dark" ? "dark" : "light"}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.aboutName}
              </a>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          <div
            className={`form-check form-switch text-${
              props.mode === "dark" ? "light" : "dark"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              onClick={props.toggleMode}
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable {props.mode === "light" ? "dark" : "light"} Mode
            </label>
          </div>{" "}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutName: PropTypes.string,
};
// Navbar.defaultProps = {
//   title: "Set title here",
//   aboutName:"Default About"
// }
export default Navbar;
