import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav.js";
import MainPage from "./MainPage.js";
import LandlordPage from "./LandlordPage.js";
import PropertyForm from "./AddProperty.js";
import AppointmentForm from "./AddAppointment.js";
import SignupForm from "./SignupPage.js";
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import RentForm from "./AddRent.js";
import "./css/App.css";
import TenantPage from "./TenantPage.js";
import AboutPage from "./AboutPage.js";
import LoginForm from "./LoginForm.js";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider baseUrl="http://localhost:8000">
        <Nav />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/landlord" element={<LandlordPage />} />
          <Route path="/property" element={<PropertyForm />} />
          <Route path="/tenant" element={<TenantPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/add-appointment" element={<AppointmentForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/rent" element={<RentForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
