import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaCar } from "react-icons/fa";
import { LuPackage2 } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import { AiOutlineTransaction } from "react-icons/ai";
import { TbReport } from "react-icons/tb";
import { LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authentication/AuthContext";
import * as ACTION_TYPES from "../../context/authentication/type";
const SideBar = () => {
  const { isAuth, authDispatch } = useContext(AuthContext);
  const navigate = useNavigate(); // Use the navigate hook

  const handleLogOut = () => {
    console.log("Logging out..."); // Debugging line
    authDispatch({ type: ACTION_TYPES.LOGOUT }); // Dispatch LOGOUT action\
    navigate("/"); // Redirect to the main page after logging out
    console.log(authDispatch);
  };

  return (
    <div className="w-[280px] bg-blue-400 h-full flex justify-center">
      <div className="p-4 w-11/12 flex items-center flex-col gap-y-4">
        <img src="/assets/logo.png" alt="" className="w-[150px] h-[80px]" />
        <div className="w-full flex justify-center flex-col items-center border-gray-500 border-b pb-5">
          <Link
            to="/user/dashboard"
            className="text-white flex items-center gap-x-1 p-2 hover:bg-red-600 rounded-md w-full "
          >
            {" "}
            <LuLayoutDashboard />
            <p>Dashboard</p>
          </Link>
          <span className="text-white flex items-center gap-x-1 p-2  hover:bg-red-600 rounded-md w-full">
            {" "}
            <FaCar />
            <p>Destinations</p>
          </span>
          <span className="text-white flex items-center gap-x-1 p-2  hover:bg-red-600 rounded-md w-full">
            {" "}
            <LuPackage2 />
            <p>Packages</p>
          </span>
          <span className="text-white flex items-center gap-x-1 p-2  hover:bg-red-600 rounded-md w-full">
            {" "}
            <FaRegBell />
            <p>Activities</p>
          </span>
          <span className="text-white flex items-center gap-x-1 p-2  hover:bg-red-600 rounded-md w-full">
            {" "}
            <IoSettingsOutline />
            <p>Account</p>
          </span>
        </div>
        <div className="w-full flex justify-center flex-col items-center ">
          <span className="text-gray-400 mb-2 w-full">Report</span>
          <span className="text-white flex items-center gap-x-1 p-2 hover:bg-red-600 rounded-md w-full ">
            {" "}
            <MdOutlinePayment />
            <p>Payment Details</p>
          </span>
          <span className="text-white flex items-center gap-x-1 p-2  hover:bg-red-600 rounded-md w-full">
            {" "}
            <AiOutlineTransaction />
            <p>Transactions</p>
          </span>
          <span className="text-white flex items-center gap-x-1 p-2  hover:bg-red-600 rounded-md w-full">
            {" "}
            <TbReport />
            <p>Travel Reports</p>
          </span>
        </div>
        <div className="w-full mt-4" onClick={handleLogOut}>
          <span className="text-white flex items-center gap-x-1 p-2 bg-red-500  hover:bg-red-600 rounded-md w-full">
            {" "}
            <LuLogOut />
            <p>Logout</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
