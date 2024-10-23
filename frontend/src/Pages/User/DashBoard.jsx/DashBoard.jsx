import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/authentication/AuthContext";
import DashBoardCard from "../../../components/UserComponents/dashboard/DashBoardCard";

const Dashboard = () => {
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
    <div className="flex justify-center w-full mt-[5%]">
      <div className="w-11/12 justify-center ">
        {authState?.isAuth ? (
          <span className="text-xl font-semibold text-black">
            Welcome,To Your DashBoard {authState?.firstName}{" "}
            {authState?.lastName}
          </span>
        ) : (
          <></>
        )}

        <div>
          <DashBoardCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
