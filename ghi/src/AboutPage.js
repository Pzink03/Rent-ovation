import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "./img/arrow_down.svg";
import header_image from "./img/header_image.jpg";
import profile1 from "./img/profile1.jpg";

function AboutPage() {
  return (
    <>
      <header className="full-screen-header">
        <div className="blur-background"></div>
        <div className="main-title gradient-text">About us!</div>
        <main>
          <section className="section">
            <div className="main-cards-container about">
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
                  <li className="feature">
                    Allow Tenants To Make Rent Payments
                  </li>
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
        </main>
        <span className="sub-title about">Hear more from our users!</span>
        <Logo className="scroll-down-icon" />
      </header>
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
      </section>
      <section className="section section-accent">
        <h2 className="section-title">Want to know more?</h2>
        {/* <p className="free-sub-title">Want to learn more about our team?</p> */}
        <div className="btn-container contact">
          <NavLink className="contact-btn btn" to="#">
            Contact Us!
          </NavLink>
        </div>
      </section>

      {/* <main>
        <section className="section">
          <h2 className="section-title about">What we offer</h2>
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
      </main> */}
    </>
  );
}

export default AboutPage;
