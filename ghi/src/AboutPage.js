import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "./img/arrow_down.svg";
import header_image from "./img/header_image.jpg";
import header_image2 from "./img/header_image2.jpg";
import slime from "./img/Slime.jpg";
import profile1 from "./img/profile1.jpg";
import testimonial_picture1 from "./img/MTestimonial.jpg";
import testimonial_picture2 from "./img/MTestimonial2.jpg";
import testimonial_picture3 from "./img/MTestimonial3.jpg";
import testimonial_picture4 from "./img/MTestimonial4.jpg";
// import testimonial_picture5 from "./img/FMTestimonial.jpg";
import LoginAboutImage from "./img/LoginCardAboutImage.jpg";

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
                  <img
                    className="property-picture"
                    src={header_image2}
                    alt=""
                  />
                </div>
                <ul className="card-feature">
                  <li className="feature">Add & Manage Your Rental Property</li>
                  <li className="feature">
                    Pay And Manage Your Rental Due Date
                  </li>

                  <li className="feature">
                    Book Appointments With Your Landlord
                  </li>

                  <div className="btn-container">
                    <NavLink className="btn btn-animation" to="/signup">
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
                  <li className="feature">
                    Keep Track Of Rental Property Due Dates
                  </li>
                  <li className="feature">Manage Appointments With Tenants</li>

                  <div className="btn-container">
                    <NavLink className="btn btn-animation" to="/signup">
                      Sign Up
                    </NavLink>
                  </div>
                </ul>
              </div>
              <div className="main-card">
                <div className="card-header">
                  <div className="card-name">Already Signed Up?</div>
                  <img
                    className="property-picture"
                    src={LoginAboutImage}
                    alt=""
                  />
                </div>
                <ul className="card-feature">
                  <li className="feature last-card">
                    Already A Member? Login Below!
                  </li>

                  <div className="btn-container">
                    <NavLink className="btn btn-animation" to="/login">
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
              <img src={slime} alt="HTML 5 Icon" />
            </div>

            <div className="testimonial-text-container">
              <h3 className="testimonial-name">Slime</h3>
              "I can't believe the transformation Rent-Ovation brought to my
              property! They handled everything flawlessly, and now my rentals
              are in high demand. A truly top-notch property management
              service!'"
            </div>
          </div>
          <div className="testimonial-grid-item">
            <img src={testimonial_picture4} alt="HTML 5 Icon" />
            <div className="testimonial-text-container">
              <h3 className="testimonial-name">David W.</h3>
              "Rent-ovation made managing my dream rental a breeze! Their
              user-friendly website helped me manage my home with ease. Highly
              recommend their services!"{" "}
            </div>
          </div>
          <div className="testimonial-grid-item">
            <img src={profile1} alt="HTML 5 Icon" />
            <div className="testimonial-text-container">
              <h3 className="testimonial-name">Jessica R.</h3>
              "As a property owner, Rentovation has been a game-changer. Their
              expert management skills and attention to detail have maximized my
              rental income while minimizing stress. I trust them completely!"{" "}
            </div>
          </div>
          <div className="testimonial-grid-item">
            <img src={testimonial_picture2} alt="HTML 5 Icon" />
            <div className="testimonial-text-container">
              <h3 className="testimonial-name">Tom C.</h3>
              "Rentovation's online platform makes everything so convenient!
              From paying rent to submitting maintenance requests, it's all just
              a few clicks away. Renting has never been this easy!"{" "}
            </div>
          </div>
          <div className="testimonial-grid-item">
            <img src={testimonial_picture3} alt="HTML 5 Icon" />
            <div className="testimonial-text-container">
              <h3 className="testimonial-name">Lisa M.</h3>
              "I'm impressed with Rent-Ovation's website! It's so easy to manage
              my rental payments and communicate with my landlord. The
              appointment booking feature saved me time and effort when
              scheduling property inspections. This platform is a tenant's
              dream!"{" "}
            </div>
          </div>
          <div className="testimonial-grid-item">
            <img src={testimonial_picture1} alt="HTML 5 Icon" />
            <div className="testimonial-text-container">
              <h3 className="testimonial-name">Mark D.</h3>
              "Rent-Ovation has revolutionized the way I manage my properties.
              The owner portal is a life-saver, allowing me to track rental
              payments, view property performance, and communicate with my
              tenants seamlessly. Such a user-friendly interface makes my job as
              a landlord much more efficient!"{" "}
            </div>
          </div>
        </div>
      </section>
      <section className="section section-accent">
        <h2 className="section-title">Want to know more?</h2>
        {/* <p className="free-sub-title">Want to learn more about our team?</p> */}
        <div className="btn-container contact">
          <NavLink className="contact-btn btn" to="/landlord">
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
