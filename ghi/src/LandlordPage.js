import logo from "./img/logo.png";
import sidebarhome from "./img/sidebarhome.png";
import appointmentlogo from "./img/appointmentlogo.png";
import { NavLink } from "react-router-dom";
import PropertyCard from "./Propertycard";
import AppointmentHistoryPage from "./AppointmentHistoryPage";
import useToken from "@galvanize-inc/jwtdown-for-react";
import LogoutSidebarIcon from "./img/LogoutSidebarIcon.png";
import AppointmentCard from "./AppointmentCard";

function LandlordPage() {
  const { logout } = useToken();
  return (
    <>
      <div className="">
        <header className="full-screen-header">
          <h1 className="main-title gradient-text">Welcome!</h1>
          <div className="blur-background"></div>
          <aside className="sidebar" data-sidebar>
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
                <li className="sidebar-list-item">
                  <NavLink className="sidebar-link" to="/rent">
                    <img className="sidebar-icon" src={sidebarhome} alt="" />
                    <div className="sidebar-link-text">
                      Add Rent to Property
                    </div>
                  </NavLink>
                </li>
                <li className="sidebar-list-item">
                  <NavLink className="sidebar-link" to="/appointment-history">
                    <img
                      className="sidebar-icon"
                      src={appointmentlogo}
                      alt=""
                    />
                    <div className="sidebar-link-text">Appointment History</div>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="bottom-sidebar">
              <ul className="sidebar-list">
                <li className="sidebar-list-item">
                  <NavLink
                    className="sidebar-link"
                    to="/"
                    onClick={() => logout()}
                  >
                    <img
                      className="sidebar-icon"
                      src={LogoutSidebarIcon}
                      alt=""
                    />
                    <div className="sidebar-link-text">Logout</div>
                  </NavLink>
                </li>
              </ul>
            </div>
          </aside>
          <PropertyCard />
          {window.location.pathname === "/appointment-history" && (
            <AppointmentHistoryPage />
          )}
        </header>
        <h2 className="section-title">Appointments</h2>
        <AppointmentCard />
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
