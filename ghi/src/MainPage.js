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
        {/* <Logo className="scroll-down-icon" /> */}
      </header>

      {/* <main>
        <section className="section">
          <h2 className="section-title">What we offer</h2>
          <div className="main-cards-container">
            <div className="main-card">
              <div className="card-header">
                <div className="card-name">Sign Up As Renter!</div>
                <img className="property-picture" src={header_image} alt="" />
              </div>
              <ul className="card-feature">
                <li className="feature">Add & Manage Properties</li>
                <li className="feature">Pay Rent</li>

                <li className="feature">
                  Make Appointments With Your Landlord
                </li>

                <div className="btn-container">
                  <NavLink className="btn btn-animation" to="/tenant">
                    Sign Up
                  </NavLink>
                </div>
              </ul>
            </div>
            <div className="main-card accent">
              <div className="card-header">
                <div className="card-name">Sign Up As Property Manager!</div>
                <img className="property-picture" src={header_image} alt="" />
              </div>
              <ul className="card-feature">
                <li className="feature">Add & Manage Properties</li>
                <li className="feature">Allow Tenants To Make Rent Payments</li>
                <li className="feature">Manage Appointments With Tenants</li>

                <div className="btn-container">
                  <NavLink className="btn btn-animation" to="/landlord">
                    Sign Up
                  </NavLink>
                </div>
              </ul>
            </div>
            <div className="main-card">
              <div className="card-header">
                <div className="card-name">Already Signed Up?</div>
                <img className="property-picture" src={header_image} alt="" />
              </div>
              <ul className="card-feature">
                <li className="feature last-card">
                  Already A Member? Login Below!
                </li>

                <div className="btn-container">
                  <NavLink className="btn btn-animation" to="/landlord">
                    Login
                  </NavLink>
                </div>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">What Our Customers have to say</h2>
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus
              </div>
            </div>
            <div className="testimonial-grid-item">
              <img src={profile1} alt="HTML 5 Icon" />
              <div className="testimonial-text-container">
                <h3 className="testimonial-name">Name</h3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus
              </div>
            </div>
            <div className="testimonial-grid-item">
              <img src={profile1} alt="HTML 5 Icon" />
              <div className="testimonial-text-container">
                <h3 className="testimonial-name">Name</h3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus
              </div>
            </div>
            <div className="testimonial-grid-item">
              <img src={profile1} alt="HTML 5 Icon" />
              <div className="testimonial-text-container">
                <h3 className="testimonial-name">Name</h3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus
              </div>
            </div>
            <div className="testimonial-grid-item">
              <img src={profile1} alt="HTML 5 Icon" />
              <div className="testimonial-text-container">
                <h3 className="testimonial-name">Name</h3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus
              </div>
            </div>
          </div>
        </section>
        <section className="section section-accent">
          <h2 className="section-title">Want to know more?</h2>


          <NavLink className="contact-btn btn" to="#">
            Contact Us!
          </NavLink>
        </section>
      </main> */}

      {/* <footer>
        <nav className="nav">
          <img className="logo" src={logo} alt="Web Dev Simplified Logo" />
        </nav>
      </footer> */}
    </>
  );
}

export default MainPage;
