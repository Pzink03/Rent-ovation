import React, { useState } from 'react';
import axios from 'axios';

const LandlordSignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

    try {
      const response = await axios.post('http://localhost:3000/signup/landlord', {
        name,
        email,
        password
      });

      // handle the successful signup

      console.log('Landlord signup successful:', response.data);
    } catch (error) {
      console.error('Landlord signup failed:', error);
    }
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
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default LandlordSignupForm;
