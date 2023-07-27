import useToken from "@galvanize-inc/jwtdown-for-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthContext } from "@galvanize-inc/jwtdown-for-react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useToken();
  const { token } = useAuthContext();
  const navigate = useNavigate();
  console.log(token);
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
        console.log(token.account);
        if (token.account.is_landlord !== true) {
          navigate("/tenant");
        } else {
          navigate("/landlord");
        }
      }
    }
  };

  useEffect(() => {
    getToken();
  }, [token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = email;
    login(username, password);
    e.target.reset();
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

export default LoginForm;
