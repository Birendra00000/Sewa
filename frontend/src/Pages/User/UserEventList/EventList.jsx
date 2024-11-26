import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/authentication/AuthContext";
import UserEvent from "../../../components/UserComponents/UserEventsList/UserEvent";

const EventList = () => {
  const { authState } = useContext(AuthContext);
  console.log("authStatedashboard", authState);
  useEffect(() => {
    // Check if user is authenticated and has the required data
    // if (!authState.isAuth) {
    //   // Redirect to login or show some message
    //   console.log("User data updated:", authState.user);
    // }
  }, [authState]);

  return (
    <>
      <UserEvent authState={authState} />
    </>
  );
};

export default EventList;
