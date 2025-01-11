import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";

import { FaRegBell } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { FaPeopleRobbery } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authentication/AuthContext";
import * as ACTION_TYPES from "../../context/authentication/type";
const orgNavbar = () => {
  const { isAuth, authDispatch } = useContext(AuthContext);
  const navigate = useNavigate(); // Use the navigate hook

  const [openSideBar, setOpenSideBar] = useState(false);

  const handleSetSideBar = () => {
    setOpenSideBar(!openSideBar);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 800) {
        return setOpenSideBar(true);
      }
    };
    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const handleLogOut = () => {
    // console.log("Logging out...");
    authDispatch({ type: ACTION_TYPES.LOGOUT }); // Dispatch LOGOUT action\
    navigate("/"); // Redirect to the main page after logging out
    console.log(authDispatch);
  };

  return (
    <>
      {" "}
      {window.innerWidth < 768 && (
        <span
          className="cursor-pointer md:hidden absolute top-[3%] p-[1%]"
          onClick={handleSetSideBar}
        >
          <FaBars size={20} />{" "}
        </span>
      )}
      {openSideBar && (
        <div className="flex justify-start items-start z-[1] md:z-0 absolute md:static ">
          <div className="w-[200px] sm:w-[250px] md:w-[280px] bg-blue-400 h-full flex justify-end flex-col md:justify-start">
            <span
              className="px-2 pt-2 flex justify-end text-white cursor-pointer md:hidden"
              onClick={() => {
                setOpenSideBar(false);
              }}
            >
              <IoClose size={24} />
            </span>
            <div className="p-4 w-11/12 flex items-center flex-col gap-y-4">
              {" "}
              <img
                src="/assets/logo.png"
                alt=""
                className="w-[150px] h-[80px]"
              />
              <div className="w-full flex justify-center flex-col items-center border-white border-b pb-5">
                <Link
                  to="/org/dashboard"
                  className="text-white flex items-center gap-x-1 p-2 hover:bg-red-600 rounded-md w-full "
                >
                  {" "}
                  <LuLayoutDashboard />
                  <p>Dashboard</p>
                </Link>
                <Link
                  to="/org/events"
                  className="text-white flex items-center gap-x-1 p-2  hover:bg-red-600 rounded-md w-full"
                >
                  {" "}
                  <FaPeopleRobbery />
                  <p> Events</p>
                </Link>

                <span className="text-white flex items-center gap-x-1 p-2  hover:bg-red-600 rounded-md w-full">
                  {" "}
                  <FaRegBell />
                  <p>Notifications</p>
                </span>
                <span className="text-white flex items-center gap-x-1 p-2  hover:bg-red-600 rounded-md w-full">
                  {" "}
                  <IoSettingsOutline />
                  <p>Account</p>
                </span>
              </div>
              <div className="w-full mt-32" onClick={handleLogOut}>
                <span className="text-white flex items-center gap-x-1 p-2 bg-red-500  hover:bg-red-600 rounded-md w-full cursor-pointer">
                  {" "}
                  <LuLogOut />
                  <p>Logout</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default orgNavbar;
