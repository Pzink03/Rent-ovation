import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function PropertyCard() {
  const [properties, setProperties] = useState([]);

  const getProperties = async () => {
    const propertiesResponse = await fetch("http://localhost:8000/property/");
    if (propertiesResponse.ok) {
      const properties = await propertiesResponse.json();
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
    getProperties();
  }, []);

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
            <div className="property-feature">{property.name}</div>
            <div className="property-feature">{property.address}</div>
            <div className="property-feature">{property.city}</div>
            <div className="property-feature">{property.state}</div>
            <div className="property-feature">{property.zipcode}</div>
            <div className="property-feature">{property.address}</div>
            <div className="btn-container">
              <NavLink className="btn btn-animation" to="/landlord">
                Appointments
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
