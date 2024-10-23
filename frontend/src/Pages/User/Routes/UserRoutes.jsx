import React from "react";
import { Routes, Route } from "react-router-dom";
import DashBoard from "../DashBoard.jsx/DashBoard";
import SideBar from "../../../components/UserComponents/SideBar";
import UserNavbar from "../../../components/UserComponents/UserNavbar";

const UserLayout = ({ children }) => {
  return (
    <div className="flex h-[100vh] w-full">
      <SideBar />
      <div style={{ flex: 1 }}>
        {children} {/* Render the child components, like dashboard */}
      </div>
    </div>
  );
};

const UserRoutes = () => {
  return (
    <UserLayout>
      <UserNavbar />
      <Routes>
        {/* User Dashboard */}
        <Route path="/user/dashboard" element={<DashBoard />} />
      </Routes>
    </UserLayout>
  );
};

export default UserRoutes;
