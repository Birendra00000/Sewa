import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "/assets/logo.png";
import { IoIosNotifications } from "react-icons/io";
import { AuthContext } from "../../context/authentication/AuthContext";
import * as ACTION_TYPES from "../../context/authentication/type";
import { useNavigate } from "react-router-dom";

const UserNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoverRegister, sethoverRegister] = useState(false);

  const { isAuth, authDispatch } = useContext(AuthContext);
  const navigate = useNavigate(); // Use the navigate hook

  const handleLogOut = () => {
    console.log("Logging out..."); // Debugging line
    authDispatch({ type: ACTION_TYPES.LOGOUT }); // Dispatch LOGOUT action\
    navigate("/"); // Redirect to the main page after logging out
    console.log(authDispatch);
  };

  const setClassReg = () => {
    return `absolute top-[7%] right-[1%] w-[200px] flex justify-center p-4  flex-col items-center bg-[#01aeee] text-white w-[200px] z-[4] text-base font-semibold border-white shadow-md ${
      hoverRegister ? "" : "hidden"
    }`;
  };

  return (
    <div
      className="flex items-center justify-between bg-[#01aeee] h-16 overflow-hidden text-black md
    md:px-20 px-3 "
    >
      <div className="flex items-center">
        <Link to="/user/dashboard">
          <img src={logo} alt="logo" className="h-14 md:h-32" />
        </Link>
      </div>
      <div className="hidden md:flex space-x-16 ">
        <Link
          to="/user/dashboard"
          className="hover:bg-[white] hover:text-blue-500 transition-colors  px-2  rounded-full text-base font-semibold text-white h-full"
        >
          DASHBOARD
        </Link>
        <Link
          to="/aboutus"
          className="hover:bg-[white] hover:text-blue-500 transition-colors  px-2  rounded-full text-base font-semibold text-white"
        >
          MY EVENTS{" "}
        </Link>
        <Link
          to="/"
          className="hover:bg-[white] hover:text-blue-500 transition-colors  px-2  rounded-full text-base font-semibold text-white"
        >
          EVENT LIST
        </Link>
        <Link
          to="/"
          className="hover:bg-[white] hover:text-blue-500 transition-colors  px-2  rounded-full text-base font-semibold text-white"
        >
          <IoIosNotifications size={30} />{" "}
        </Link>{" "}
        <div className="">
          <div
            className="hover:bg-[white] hover:text-blue-500 transition-colors  px-2  rounded-full text-base font-semibold text-white cursor-pointer"
            onClick={handleLogOut}
          >
            LOGOUT{" "}
          </div>{" "}
        </div>
      </div>{" "}
      <div className="md:hidden">
        <button
          className="text-2xl focus:outline-none text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>
      {/* {isMobileMenuOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-gray-800 text-white p-4 md:hidden z-[1]">
          <button
            className="text-2xl absolute top-4 right-4 text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ✕
          </button>
          <div className="flex flex-col space-y-4 mt-12">
            <Link
              to="/"
              className="hover:text-gray-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/aboutus"
              className="hover:text-gray-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/eventlist"
              className="hover:text-gray-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              EventList
            </Link>
            <Link
              to="/contactus"
              className="hover:text-gray-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              to="/register"
              className="hover:text-gray-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              REGISTER
            </Link>
          </div>
        </div>
      )}{" "} */}
    </div>
  );
};

export default UserNavbar;
