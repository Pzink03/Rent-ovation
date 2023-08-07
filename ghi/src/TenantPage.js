import React from "react";
import TenantPropertyCard from "./TenantPropertyCard";
import "./css/tenantpage.css";

function TenantPage() {
  return (
    <header className="full-screen-header">
      <div className="blur-background"></div>
      <div className="main-title gradient-text">Welcome!</div>
      <TenantPropertyCard />
    </header>
  );
}

export default TenantPage;
