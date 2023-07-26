// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav.js";
import MainPage from "./MainPage.js";
import LandlordPage from "./LandlordPage.js";
import PropertyForm from "./AddProperty.js";
import AppointmentForm from "./AddAppointment.js";
import SignupForm from "./SignupPage.js";
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import LoginForm from "./LoginForm.js";
// import ErrorNotification from "./ErrorNotification";
import "./css/App.css";

import TenantPage from "./TenantPage.js";
import AboutPage from "./AboutPage.js";

function App() {
  const baseURL = process.env.REACT_APP_API_HOST;
  // const [launchInfo, setLaunchInfo] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   async function getData() {
  //     let url = `${process.env.REACT_APP_API_HOST}/api/launch-details`;
  //     console.log("fastapi url: ", url);
  //     let response = await fetch(url);
  //     console.log("------- hello? -------");
  //     let data = await response.json();

  //     if (response.ok) {
  //       console.log("got launch data!");
  //       setLaunchInfo(data.launch_details);
  //     } else {
  //       console.log("drat! something happened");
  //       setError(data.message);
  //     }
  //   }
  //   getData();
  // }, []);

  return (
    <BrowserRouter>
      <AuthProvider baseUrl="http://localhost:8000">
        <Nav />

        <div>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/landlord" element={<LandlordPage />} />
            <Route path="/property" element={<PropertyForm />} />
            <Route path="/tenant" element={<TenantPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/add-appointment" element={<AppointmentForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
