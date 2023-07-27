import React from "react";
import { NavLink } from "react-router-dom";
import TenantPropertyCard from "./TenantPropertyCard";

import header_image from "./img/header_image.jpg";
import "./css/tenantpage.css";

function TenantPage() {
  return (
    <header className="full-screen-header">
      <div className="blur-background"></div>
      <div className="main-title gradient-text">Welcome!</div>
      <TenantPropertyCard />
      {/* <img className="tenant-property-picture" src={header_image} alt="" /> */}
    </header>
  );
}

export default TenantPage;
