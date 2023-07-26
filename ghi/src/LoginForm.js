import useToken from "@galvanize-inc/jwtdown-for-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [is_landlord, setIsLandlord] = useState(false);
  const { login } = useToken();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = email;
    login(username, password)
      .then(() => {
        console.log(
          `email: ${email} password: ${password} is_landlord: ${is_landlord}`
        );
        e.target.reset();
        if (is_landlord !== true) {
          navigate("/tenant");
        } else {
          // Step 3: Redirect the user to a specific route upon successful login
          navigate("/landlord");
        } // Replace "/dashboard" with the desired route
      })
      .catch((error) => {
        console.error("Login failed:", error);
        // Handle login error if needed
      });
  };

  const handleCheck = (e) => {
    setIsLandlord(e.target.checked);
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
          <h1 className="form-title">Login</h1>

          <label className="label" htmlFor="name">
            Email:
          </label>
          <div className="form-floating">
            <input
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              type="text"
              name="address"
              id="address"
              className="input"
            />
          </div>
          <label className="label" htmlFor="name">
            Landlord?
          </label>
          <div className="form-floating">
            <input
              onChange={handleCheck}
              placeholder="Email"
              required
              type="checkbox"
              checked={is_landlord}
              value="landlord"
              className="input"
            />
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
};

export default LoginForm;
