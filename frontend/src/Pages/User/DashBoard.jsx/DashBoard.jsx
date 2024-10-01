import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/authentication/AuthContext";

const Dashboard = () => {
  const { authState, userData } = useContext(AuthContext);
  // console.log("authState", authState);
  useEffect(() => {
    // Check if user is authenticated and has the required data
    if (!authState.isAuth) {
      // Redirect to login or show some message
      console.log("User not authenticated");
    }
  }, [authState]);

  return (
    <div>
      {authState.isAuth ? (
        <div>
          <h1>
            Welcome, {authState.firstName} {authState.lastName}
          </h1>
          <p>Email: {userData.account_type || "N/A"}</p>
          <p>Account Type: {authState.account_type}</p>
          {/* Add more user-related information as needed */}
        </div>
      ) : (
        <p>Please log in to view your dashboard.</p>
      )}
    </div>
  );
};

export default Dashboard;
