// UserRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import DashBoard from "../DashBoard.jsx/DashBoard";
import UserLogin from "../UserLogin";
import UserRegistration from "../UserRegistration";
const UserRoutes = () => {
  return (
    <Routes>
      {/* User Registration */}
      <Route path="/user/login" element={<UserLogin />} /> {/* User Login */}
      <Route path="/user/register" element={<UserRegistration />} />{" "}
      {/* User Dashboard */}
      <Route path="/user/dashboard" element={<DashBoard />} />{" "}
    </Routes>
  );
};

export default UserRoutes;
