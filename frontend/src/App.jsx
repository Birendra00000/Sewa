import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./Pages/Aboutus";
import EventList from "./components/TotalEventList";
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
import TotalEventList from "./components/TotalEventList";
import OrgNavbar from "./components/OrgComponents/OrgNavbar";
import OrgRoutes from "./Pages/Organization/Routes/OrgRoutes";
const App = () => {
  const { authState } = useContext(AuthContext);

  return (
    <Router>
      {/* Conditional Navbar */}
      {authState?.isAuth ? (
        authState.accountType === "organization" ? (
          <OrgNavbar />
        ) : (
          <Navbar />
        )
      ) : (
        <Navbar />
      )}

      {/* Conditional Routes */}
      <Routes>
        {authState?.isAuth ? (
          authState.accountType === "organization" ? (
            // Organization Routes
            <Route path="/*" element={<OrgRoutes />} />
          ) : (
            // User Routes
            <Route path="/*" element={<UserRoutes />} />
          )
        ) : (
          // Public Routes
          <>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/event" element={<TotalEventList />} />
            <Route path="/event/:id" element={<EventSection />} />
            <Route path="/orgregister" element={<OrgRegistration />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/user/login" element={<UserLogin />} />
            <Route path="/user/register" element={<UserRegistration />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
