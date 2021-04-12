import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/location_searching_black_24dp.svg";

const Navbar = () => (
  <>
    <nav className="navbar navbar-expand-md navbar-light bg-light box-shadow mb-3 fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo}></img> GitFound
        </Link>
        <div className="collapse " id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"></li>
          </ul>
        </div>
      </div>
    </nav>
  </>
);

export default Navbar;
