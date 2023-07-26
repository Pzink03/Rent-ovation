import React from "react";
import { NavLink } from "react-router-dom";
import BillingsPage from "./Billings";

import header_image from "./img/header_image.jpg";
import "./css/tenantpage.css";

function TenantPage() {
  return (
    <header className="full-screen-header">
      <div className="blur-background"></div>
      <div className="main-title gradient-text">Welcome!</div>
      <div className="main-card tenant">
        <div className="card-header">
          <div className="sub-title gradient-text tenant">User</div>
          <img className="property-picture" src={header_image} alt="" />
        </div>
        <ul className="card-feature tenant">
          <li className="feature tenant">Your Property Is Up To Date</li>
          <li className="feature"></li>

          <li className="feature">Would You Like To Make An Appointment?</li>

          <div className="btn-container">
            <NavLink className="btn btn-animation tenant-btn" to="/tenant">
              Pay Rent
            </NavLink>
            <NavLink className="btn btn-animation tenant-btn" to="/tenant">
              Book Appointment
            </NavLink>
          </div>
        </ul>
      </div>
      {/* <img className="tenant-property-picture" src={header_image} alt="" /> */}
    </header>
  );
}

export default TenantPage;
