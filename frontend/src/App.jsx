import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./Pages/Aboutus";
import EventSection from "./components/EventSection";
import ContactUs from "./components/ContactUs";
import Home from "./Pages/Home";
import OrgRegistration from "./Pages/Organization/orgRegistration";
import UserRoutes from "./Pages/User/Routes/UserRoutes";
import { AuthContext } from "./context/authentication/AuthContext";
import UserLogin from "./Pages/User/UserLogin";
import UserRegistration from "./Pages/User/UserRegistration";
import TotalEventList from "./components/TotalEventList";
import OrgRoutes from "./Pages/Organization/Routes/OrgRoutes";
import OrgLogin from "./Pages/Organization/OrgLogin";
import CreateEvent from "./components/Createevent";

const App = () => {
  const { authState } = useContext(AuthContext);
  // console.log(" authState.userData?.account_type=", authState.account_type);
  return (
    <Router>
      {/* Display Navbar for authenticated users */}
      {!(
        authState?.isAuth &&
        (authState.account_type === "user" ||
          authState.account_type === "organization")
      ) && <Navbar />}

      {/* Conditional Routes */}
      <Routes>
        {authState?.isAuth ? (
          authState.account_type === "organization" ? (
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
            <Route path="/createEvent" element={<CreateEvent />} />
            <Route path="/event/:id" element={<EventSection />} />
            <Route path="/org/register" element={<OrgRegistration />} />
            <Route path="/org/login" element={<OrgLogin />} />
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
