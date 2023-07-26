import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav.js";
import MainPage from "./MainPage.js";
import LandlordPage from "./LandlordPage.js";
// import ErrorNotification from "./ErrorNotification";
import "./css/App.css";

import TenantPage from "./TenantPage.js";
import AboutPage from "./AboutPage.js";
<<<<<<< HEAD
import BillingsPage from "./Billings.js";
=======
import Login from "./LoginForm.js";


import TenantSignupForm from "./TenantSignupForm.js";
import LandlordSignupForm from "./LandlordSignupForm.js";

>>>>>>> main
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
          <Route path="/tenant" element={<TenantPage />} />
          <Route path="/about" element={<AboutPage />} />
<<<<<<< HEAD
          <Route path ="/billings" element={<BillingsPage />} />
=======
          <Route path="/login" element={<Login />} />
>>>>>>> main
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
