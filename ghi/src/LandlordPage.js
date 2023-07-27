import React, { useState, useEffect } from 'react';
import logo from "./img/logo.png";
import sidebarhome from "./img/sidebarhome.png";
import appointmentlogo from "./img/appointmentlogo.png";
import { NavLink } from "react-router-dom";
import PropertyCard from "./Propertycard";
import AppointmentHistoryPage from './AppointmentHistoryPage';
function LandlordPage(props) {
  return (
    <>
      <div className="">
        <header className="full-screen-header">
          <h1 className="main-title gradient-text">Welcome</h1>
          <div className="blur-background"></div>
          <aside className="sidebar open" data-sidebar>
            <div className="top-sidebar">
              <NavLink to="/">
                <img className="home-logo" src={logo} alt="" />
              </NavLink>
            </div>
            <div className="hidden-sidebar your-name">Rent-ovation</div>
            <div className="middle-sidebar">
              <ul className="sidebar-list">
                <li className="sidebar-list-item">
                  <NavLink className="sidebar-link" to="/property">
                    <img className="sidebar-icon" src={sidebarhome} alt="" />
                    <div className="sidebar-link-text">Add Property</div>
                  </NavLink>
                </li>
                {/* link for the appointment history */}
                <li className="sidebar-list-item">
                  <NavLink className="sidebar-link" to="/appointment-history">
                    <img className="sidebar-icon" src={appointmentlogo} alt="" />
                    <div className="sidebar-link-text">Appointment History</div>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="bottom-sidebar">
              <ul className="sidebar-list">
                <li className="sidebar-list-item">
                  <NavLink className="sidebar-link" href="#">
                    <img className="sidebar-icon" src={sidebarhome} alt="" />
                    <div className="sidebar-link-text">Logout</div>
                  </NavLink>
                </li>
              </ul>
            </div>
          </aside>
          {window.location.pathname === '/property' && <PropertyCard />}
          {window.location.pathname === '/appointment-history' && <AppointmentHistoryPage />}
        </header>
      </div>
      <footer>
        <nav className="nav">
          <img className="logo" src={logo} alt="Web Dev Simplified Logo" />
        </nav>
      </footer>
    </>
  );
}

export default LandlordPage;
