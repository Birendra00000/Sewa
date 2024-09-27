import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./Pages/Aboutus";
import EventList from "./components/EventList";
import EventSection from "./components/EventSection";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import CreateEvent from "./components/Createevent";
import Home from "./Pages/Home";
import UserRegistration from "./Pages/User/UserRegistration";
import OrgRegistration from "./Pages/Organization/orgRegistration";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Route */}
        <Route path="/aboutus" element={<AboutUs />} /> {/* About Us Page */}
        <Route path="/event" element={<EventList />} /> {/* List of Events */}
        <Route path="/event/:id" element={<EventSection />} />{" "}
        {/* Event Details Page */}
        <Route path="/userregister" element={<UserRegistration />} />{" "}
        <Route path="/orgregister" element={<OrgRegistration />} />{" "}
        {/* Registration Form */}
        <Route path="/contactus" element={<ContactUs />} />{" "}
        <Route path="/createEvent" element={<CreateEvent />} />{" "}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
