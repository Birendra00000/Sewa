"use client";

import React from "react";
import dateFormat, { masks } from "dateformat";
import EventStatus from "./EventStatus";

const MySingleEventCont = ({ authState }) => {
  // console.log("AuthStateSingleEventContainer", authState);
  return (
    <>
      <div className="w-full flex justify-center h-full items-center">
        <div className="w-[90%] h-[90%] flex flex-col gap-[5%] ">
          <div className="flex flex-col   md:flex-row md:gap-2 lg:gap-3 items-center ">
            <span className="">
              <img
                src={authState.eventImage}
                alt="abc"
                className="h-[180px] w-[180px] rounded-md"
              />
            </span>
            <div className=" flex flex-col gap-3  ">
              <span>
                <p className="mb-0 font-bold text-[12px] md:text-[16px]">
                  {authState.eventTitle}
                </p>
              </span>
              <span className="flex gap-1">
                {" "}
                <p className="mb-0 text-[9px] md:text-[12px]">Location:</p>
                <p className="mb-0 text-[9px] md:text-[12px]">
                  {authState.eventLocation}
                </p>
              </span>
              <span className="flex gap-1">
                <p className="mb-0 text-[9px] md:text-[12px]">Status:</p>
                <p className="mb-0 text-[9px] md:text-[12px]">
                  <EventStatus date={authState.startDate} />
                </p>
              </span>
              <span className="flex gap-1 text-gray-500">
                <p className="mb-0 text-[9px] md:text-[12px] ">
                  Started On: {dateFormat(authState.startDate, "ddd ,mm,yyyy")}
                </p>
                <p></p>
              </span>{" "}
              <span className="flex gap-1 text-gray-500">
                <p className="mb-0 text-[9px] md:text-[12px] ">
                  Deadline On:{" "}
                  {dateFormat(authState.deadlineDate, "ddd ,mm,yyyy")}
                </p>
                <p></p>
              </span>
            </div>
          </div>

          <div className="overflow-y-auto h-[90%]">
            {" "}
            <span className="flex gap-1">
              {" "}
              <span className="mb-0 text-4 ">
                <span className="font-semibold text-[12px] md:text-[16px]">
                  Task Title:
                </span>
                <span className="mb-0 text-4 text-gray-500 text-[12px] md:text-[16px]">
                  {authState.eventTitle}
                </span>
              </span>
            </span>
            <span className="flex gap-1">
              {" "}
              <span className="mb-0 text-4 ">
                <span className="font-semibold text-[12px] md:text-[16px]">
                  Task Description:
                </span>
                <span className="mb-0 text-4 text-gray-500 text-[12px] md:text-[16px]">
                  {authState.eventDescription}
                </span>
              </span>
            </span>
          </div>
          <span className="flex justify-end items-center gap-3 w-full">
            {/* <TodoDelete id={authState._id} />
            <UpdateTodo authState={authState} id={authState._id} /> */}
          </span>
        </div>
      </div>
    </>
  );
};

export default MySingleEventCont;
