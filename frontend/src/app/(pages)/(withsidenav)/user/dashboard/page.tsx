"use client";

import DashBoardCard from "@/components/UserComponents/dashboard/DashBoardCard";
import { AuthContext } from "@/context/authentication/AuthContext";
import React, { useContext, useEffect } from "react";

const Page = ({ themeState }) => {
  const { authState } = useContext(AuthContext);
  // console.log("authStatedashboard", authState);

  useEffect(() => {
    // Check if user is authenticated and has the required data
    // if (!authState.isAuth) {
    //   // Redirect to login or show some message
    //   console.log("User data updated:", authState.user);
    // }
  }, [authState]);

  return (
    <div
      className="flex justify-center w-full "
      style={{
        backgroundColor: themeState.darkMode ? "#333" : "#fff",
        color: themeState.darkMode ? "#fff" : "#000",
        padding: "20px",
      }}
    >
      <div className="w-11/12 justify-center ">
        {authState?.isAuth ? (
          <span className="text-xl font-semibold ">
            Welcome,To Your DashBoard {authState?.firstName}{" "}
            {authState?.lastName}
          </span>
        ) : (
          <></>
        )}

        <div>
          <DashBoardCard authState={authState} />
        </div>
      </div>
    </div>
  );
};

export default Page;
