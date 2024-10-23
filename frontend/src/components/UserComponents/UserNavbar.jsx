import React, { useState } from "react";
import { IoMdNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
const UserNavbar = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  //   handleSetSideBar = () => {};

  return (
    <div className="flex  items-center pt-8 w-full justify-center">
      <div className="w-11/12 flex justify-between gap-x-6 items-center">
        <div className="relative flex items-center gap-5">
          <span className="cursor-pointer">
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
    </div>
  );
};

export default UserNavbar;
