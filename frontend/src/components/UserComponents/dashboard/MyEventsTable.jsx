import React from "react";
import dateFormat, { masks } from "dateformat";
const MyEventsTable = ({ authState }) => {
  return (
    <div>
      <div>
        <div className="flex justify-between font-semibold">
          {" "}
          <span className="w-[5%]">S.N.</span>
          <span className="w-[20%] text-center">Image</span>
          <span className="w-[30%] text-center">Events Title</span>
          <span className="w-[30%] text-center">Location</span>
          <span className="w-[15%] text-center">Start Date</span>
        </div>
        {authState?.event_list.map((event, index) => {
          return (
            <>
              <div className="text-sm flex justify-between p-2 " key={event.id}>
                <span className="w-[5%] ">{index + 1}</span>{" "}
                <img
                  src={event.eventImage}
                  alt=""
                  className="w-[20%] h-[50px] text-center"
                />
                <span className="w-[30%] text-center">{event.eventTitle}</span>
                <span className="w-[30%] text-center">
                  {event.eventLocation}
                </span>
                <span className="w-[15%] text-center">
                  {dateFormat(event.startDate, "ddd ,mm")}
                </span>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default MyEventsTable;
