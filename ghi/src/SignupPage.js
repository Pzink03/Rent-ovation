import React, { useState } from "react";
import useToken from "@galvanize-inc/jwtdown-for-react";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [is_landlord, setIsLandlord] = useState(null);
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const { register } = useToken();

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
      } else {
        setAccount([]);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {};
    data.email = email;
    data.password = password;
    data.is_landlord = is_landlord;
    data.username = email;
    register(data, "http://localhost:8000/api/accounts", "post");
    console.log(data);
    getToken();

    if (is_landlord === false) {
      navigate("/tenant");
    } else if (is_landlord === true) {
      navigate("/landlord");
    } else {
      console.error("Invalid Value");
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
          <div className="form-floating mb-3">
            <label className="form-label">Are you a landlord?</label>
            <select
              className="form-select"
              placeholder="--"
              value={is_landlord === null ? "--" : is_landlord ? "yes" : "no"}
              onChange={handleLandlordChange}
              required
            >
              <option value="--">--</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="mb-3">
            <div className="btn-form-container ">
              <button className="btn btn-form">Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default SignupForm;
