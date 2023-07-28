import React, { useState, useEffect } from "react";
import logo from "./img/logo.png";
import { useAuthContext } from "@galvanize-inc/jwtdown-for-react";

function AppointmentForm() {
  const [statuses, setStatuses] = useState([]);
  const [status, setStatus] = useState("");
  const [issue, setIssue] = useState("");
  const { token } = useAuthContext();

  const fetchStatus = async () => {
    const statusUrl = "http://localhost:8000/status/";

    const statusResponse = await fetch(statusUrl);
    if (statusResponse.ok) {
      const statusData = await statusResponse.json();
      console.log(statusData);
      setStatuses(statusData);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    data.status_label = status;
    data.issue = issue;
    console.log(data);

    const appointmentUrl = "http://localhost:8000/create/appointment/";
    const fetchOptions = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const createAppointmentResponse = await fetch(appointmentUrl, fetchOptions);
    if (createAppointmentResponse.ok) {
      setStatus("");
      setIssue("");
    }
  };

  //   const filterAccounts = accounts.filter((account) => {
  //     return account.is_landlord !== true;
  //   });

  const handleChangeStatus = (event) => {
    const value = event.target.value;
    setStatus(value);
  };

  const handleChangeIssue = (event) => {
    const value = event.target.value;
    setIssue(value);
  };

  //   let messageClasses = "alert alert-success d-none mb-0";
  //   let formClasses = "";
  //   if (hasSignedUp) {
  //     messageClasses = "alert alert-success mb-0";
  //     formClasses = "d-none";
  //   }

  return (
    <>
      <div className="form-background"></div>

      <div className="form-container">
        <form
          onSubmit={handleSubmit}
          className="form-box"
          id="create-sales-form"
        >
          <h1 className="form-title">Book Appointment</h1>

          <label className="label" htmlFor="name">
            Issue:
          </label>
          <div className="form-floating">
            <textarea
              onChange={handleChangeIssue}
              value={issue}
              placeholder="Please explain your reason for booking the appointment"
              required
              type="text"
              name="name"
              id="name"
              className="issue-input"
            />
          </div>

          <div className="mb-3">
            <div className="form-dropdown">
              <select
                onChange={handleChangeStatus}
                value={status}
                required
                name="tenant_id"
                id="tenant_id"
                className="form-select"
              >
                <option value="">How Urgent is your appointment</option>
                {statuses.map((status) => {
                  return (
                    <option key={status.id} value={status.id}>
                      {status.status_label}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="btn-form-container">
              <button className="btn btn-form">Create</button>
            </div>
          </div>
        </form>
        {/* <div className={messageClasses} id="success-message">
            Congratulations on the sale!
          </div> */}
      </div>
      <footer>
        <nav className="nav">
          <img className="logo" src={logo} alt="Web Dev Simplified Logo" />
        </nav>
      </footer>
    </>
  );
}

export default AppointmentForm;
