import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav.js";
import MainPage from "./MainPage.js";
import LandlordPage from "./LandlordPage.js";
import AppointmentHistoryPage from './AppointmentHistoryPage';
// import ErrorNotification from "./ErrorNotification";
import "./css/App.css";

import TenantPage from "./TenantPage.js";
import AboutPage from "./AboutPage.js";
import Login from "./LoginForm.js";


import TenantSignupForm from "./TenantSignupForm.js";
import LandlordSignupForm from "./LandlordSignupForm.js";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/landlord" element={<LandlordPage />} />
          <Route path="/appointment-history" element={<AppointmentHistoryPage />} />
          <Route path="/tenant-signup" element={<TenantSignupForm />} />
          <Route path="/landlord-signup" element={<LandlordSignupForm />} />
          <Route path="/tenant" element={<TenantPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
