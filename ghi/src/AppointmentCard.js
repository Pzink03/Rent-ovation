import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import profile1 from "./img/profile1.jpg";
import header_image from "./img/header_image.jpg";

function AppointmentCard() {
  const [appointments, setAppointments] = useState([]);

  const getAppointments = async () => {
    const appointmentsResponse = await fetch(
      "http://localhost:8000/appointment/"
    );
    if (appointmentsResponse.ok) {
      const appointments = await appointmentsResponse.json();
      console.log(appointments);
      setAppointments(appointments);
    }
  };

  const DeleteAppointment = async (id) => {
    const appointmentResponse = await fetch(
      `http://localhost:8000/appointment/${id}`,
      {
        method: "DELETE",
      }
    );
    if (appointmentResponse.ok) {
      getAppointments();
    }
  };

  useEffect(() => {
    getAppointments();
  }, []);

  return (
    <div className="testimonial-grid">
      {appointments.length === 0 ? (
        <h1 className="sub-title testimonial">
          You don't have any appointments.
        </h1>
      ) : (
        appointments.map((appointment) => (
          <div
            key={appointment.id}
            appointment={appointment}
            className="testimonial-grid-item appointments"
          >
            <div className="testimonial-picture appointments">
              <img src={header_image} alt="HTML 5 Icon" />
            </div>

            <div className="testimonial-text-container appointments">
              <h3>Property:</h3>
              <div className="appointment-issue">{appointment.property_id}</div>
              <h3>Status:</h3>
              <h3 className="appointment-issue">{appointment.status_id}</h3>
              <h3>Issue:</h3>
              <div className="appointment-issue2">{appointment.issue}</div>
              <h3>Created On:</h3>
              <div className="appointment-issue">{appointment.created_on}</div>
            </div>
            <div className="btn-container appointments">
              <NavLink className="btn btn-animation" to="/landlord">
                Update
              </NavLink>
              <NavLink
                className="btn btn-animation btn-danger"
                onClick={() => DeleteAppointment(appointment.id)}
              >
                Delete
              </NavLink>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
export default AppointmentCard;
