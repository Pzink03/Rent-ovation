import React, { useState } from "react";

const LandlordSignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await ("http://localhost:3000/signup/landlord", {
        name,
        email,
        password,
      });

      // Handle the successful signup
      console.log("Landlord signup successful:", response.data);


      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Landlord signup failed:", error);
      // handle error, show error message.
    }

    setIsSubmitting(false);
  };

  return (
    <div>
      <h2>Landlord Signup</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
          required
        /><br /><br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        /><br /><br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
        /><br /><br />
        <button type="submit" disabled={isSubmitting}>Signup</button>
      </form>
    </div>
  );
}

export default LandlordSignupForm;
