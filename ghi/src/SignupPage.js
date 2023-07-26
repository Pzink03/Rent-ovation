import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [is_landlord, setIsLandlord] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    data.email = email;
    data.password = password;
    data.is_landlord = is_landlord;

    const accountsUrl = "http://localhost:8000/api/accounts";
    const fetchOptions = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const accountsResponse = await fetch(accountsUrl, fetchOptions);
    if (accountsResponse.ok) {
      setEmail("");
      setPassword("");
      setIsLandlord(false);
      navigate("/login");
    }
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleLandlordChange = (event) => {
    setIsLandlord(event.target.value === "yes");
  };

  return (
    <>
      <div className="form-background"></div>

      <div className="form-container">
        <form
          onSubmit={handleSubmit}
          className="form-box"
          id="create-sales-form"
        >
          <h1 className="form-title">Sign Up</h1>

          <label className="label" htmlFor="name">
            Email:
          </label>
          <div className="form-floating">
            <input
              onChange={handleEmailChange}
              value={email}
              placeholder="Email"
              required
              type="text"
              name="name"
              id="name"
              className="input"
            />
          </div>
          <label className="label" htmlFor="picture_url">
            Password:
          </label>
          <div className="form-floating mb-3">
            <input
              onChange={handlePasswordChange}
              value={password}
              placeholder="Password"
              required
              type="text"
              name="address"
              id="address"
              className="input"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Are you a landlord?</label>
            <select
              className="form-select"
              value={is_landlord ? "yes" : "no"}
              onChange={handleLandlordChange}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="mb-3">
            <div className="btn-form-container">
              <button className="btn btn-form">Create</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default SignupForm;
