import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
// import UserNavbar from "../../../components/UserComponents/UserNavbar";
// import Dashboard from "../DashBoard/DashBoard";
// import EventList from "../UserEventList/EventList";
// import TotalEventList from "../../../components/TotalEventList";
import { ThemeContext } from "../../../context/authentication/themeContext";
import * as ACTION_TYPES from "../../../context/authentication/type";
import OrgNavbar from "../../../components/OrgComponents/OrgNavbar";
import OrgFashBoard from "../DashBoard/OrgFashBoard";
import OrgLogin from "../OrgLogin";
import OrgRegistration from "../orgRegistration";

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

const OrgRoutes = () => {
  const { themeState, themeDispatch } = useContext(ThemeContext);

  const enableLightMode = () =>
    themeDispatch({ type: ACTION_TYPES.LIGHTHMODE });
  const enableDarkMode = () => themeDispatch({ type: ACTION_TYPES.DARKMODE });

  return (
    <UserLayout>
      <OrgNavbar
        enableLightMode={enableLightMode}
        enableDarkMode={enableDarkMode}
        themeState={themeState}
      />
      <Routes>
        {/* User Dashboard */}
        <Route
          path="/org/dashboard"
          element={<OrgFashBoard themeState={themeState} />}
        />{" "}
        {/* <Route
          path="/user/events"
          element={<EventList themeState={themeState} />}
        />{" "}
        <Route
          path="/event"
          element={<TotalEventList themeState={themeState} />}
        />{" "} */}
      </Routes>
    </UserLayout>
  );
};

export default OrgRoutes;
