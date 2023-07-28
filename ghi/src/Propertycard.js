import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "@galvanize-inc/jwtdown-for-react";

function PropertyCard() {
  const [properties, setProperties] = useState([]);
  const [account, setAccount] = useState([]);
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
        setAccount(token.account);
        getProperties();
      } else {
        setAccount([]);
      }
    }
  };

  const getProperties = async () => {
    const propertiesUrl = "http://localhost:8000/property/landlord";
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

  const DeleteProperty = async (id) => {
    const propertyResponse = await fetch(
      `http://localhost:8000/property/${id}`,
      {
        method: "DELETE",
      }
    );
    if (propertyResponse.ok) {
      getProperties();
    }
  };

  useEffect(() => {
    // if (token && properties) {
    //   const getProperties = async () => {
    //     const propertiesUrl = "http://localhost:8000/property/user";
    //     const fetchOptions = {
    //       method: "get",
    //       credentials: "include",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${token}`,
    //       },
    //     };
    //     const propertyResponse = await fetch(propertiesUrl, fetchOptions);
    //     if (propertyResponse.ok) {
    //       const properties = await propertyResponse.json();
    //       console.log(properties);
    //       setProperties(properties);
    //     }
    //   };
    getToken();
    // getProperties();
  }, [token]);

  return (
    <div className="landlord-cards-container">
      {properties.length === 0 ? (
        <div>
          <h1 className="sub-title">
            You don't have any properties. Would you like to add some?
          </h1>
          <div className="property-btn-container">
            <NavLink className="contact-btn btn" to="/property">
              Add Property
            </NavLink>
          </div>
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
            <label className="property-label">Name:</label>
            <div className="property-feature">{property.name}</div>
            <label className="property-label">Address:</label>

            <div className="property-feature">{property.address}</div>
            <label className="property-label">City:</label>
            <div className="property-feature">{property.city}</div>
            <label className="property-label">State:</label>
            <div className="property-feature">{property.state}</div>
            <label className="property-label">Zip:</label>
            <div className="property-feature">{property.zipcode}</div>

            <div className="btn-container">
              <NavLink className="btn btn-animation" to="/landlord">
                Update
              </NavLink>
              <NavLink
                className="btn btn-animation btn-danger"
                onClick={() => DeleteProperty(property.id)}
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
export default PropertyCard;
