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
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Usuários
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/repositories">
                Repositórios
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
);

export default Navbar;
