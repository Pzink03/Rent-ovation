import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav.js';
import MainPage from './MainPage.js';
import LandlordPage from './LandlordPage.js';
import TenantSignupForm from './TenantSignupForm';
import LandlordSignupForm from './LandlordSignupForm';
import LoginForm from './LoginForm';
import './css/App.css';

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/landlord" element={<LandlordPage />} />
          <Route path="/tenant-signup" element={<TenantSignupForm />} />
          <Route path="/landlord-signup" element={<LandlordSignupForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
