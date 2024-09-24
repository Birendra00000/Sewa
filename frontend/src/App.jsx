import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./Pages/Aboutus";
import EventList from "./components/EventList";
import EventSection from "./components/EventSection";
import RegistrationPage from "./Pages/RegistrationPage";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import CreateEvent from "./components/Createevent";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
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
        <Route path="/userregister" element={<RegistrationPage />} />{" "}
        <Route path="/orgregister" element={<RegistrationPage />} />{" "}
        {/* Registration Form */}
        <Route path="/contactus" element={<ContactUs />} />{" "}
        <Route path="/createEvent" element={<CreateEvent />} />{" "}
        <Route path="/login" element={<Login />} />{" "}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
