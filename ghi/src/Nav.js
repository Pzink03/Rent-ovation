import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./img/logo.png";
import "./index.css";
import "./css/landlordpage.css";

function Nav() {
  return (
    <nav className="nav nav-top">
      <NavLink to="/">
        <img className="logo" src={logo} alt="" />
      </NavLink>

      <ul className="nav-list">
        <li>
          <NavLink className="btn" to="/tenant-signup">
            Tenant Sign Up
          </NavLink>
        </li>

        <li>
          <NavLink className="btn" to="/landlord-signup">
            Landlord Sign Up
          </NavLink>
        </li>

        <li>
          <NavLink className="btn" to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
