import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav.js";
import MainPage from "./MainPage.js";
import LandlordPage from "./LandlordPage.js";
import AppointmentHistoryPage from './AppointmentHistoryPage';
// import ErrorNotification from "./ErrorNotification";
import "./css/App.css";

import TenantPage from "./TenantPage.js";
import AboutPage from "./AboutPage.js";
import LoginForm from "./LoginForm.js";
import BillingsPage from "./Billings.js";

function App() {
  // const { token } = useToken();
  // const [account, setAccount] = useState(null);

  // const getToken = async () => {
  //   const tokenUrl = "http://localhost:8000/token";
  //   const fetchOptions = {
  //     method: "get",
  //     credentials: "include",
  //   };
  //   const tokenResponse = await fetch(tokenUrl, fetchOptions);
  //   if (tokenResponse.ok) {
  //     const tokens = await tokenResponse.json();
  //     if (tokens !== null) {
  //       setAccount(tokens.account);
  //     } else {
  //       setAccount([]);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   getToken();
  //   console.log(token);
  // }, [token]);

  return (
    <BrowserRouter>
      <AuthProvider baseUrl="http://localhost:8000">
        <Nav />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/billings" element={<BillingsPage />} />
          <Route path="/landlord" element={<LandlordPage />} />
          <Route path="/property" element={<PropertyForm />} />
          <Route path="/tenant" element={<TenantPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/add-appointment" element={<AppointmentForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
