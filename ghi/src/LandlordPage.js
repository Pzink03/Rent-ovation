import logo from "./img/logo.png";
import profile1 from "./img/profile1.jpg";
import sidebarhome from "./img/sidebarhome.png";
import appointmentlogo from "./img/appointmentlogo.png";
import { NavLink } from "react-router-dom";
import PropertyCard from "./Propertycard";
import AppointmentCard from "./AppointmentCard";

function LandlordPage(props) {
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
                  <NavLink className="sidebar-link" href="#">
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
                  <NavLink className="sidebar-link" href="#">
                    <img className="sidebar-icon" src={sidebarhome} alt="" />
                    <div className="sidebar-link-text">Logout</div>
                  </NavLink>
                </li>
              </ul>
            </div>
          </aside>
          <PropertyCard />
        </header>
        <h2 className="section-title">Appointments</h2>
        <AppointmentCard />
      </div>
      {/* <section className="section">
        <h2 className="section-title">Appointments</h2>
        <div className="testimonial-grid">
          <div className="testimonial-grid-item">
            <div className="testimonial-picture">
              <img src={profile1} alt="HTML 5 Icon" />
            </div>

            <div className="testimonial-text-container">
              <h3 className="testimonial-name">Name</h3>
              Lorem ipsum dolafb afb asdfbasdfbaor, sit amet consectetur
              adipisicing elit. Delectfbsfbsbrqwrbqwrebqrbqrb qwerbqwerb q
              qwerbqr bgqr
            </div>
          </div>
          <div className="testimonial-grid-item">
            <img src={profile1} alt="HTML 5 Icon" />
            <div className="testimonial-text-container">
              <h3 className="testimonial-name">Name</h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            </div>
          </div>
          <div className="testimonial-grid-item">
            <img src={profile1} alt="HTML 5 Icon" />
            <div className="testimonial-text-container">
              <h3 className="testimonial-name">Name</h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            </div>
          </div>
          <div className="testimonial-grid-item">
            <img src={profile1} alt="HTML 5 Icon" />
            <div className="testimonial-text-container">
              <h3 className="testimonial-name">Name</h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            </div>
          </div>
          <div className="testimonial-grid-item">
            <img src={profile1} alt="HTML 5 Icon" />
            <div className="testimonial-text-container">
              <h3 className="testimonial-name">Name</h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            </div>
          </div>
          <div className="testimonial-grid-item">
            <img src={profile1} alt="HTML 5 Icon" />
            <div className="testimonial-text-container">
              <h3 className="testimonial-name">Name</h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            </div>
          </div>
        </div>
      </section> */}
      <footer>
        <nav className="nav">
          <img className="logo" src={logo} alt="Web Dev Simplified Logo" />
        </nav>
      </footer>
    </>
  );
}

export default LandlordPage;
