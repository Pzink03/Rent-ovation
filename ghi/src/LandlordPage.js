import "./css/landlordpage.css";
import React from "react";
import logo from "./img/logo.png";
import header_image from "./img/header_image.jpg";
import sidebarhome from "./img/sidebarhome.png";
import appointmentlogo from "./img/appointmentlogo.png";
import { NavLink } from "react-router-dom";

function LandlordPage() {
  return (
    <>
      <div className="container">
        <aside className="sidebar open" data-sidebar>
          <div className="top-sidebar">
            <NavLink to="/">
              <img className="home-logo" src={logo} alt="" />
            </NavLink>
          </div>
          <div className="hidden-sidebar your-name">Your Name</div>
          <div className="middle-sidebar">
            <ul className="sidebar-list">
              <li className="sidebar-list-item">
                <NavLink className="sidebar-link" href="#">
                  <img className="sidebar-icon" src={sidebarhome} alt="" />
                  <div className="sidebar-link-text">Add Property</div>
                </NavLink>
              </li>
              <li className="sidebar-list-item">
                <NavLink className="sidebar-link" href="#">
                  <img className="sidebar-icon" src={appointmentlogo} alt="" />
                  <div className="sidebar-link-text">Appointment History</div>
                </NavLink>
              </li>
              {/* <li className="sidebar-list-item">
                <NavLink className="sidebar-link" href="#">
                  <img className="sidebar-icon" src={sidebarhome} alt="" />
                  <div className="sidebar-link-text">Content</div>
                </NavLink>
              </li> */}
              {/* <li className="sidebar-list-item">
                <NavLink className="sidebar-link" href="#">
                  <img className="sidebar-icon" src={sidebarhome} alt="" />
                  <div className="sidebar-link-text">Content</div>
                </NavLink>
              </li> */}
            </ul>
          </div>
          <div className="bottom-sidebar">
            <ul className="sidebar-list">
              {/* <li className="sidebar-list-item">
                <NavLink className="sidebar-link" href="#">
                  <img className="sidebar-icon" src={sidebarhome} alt="" />
                  <div className="sidebar-link-text">Content</div>
                </NavLink>
              </li> */}
              <li className="sidebar-list-item">
                <NavLink className="sidebar-link" href="#">
                  <img className="sidebar-icon" src={sidebarhome} alt="" />
                  <div className="sidebar-link-text">Logout</div>
                </NavLink>
              </li>
            </ul>
          </div>
        </aside>

        <main>
          <section className="landlord-section">
            <h2 className="landlord-section-title">Welcome User!</h2>
            <div className="landlord-cards-container">
              <div className="property-card">
                <div className="property-header">
                  <div className="property-name">Property Name</div>
                  <img className="property-picture" src={header_image} alt="" />
                  <div className="property-feature">
                    Already A Rent-ovation user? Login below!
                  </div>
                </div>

                <ul className="property-features">
                  <li className="property-feature">Property content</li>
                  <li className="property-feature">Property content</li>
                  <li className="property-feature">Property content</li>
                  <li className="property-feature">Property content</li>
                  <div className="btn-container">
                    <NavLink className="btn btn-animation btn2" to="/landlord">
                      Edit Property
                    </NavLink>
                    <NavLink className="btn btn-animation btn2" href="#">
                      Check Appointments
                    </NavLink>
                  </div>
                </ul>
              </div>
              <div className="property-card">
                <div className="property-header">
                  <div className="property-name">Property Name</div>
                  <img className="property-picture" src={header_image} alt="" />
                  <div className="property-feature">
                    Already A Rent-ovation user? Login below!
                  </div>
                </div>

                <ul className="property-features">
                  <li className="property-feature">Property content</li>
                  <li className="property-feature">Property content</li>
                  <li className="property-feature">Property content</li>
                  <li className="property-feature">Property content</li>
                  <div className="btn-container">
                    <NavLink className="btn btn-animation btn2" to="/landlord">
                      Edit Property
                    </NavLink>
                    <NavLink className="btn btn-animation btn2" href="#">
                      Check Appointments
                    </NavLink>
                  </div>
                </ul>
              </div>
              <div className="property-card">
                <div className="property-header">
                  <div className="property-name">Property Name</div>
                  <img className="property-picture" src={header_image} alt="" />
                  <div className="property-feature">
                    Already A Rent-ovation user? Login below!
                  </div>
                </div>

                <ul className="property-features">
                  <li className="property-feature">Property content</li>
                  <li className="property-feature">Property content</li>
                  <li className="property-feature">Property content</li>
                  <li className="property-feature">Property content</li>
                  <div className="btn-container">
                    <NavLink className="btn btn-animation btn2" to="/landlord">
                      Edit Property
                    </NavLink>
                    <NavLink className="btn btn-animation btn2" href="#">
                      Check Appointments
                    </NavLink>
                  </div>
                </ul>
              </div>
              <div className="property-card">
                <div className="property-header">
                  <div className="property-name">Property Name</div>
                  <img className="property-picture" src={header_image} alt="" />
                  <div className="property-feature">
                    Already A Rent-ovation user? Login below!
                  </div>
                </div>

                <ul className="property-features">
                  <li className="property-feature">Property content</li>
                  <li className="property-feature">Property content</li>
                  <li className="property-feature">Property content</li>
                  <li className="property-feature">Property content</li>
                  <div className="btn-container">
                    <NavLink className="btn btn-animation btn2" to="/landlord">
                      Edit Property
                    </NavLink>
                    <NavLink className="btn btn-animation btn2" href="#">
                      Check Appointments
                    </NavLink>
                  </div>
                </ul>
              </div>
            </div>
          </section>

          <section className="section section-accent">
            <NavLink className="contact-btn btn" to="#">
              Add property
            </NavLink>
          </section>
        </main>
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
