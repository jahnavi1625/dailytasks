import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="nav-link active" to="/">10000coders</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <a className="navbar-brand" href="/">10000coders</a> replace with link in all*/}
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item ">
              {/* <a className="nav-link active" href="/aboutus">AboutUs</a> */}
              <Link className="nav-link active" to="/aboutus">AboutUs</Link>
            </li>
            <li className="nav-item ">
              {/* <a className="nav-link active" href="/contact">Contact</a> */}
              <Link className="nav-link active" to="/contact">contact</Link>
            </li>
            <li className="nav-item ">
              {/* <a className="nav-link active" aria-current="page" href="/login">career</a> */}
              <Link className="nav-link active" to="/career">Career</Link>
            </li>
            <li className="nav-item ">
              {/* <a className="nav-link active" href="/signup">Login</a> */}
              <Link className="nav-link active" to="/login">Login</Link>
            </li>
            <li className="nav-item ">
              {/* <a className="nav-link active" href="#">SignUp</a> */}
              <Link className="nav-link active" to="/signup">SignUp</Link>
            </li>
            <li className="nav-item ">
              {/* <a className="nav-link active" href="#">SignUp</a> */}
              <Link className="nav-link active" to="/todo">ToDo</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
