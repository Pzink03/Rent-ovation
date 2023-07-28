import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "@galvanize-inc/jwtdown-for-react";

function TenantPropertyCard() {
  const [properties, setProperties] = useState([]);
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
    const propertiesUrl = "http://localhost:8000/property/";
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
  }, []);

  return (
    <div className="landlord-cards-container">
      {properties.length === 0 ? (
        <div>
          <h1 className="sub-title">
            You don't have a property assigned to your account. <br></br>Speak
            with your landlord about adding one
          </h1>
        </div>
      ) : (
        properties.map((property) => (
          <div key={property.id} property={property} className="property-card">
            {/* Property Card content */}
            <div className="property-name">{property.name}</div>
            <div className="property-header">
              <img
                className="property-picture"
                src={property.picture_url}
                alt=""
              />
            </div>
            <div className="property-feature">{property.name}</div>
            <div className="property-feature">{property.address}</div>
            <div className="property-feature">{property.city}</div>
            <div className="property-feature">{property.state}</div>
            <div className="property-feature">{property.zipcode}</div>
            <div className="property-feature">{property.address}</div>
            <div className="btn-container">
              <NavLink className="btn btn-animation tenant-btn" to="/tenant">
                Pay Rent
              </NavLink>
              <NavLink
                className="btn btn-animation tenant-btn"
                to="/add-appointment"
              >
                Book Appointment
              </NavLink>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
export default TenantPropertyCard;
