import React, { useState, useEffect } from "react";
import logo from "./img/logo.png";
import { useAuthContext } from "@galvanize-inc/jwtdown-for-react";

function PropertyForm() {
  const [accounts, setAccounts] = useState([]);
  const [account, setTenant] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [description, setDescription] = useState("");
  const { token } = useAuthContext();
  const [tenant_ids, setTenants] = useState([]);

  const fetchData = async () => {
    const propertyURL = "http://localhost:8000/property/";
    const propertyResponse = await fetch(propertyURL);
    if (propertyResponse.ok) {
      const propertyData = await propertyResponse.json();
      const tenant_array = propertyData.map((property) => [property.tenant_id]);
      console.log(tenant_array.flat());
      setTenants(tenant_array.flat());

      const accountsUrl = "http://localhost:8000/accounts/all/";

      const accountsResponse = await fetch(accountsUrl);
      if (accountsResponse.ok) {
        const accountsData = await accountsResponse.json();
        console.log(accountsData);
        setAccounts(accountsData);
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    data.tenant_id = account;
    data.name = name;
    data.address = address;
    data.city = city;
    data.state = state;
    data.zipcode = zipcode;
    data.picture_url = pictureUrl;
    data.description = description;
    console.log(data);

    const propertyUrl = "http://localhost:8000/create/property/";
    const fetchOptions = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const createPropertyResponse = await fetch(propertyUrl, fetchOptions);
    if (createPropertyResponse.ok) {
      setTenant("");
      setName("");
      setAddress("");
      setCity("");
      setState("");
      setZipcode("");
      setPictureUrl("");
      setDescription("");
    }
  };

  const handleChangeTenant = (event) => {
    const value = event.target.value;
    setTenant(value);
  };

  const handleChangeName = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleChangeAddress = (event) => {
    const value = event.target.value;
    setAddress(value);
  };
  const handleChangeCity = (event) => {
    const value = event.target.value;
    setCity(value);
  };

  const handleChangeState = (event) => {
    const value = event.target.value;
    setState(value);
  };

  const handleChangeZipcode = (event) => {
    const value = event.target.value;
    setZipcode(value);
  };

  const handleChangePictureUrl = (event) => {
    const value = event.target.value;
    setPictureUrl(value);
  };
  const handleChangeDescription = (event) => {
    const value = event.target.value;
    setDescription(value);
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
          <h1 className="form-title gradient-text">ADD PROPERTY</h1>

          <label className="label" htmlFor="name">
            Name:
          </label>
          <div className="form-floating">
            <input
              onChange={handleChangeName}
              value={name}
              placeholder="Name"
              required
              type="text"
              name="name"
              id="name"
              className="input"
            />
          </div>
          <label className="label" htmlFor="picture_url">
            Address:
          </label>
          <div className="form-floating mb-3">
            <input
              onChange={handleChangeAddress}
              value={address}
              placeholder="Address"
              required
              type="text"
              name="address"
              id="address"
              className="input"
            />
          </div>
          <div className="mb-3">
            <label className="label" htmlFor="city">
              City:
            </label>
            <div className="form-floating mb-3">
              <input
                onChange={handleChangeCity}
                value={city}
                placeholder="City"
                required
                type="text"
                name="city"
                id="city"
                className="input"
              />
            </div>
            <label className="label" htmlFor="state">
              State:
            </label>
            <div className="form-floating mb-3">
              <input
                onChange={handleChangeState}
                value={state}
                placeholder="State"
                required
                type="text"
                name="state"
                id="state"
                className="input"
              />
            </div>
            <label className="label" htmlFor="zipcode">
              Zipcode:
            </label>
            <div className="form-floating mb-3">
              <input
                onChange={handleChangeZipcode}
                value={zipcode}
                placeholder="Zipcode"
                required
                type="text"
                name="zipcode"
                id="zipcode"
                className="input"
              />
            </div>
            <label className="label" htmlFor="picture_url">
              Property Picture:
            </label>
            <div className="form-floating mb-3">
              <input
                onChange={handleChangePictureUrl}
                value={pictureUrl}
                placeholder="Picture"
                required
                type="text"
                name="picture_url"
                id="picture_url"
                className="input"
              />
            </div>
            <label className="label" htmlFor="description">
              Description:
            </label>
            <div className="form-floating mb-3">
              <input
                onChange={handleChangeDescription}
                value={description}
                placeholder="Description"
                required
                type="text"
                name="description"
                id="description"
                className="input"
              />
            </div>
            <div className="form-dropdown">
              <select
                onChange={handleChangeTenant}
                value={account}
                required
                name="tenant_id"
                id="tenant_id"
                className="form-select"
              >
                <option value="">Choose a Tenant</option>
                {accounts
                  .filter((account) => account.is_landlord !== true)
                  .filter((account) => !tenant_ids.includes(account.id))
                  .map((account) => {
                    return (
                      <option key={account.id} value={account.id}>
                        {account.email}
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
      </div>
      <footer>
        <nav className="nav footer">
          <img className="logo" src={logo} alt="Web Dev Simplified Logo" />
        </nav>
      </footer>
    </>
  );
}

export default PropertyForm;
