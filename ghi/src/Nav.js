import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import useToken from "@galvanize-inc/jwtdown-for-react";
import logo from "./img/logo.png";
import "./index.css";
import "./css/landlordpage.css";
import "./form.css";

function Nav({ account }) {
  console.log(account);
  // const { token } = useToken();
  // console.log(token);

  // const [account, setAccount] = useState([]);

  // const getToken = async () => {
  //   const tokenUrl = "http://localhost:8000/token";
  //   const fetchOptions = {
  //     method: "get",
  //     credentials: "include",
  //   };
  //   const tokenResponse = await fetch(tokenUrl, fetchOptions);
  //   if (tokenResponse.ok) {
  //     const token = await tokenResponse.json();
  //     if (token !== null) {
  //       setAccount(token.account);
  //     } else {
  //       setAccount([]);
  //     }
  //   }
  // };
  // console.log(account);
  // useEffect(() => {
  //   getToken();
  //   console.log(token);
  // }, [token]);

  return (
    <nav className="nav nav-top">
      <NavLink to="/">
        <img className="logo" src={logo} alt="" />
      </NavLink>

      <ul className="nav-list">
        {account?.id ? (
          <>
            <li>
              <NavLink className="btn" to="/landlord">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="btn" to="/signup">
                Logout
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink className="btn" to="/signup">
                Sign Up
              </NavLink>
            </li>

            <li>
              <NavLink className="btn" to="/login">
                Login
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
