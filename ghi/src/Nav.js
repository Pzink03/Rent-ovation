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
          <NavLink className="btn" to="#">
            Sign Up
          </NavLink>
        </li>

        <li>
          <NavLink className="btn" to="#">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
