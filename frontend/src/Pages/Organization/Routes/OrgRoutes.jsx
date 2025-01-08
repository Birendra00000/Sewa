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

const OrgLayout = ({ children }) => {
  return (
    <div className="flex h-[100vh] w-full">
      {children} {/* Render the child components, like dashboard */}
    </div>
  );
};

const OrgRoutes = () => {
  const { themeState, themeDispatch } = useContext(ThemeContext);

  const enableLightMode = () =>
    themeDispatch({ type: ACTION_TYPES.LIGHTHMODE });
  const enableDarkMode = () => themeDispatch({ type: ACTION_TYPES.DARKMODE });

  return (
    <OrgLayout>
      {/* <OrgNavbar
        enableLightMode={enableLightMode}
        enableDarkMode={enableDarkMode}
        themeState={themeState}
      /> */}
      <Routes>
        {/* User Dashboard */}
        <Route
          path="/org/dashboard"
          element={<OrgFashBoard themeState={themeState} />}
        />{" "}
      </Routes>
    </OrgLayout>
  );
};

export default OrgRoutes;
