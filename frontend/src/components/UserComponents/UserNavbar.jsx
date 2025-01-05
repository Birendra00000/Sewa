import React, { useState } from "react";
import { IoMdNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";

const UserNavbar = ({ enableLightMode, enableDarkMode, themeState }) => {
  //   handleSetSideBar = () => {};
  console.log("themeStateNavbar", themeState);

  return (
    <div
      className="flex  items-center pt-8 w-full justify-center"
      style={{
        backgroundColor: themeState?.darkMode ? "#333" : "#fff",
        color: themeState?.darkMode ? "#fff" : "#000",
        padding: "20px",
      }}
    >
      <div className="w-11/12 flex justify-between gap-x-6 items-center">
        <div className="relative flex items-center gap-2 md:gap-5">
          <input
            type="search"
            placeholder="search"
            className="px-2 py-1 outline-none border-gray-200  border rounded-md"
          />
          <span className="absolute right-2 top-[6px]">
            <CiSearch size={24} />
          </span>
        </div>
        <span className="flex gap-5 md:gap-10 items-center">
          <IoMdNotifications size={28} />

          <span>
            {themeState?.darkMode ? (
              <MdOutlineWbSunny size={28} onClick={enableLightMode} />
            ) : (
              <FaMoon size={28} onClick={enableDarkMode} />
            )}
          </span>
        </span>
      </div>
    </div>
  );
};

export default UserNavbar;
