import React from "react";
import EventStatus from "./EventStatus";
import dateFormat, { masks } from "dateformat";

const MyEventContainer = ({ authState }) => {
  console.log("event", authState);
  return (
    <>
      <div className=" h-[150px] md:h-[200px]  rounded-lg w-[96%] p-1">
        <div className="w-full grid grid-cols-9 gap-2 items-center h-[80%]">
          {" "}
          {/* <TodoStatusColor date={todo.todoDate} className="col-span-1" /> */}
          <span className="flex flex-col col-span-6 pt-[3%] h-full">
            <span className="font-bold text-[12px] md:text-[16px] ">
              {authState.eventTitle}
            </span>
            <span className="text-gray-500 overflow-hidden  h-[125px]">
              <p className="custom-truncate mb-0 custom-truncate text-[12px] md:text-sm">
                {authState.eventDescription}...
              </p>
            </span>
          </span>
          <span className="col-span-3 flex mt-2 md:mt-0 md:items-end justify-center h-[100px] md:h-[120px]">
            <img
              src={authState?.eventImage}
              alt=""
              className="w-[90px] md:w-[120px] h-full object-cover rounded-lg"
            />
          </span>
        </div>
        <div className="w-full flex justify-center h-[20%] items-center">
          <div className="flex items-center gap-2 overflow-x-auto">
            <span className="flex items-center">
              <p className="mb-0 text-[8px] md:text-[10px] ">Location:</p>
              <p className="mb-0  text-[8px] md:text-[10px] text-blue-500 font-bold">
                {authState.eventLocation}
              </p>
            </span>
            <span className="flex items-center">
              <p className="mb-0  text-[8px] md:text-[10px]">Status:</p>
              <p className="mb-0  text-[8px] md:text-[10px]">
                <EventStatus date={authState.startDate} />
              </p>
            </span>
            <span className="flex items-center">
              <p className="mb-0 text-[8px] md:text-[10px]">Started On:</p>
              <p className="mb-0 text-[8px] md:text-[10px]">
                {dateFormat(authState.startDate, "ddd ,mm,yyyy")}
              </p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyEventContainer;
