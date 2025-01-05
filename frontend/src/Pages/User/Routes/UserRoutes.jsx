import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "../../../components/UserComponents/SideBar";
import UserNavbar from "../../../components/UserComponents/UserNavbar";
import Dashboard from "../DashBoard/DashBoard";
import EventList from "../UserEventList/EventList";
import TotalEventList from "../../../components/TotalEventList";
import { ThemeContext } from "../../../context/authentication/themeContext";
import * as ACTION_TYPES from "../../../context/authentication/type";

const UserLayout = ({ children }) => {
  return (
    <div className="flex h-[100vh] w-full">
      <SideBar />
      <div
        style={{
          flex: 1,
        }}
      >
        {children} {/* Render the child components, like dashboard */}
      </div>
    </div>
  );
};

const UserRoutes = () => {
  const { themeState, themeDispatch } = useContext(ThemeContext);

  const enableLightMode = () =>
    themeDispatch({ type: ACTION_TYPES.LIGHTHMODE });
  const enableDarkMode = () => themeDispatch({ type: ACTION_TYPES.DARKMODE });

  // console.log("themeState", themeState);

  return (
    <UserLayout>
      <UserNavbar
        enableLightMode={enableLightMode}
        enableDarkMode={enableDarkMode}
        themeState={themeState}
      />
      <Routes>
        {/* User Dashboard */}
        <Route
          path="/user/dashboard"
          element={<Dashboard themeState={themeState} />}
        />{" "}
        <Route
          path="/user/events"
          element={<EventList themeState={themeState} />}
        />{" "}
        <Route
          path="/event"
          element={<TotalEventList themeState={themeState} />}
        />{" "}
      </Routes>
    </UserLayout>
  );
};

export default UserRoutes;
