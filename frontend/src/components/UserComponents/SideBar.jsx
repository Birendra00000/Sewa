import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { LuPackage2 } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { FaPeopleRobbery } from "react-icons/fa6";
import { GoOrganization } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authentication/AuthContext";
import * as ACTION_TYPES from "../../context/authentication/type";
const SideBar = () => {
  const { isAuth, authDispatch } = useContext(AuthContext);
  const navigate = useNavigate(); // Use the navigate hook

  const [openSideBar, setOpenSideBar] = useState(true);

  const handleSetSideBar = () => {
    setOpenSideBar(!openSideBar);
  };

  const handleLogOut = () => {
    console.log("Logging out..."); // Debugging line
    authDispatch({ type: ACTION_TYPES.LOGOUT }); // Dispatch LOGOUT action\
    navigate("/"); // Redirect to the main page after logging out
    console.log(authDispatch);
  };

  return (
    <div className="flex justify-start items-start  ">
      {openSideBar && (
        <div className="w-[280px] bg-blue-400 h-full flex justify-center">
          <div className="p-4 w-11/12 flex items-center flex-col gap-y-4">
            <img src="/assets/logo.png" alt="" className="w-[150px] h-[80px]" />
            <div className="w-full flex justify-center flex-col items-center border-white border-b pb-5">
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
                <FaPeopleRobbery />
                <p>My Events</p>
              </span>
              <span className="text-white flex items-center gap-x-1 p-2  hover:bg-red-600 rounded-md w-full">
                {" "}
                <GoOrganization />
                <p>Event Lists</p>
              </span>
              <span className="text-white flex items-center gap-x-1 p-2  hover:bg-red-600 rounded-md w-full">
                {" "}
                <FaRegBell />
                <p>BookMarks</p>
              </span>
              <span className="text-white flex items-center gap-x-1 p-2  hover:bg-red-600 rounded-md w-full">
                {" "}
                <IoSettingsOutline />
                <p>Account</p>
              </span>
            </div>

            <div className="w-full mt-32" onClick={handleLogOut}>
              <span className="text-white flex items-center gap-x-1 p-2 bg-red-500  hover:bg-red-600 rounded-md w-full">
                {" "}
                <LuLogOut />
                <p>Logout</p>
              </span>
            </div>
          </div>
        </div>
      )}

      {/* <div className="flex  items-center pt-8 w-full justify-center">
        <div className="w-[90%] flex justify-between gap-x-6 items-center">
          <div className="relative flex items-center gap-5">
            <span onClick={handleSetSideBar} className="cursor-pointer">
              <FaBars size={20} />
            </span>
            <input
              type="search"
              placeholder="search"
              className="px-2 py-1 outline-none border-gray-200  border rounded-md"
            />
            <span className="absolute right-2 top-[6px]">
              <CiSearch size={24} />
            </span>
          </div>
          <span className="flex gap-10 items-center">
            <IoMdNotifications size={28} />

            <span>
              <MdOutlineWbSunny size={28} />
            </span>
          </span>
        </div>
      </div> */}
    </div>
  );
};

export default SideBar;
