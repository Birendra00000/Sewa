import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./Pages/Aboutus";
import EventList from "./components/EventList";
import EventSection from "./components/EventSection";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import CreateEvent from "./components/Createevent";
import Home from "./Pages/Home";
import OrgRegistration from "./Pages/Organization/orgRegistration";
import UserRoutes from "./Pages/User/Routes/UserRoutes";

import { AuthContext } from "./context/authentication/AuthContext";

import UserLogin from "./Pages/User/UserLogin";
import UserRegistration from "./Pages/User/UserRegistration";
const App = () => {
  const { authState } = useContext(AuthContext);
  console.log("authState", authState.isAuth);
  return (
    <Router>
      {authState?.isAuth ? <></> : <Navbar />}
      <Routes>
        {authState.isAuth ? (
          <>
            {/* FOR USER ONLY */}
            <Route path="/*" element={<UserRoutes />} />{" "}
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} /> {/* Home Route */}
            <Route path="/aboutus" element={<AboutUs />} />{" "}
            {/* About Us Page */}
            <Route path="/event" element={<EventList />} />{" "}
            {/* List of Events */}
            <Route path="/event/:id" element={<EventSection />} />{" "}
            {/* Event Details Page */}
            {/* All user-related routes */} {/* FOR ORGANIZATION ONLY */}
            <Route path="/orgregister" element={<OrgRegistration />} />{" "}
            {/* Registration Form */}
            <Route path="/contactus" element={<ContactUs />} />{" "}
            <Route path="/createEvent" element={<CreateEvent />} />{" "}
            {/* User Registration */}
            <Route path="/user/login" element={<UserLogin />} />{" "}
            {/* User Login */}
            <Route path="/user/register" element={<UserRegistration />} />{" "}
          </>
        )}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
