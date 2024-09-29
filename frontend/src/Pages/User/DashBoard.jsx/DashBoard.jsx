import React, { useContext } from "react";
import { AuthContext } from "../../../context/authentication/AuthContext";
const DashBoard = () => {
  const { userData } = useContext(AuthContext);
  const firstName = userData?.firstName || "  Guest";

  console.log(userData);
  return <div>DashBoard{firstName}</div>;
};

export default DashBoard;
