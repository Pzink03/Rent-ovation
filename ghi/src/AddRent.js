import { useAuthContext } from "@galvanize-inc/jwtdown-for-react";
import React, { useState, useEffect } from "react";
import logo from "./img/logo.png";

function RentForm() {
  const [properties, setProperties] = useState([]);
  const [property, setProperty] = useState("");
  const [amount_due, setAmountDue] = useState("");
  const [due_date, setDueDate] = useState("");
  const { token } = useAuthContext();

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
        getProperties();
      }
    }
  };

  const getProperties = async () => {
    const propertiesUrl = "http://localhost:8000/property/user";
    const fetchOptions = {
      method: "get",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const propertyResponse = await fetch(propertiesUrl, fetchOptions);
    if (propertyResponse.ok) {
      const properties = await propertyResponse.json();
      console.log(properties);
      setProperties(properties);
    }
  };
  useEffect(() => {
    getToken();
  }, [token]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    data.property_id = property;
    data.amount_due = amount_due;
    data.due_date = due_date;
    console.log(data);

    const rentUrl = `http://localhost:8000/create/rent/?property_id=${property}`;
    const fetchOptions = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const createRentResponse = await fetch(rentUrl, fetchOptions);
    if (createRentResponse.ok) {
      setProperty("");
      setAmountDue("");
      setDueDate("");
    }
  };

  const handleChangeProperty = (event) => {
    const value = event.target.value;
    setProperty(value);
  };

  const handleChangeAmountDue = (event) => {
    const value = event.target.value;
    setAmountDue(value);
  };

  const handleChangeDueDate = (event) => {
    const value = event.target.value;
    setDueDate(value);
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
          <h1 className="form-title">Assign Rent</h1>

          <label className="label" htmlFor="name">
            Amount Due:
          </label>
          <div className="form-floating">
            <input
              onChange={handleChangeAmountDue}
              value={amount_due}
              placeholder="Please explain your reason for booking the appointment"
              required
              type="text"
              name="name"
              id="name"
              className="input"
            />
          </div>
          <label className="label" htmlFor="name">
            Due Date:
          </label>
          <div className="form-floating">
            <input
              onChange={handleChangeDueDate}
              value={due_date}
              placeholder="Please explain your reason for booking the appointment"
              required
              type="text"
              name="name"
              id="name"
              className="input"
            />
          </div>

          <div className="mb-3">
            {/* <div className="form-dropdown">
              <select
                onChange={handleChangeProperty}
                value={property}
                required
                name="tenant_id"
                id="tenant_id"
                className="form-select"
              >
                <option value="">Property</option>
                {properties.map((property) => {
                  return (
                    <option key={property.id} value={property.property_id}>
                      {property.id}
                    </option>
                  );
                })}
              </select>
            </div> */}
            <div className="btn-form-container">
              <button className="btn btn-form">Submit</button>
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

export default RentForm;
