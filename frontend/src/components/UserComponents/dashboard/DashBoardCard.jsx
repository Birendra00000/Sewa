import React from "react";
import MyEventsTable from "./MyEventsTable";
import UserEventStatus from "./Charts/UserEventStatus";
import Header from "./reusable/Header";

const DashBoardCard = ({ authState }) => {
  return (
    <div className="flex w-full justify-center">
      <div className=" grid grid-cols-2 w-full mt-[4%] gap-5">
        <div className="col-span-1  shadow-md h-[400px]">
          <div className=" p-4 h-full">
            <Header />
            <div className=" h-full">
              <MyEventsTable authState={authState} />
            </div>
          </div>
        </div>
        <div className="grid grid-rows-2 h-[400px] shadow-md">
          <div className="row-span-1">
            <UserEventStatus authState={authState} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardCard;
