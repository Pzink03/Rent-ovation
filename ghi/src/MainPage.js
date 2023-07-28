import React from "react";
import { NavLink } from "react-router-dom";

function MainPage() {
  return (
    <>
      <header className="full-screen-header">
        <div className="blur-background"></div>
        <h1 className="main-title gradient-text">Rent-ovation</h1>
        <span className="sub-title">
          One stop for property managers and renters to manage their properties
        </span>
        <NavLink className="btn header-btn" to="/about">
          Learn More
        </NavLink>
      </header>
    </>
  );
}

export default MainPage;
