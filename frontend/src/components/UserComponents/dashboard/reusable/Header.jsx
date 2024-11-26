import React from "react";
import { MdVolunteerActivism } from "react-icons/md";
import dateFormat, { masks } from "dateformat";

const Header = () => {
  const todayDate = new Date();

  return (
    <div className="flex justify-between items-center w-full">
      <span className=" text-lg font-semibold flex gap-1 items-center">
        <MdVolunteerActivism size={20} />
        My Events
      </span>
      <span className="flex gap-5">
        <span> {dateFormat(todayDate, "ddd ,mm")}</span>
        <span className="flex gap-1 items-center">
          <span className="h-2 w-2 bg-slate-500 flex rounded-full"></span>
          <p>Today</p>
        </span>
      </span>
    </div>
  );
};

export default Header;
