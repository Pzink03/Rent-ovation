import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import header_image from "./img/header_image.jpg";
import { useAuthContext } from "@galvanize-inc/jwtdown-for-react";

function AppointmentCard() {
  const [appointments, setAppointments] = useState([]);
  const { token } = useAuthContext();
  const [account, setAccount] = useState([]);

  const getToken = async () => {
    const tokenUrl = "http://localhost:8000/token";
    const fetchOptions = {
      method: "get",
      credentials: "include",
    };
    const tokenResponse = await fetch(tokenUrl, fetchOptions);
    if (tokenResponse.ok) {
      const token = await tokenResponse.json();
      if (token !== null) {
        setAccount(token.account);
        getAppointments();
      } else {
        setAccount([]);
      }
    }
  };

  const getAppointments = async () => {
    const appointmentsUrl = "http://localhost:8000/appointment/landlord";
    const fetchOptions = {
      method: "get",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const appointmentResponse = await fetch(appointmentsUrl, fetchOptions);
    if (appointmentResponse.ok) {
      const appointments = await appointmentResponse.json();
      console.log(appointments);
      setAppointments(appointments);
    } else {
      console.error({ error: "couldnt get appointments" });
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
    getToken();
  }, [token]);

  return (
    <div className="testimonial-grid">
      {appointments?.length === 0 ? (
        <h1 className="sub-title testimonial">
          You don't have any appointments.
        </h1>
      ) : (
        appointments.map((appointment) => (
          <div
            key={appointment.appointment_id}
            appointment={appointment}
            className="testimonial-grid-item appointments"
          >
            <h3 className="appointment-issue">{appointment.property_name}</h3>
            <div className="testimonial-picture appointments">
              <img src={header_image} alt="HTML 5 Icon" />
            </div>

            <div className="testimonial-text-container appointments">
              <h3 className="appointment-issue-title">Tenant:</h3>
              <div className="appointment-issue">
                {appointment.tenant_email}
              </div>
              <h3 className="appointment-issue-title">Appointment Status:</h3>
              <div className="appointment-issue">
                {appointment.status_label}
              </div>
              <h3 className="appointment-issue-title">Tenant Issue:</h3>
              <div className="appointment-issue">{appointment.issue}</div>
            </div>
            <div className="btn-container appointments">
              <NavLink className="btn btn-animation" to="/landlord">
                Complete
              </NavLink>
              <NavLink
                className="btn btn-animation btn-danger"
                onClick={() => DeleteAppointment(appointment.id)}
              >
                Cancel
              </NavLink>
            </div>
            <div className="appointment-issue created-on">
              Created on: {appointment.created_on}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
export default AppointmentCard;
