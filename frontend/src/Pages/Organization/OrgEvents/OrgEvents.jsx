import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import CreateEventModal from "../../../components/OrgComponents/CreateEventModal";
import { AuthAPI } from "../../../api";

const EventTable = () => {
  const [editEvent, setEditEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [events, setAllEvents] = useState([]);

  const handleCreateEvent = (eventData) => {
    console.log("Event Created:", eventData);
  };
  const deleteEvent = (eventTitle) => {
    console.log("Delete event:", eventTitle);
  };

  const fetchUserEvents = async () => {
    try {
      const response = await AuthAPI.get("/event");
      setAllEvents(response.data.getAllEvent);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUserEvents();
  });

  return (
    <>
      <div className="w-full flex flex-col items-center mt-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col w-full lg:w-full h-[420px] overflow-auto shadow-md">
          <div className="flex w-full mb-4 bg-green-400 p-3 text-white sticky top-0">
            <span className="w-1/5 text-sm md:text-lg text-center">Title</span>
            <span className="w-1/5 text-sm md:text-lg text-center">
              Description
            </span>
            <span className="w-1/6 text-sm md:text-lg text-center">
              Location
            </span>
            <span className="w-1/6 text-sm md:text-lg text-center">
              Start Date
            </span>
            <span className="w-1/6 text-sm md:text-lg text-center">
              Deadline
            </span>
            <span className="w-1/6 text-sm md:text-lg text-center">
              Capacity
            </span>
            <span className="w-1/6 text-sm md:text-lg text-center">
              Category
            </span>
            <span className="w-1/6 text-sm md:text-lg text-center">
              Participants
            </span>
            <span className="w-1/6 text-sm md:text-lg text-center">
              Actions
            </span>
          </div>
          {events &&
            events.map((event, index) => (
              <div
                className="flex w-full justify-between mb-2 items-center text-black h-[100px] "
                key={index}
              >
                <span className="w-1/5 text-center">{event.eventTitle}</span>
                <span className="w-1/5 text-center h-full overflow-hidden ...">
                  {event.eventDescription}
                </span>
                <span className="w-1/6 text-center">{event.eventLocation}</span>
                <span className="w-1/6 text-center">{event.startDate}</span>
                <span className="w-1/6 text-center">{event.deadlineDate}</span>
                <span className="w-1/6 text-center">{event.eventCapacity}</span>
                <span className="w-1/6 text-center">{event.category}</span>
                <span className="w-1/6 text-center">
                  {event.participants.length}
                </span>
                <span className="w-1/6 text-center flex justify-center space-x-5">
                  <FaRegEdit
                    size={20}
                    className="text-blue-400 cursor-pointer"
                    onClick={() => setEditEvent(event)}
                  />
                  <MdDelete
                    size={28}
                    className="text-red-400 cursor-pointer"
                    onClick={() => deleteEvent(event.eventTitle)}
                  />
                </span>
              </div>
            ))}
        </div>
        <div className="flex mt-10 w-full justify-center">
          <span
            className="font-semibold bg-[#007bff] text-white flex justify-center p-2 w-[300px] rounded-md cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            Create New Events
          </span>
        </div>
      </div>{" "}
      <CreateEventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateEvent}
      />
    </>
  );
};

export default EventTable;
