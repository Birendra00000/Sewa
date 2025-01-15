import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import dateFormat from "dateformat";
import { ToastContainer, toast, Flip } from "react-toastify";
import CreateEventModal from "../../../components/OrgComponents/CreateEventModal";
import { AuthAPI } from "../../../api";
import EditEvents from "../../../components/OrgComponents/EditEvents";

const EventTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [events, setAllEvents] = useState([]);

  const notify = () => toast.warn("Events deleted successfully");

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
  }, []);

  const deleteEvents = async (id) => {
    try {
      const deleteEvent = await AuthAPI.delete(`/event/${id}`);
      console.log("deleted data", deleteEvent);
      notify();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full flex flex-col items-center mt-12 px-4 sm:px-6 lg:px-4">
        <div className="flex flex-col w-full lg:w-full h-[420px] overflow-auto shadow-md">
          <div className="flex w-full mb-4 bg-green-400 p-3 text-white sticky top-0">
            <span className="w-[200px] text-sm md:text-lg text-center">
              Title
            </span>
            <span className="w-[150px] text-sm md:text-lg text-center">
              Location
            </span>
            <span className="w-[130px] text-sm md:text-lg text-center">
              Start Date
            </span>
            <span className="w-[130px] text-sm md:text-lg text-center">
              Deadline
            </span>
            <span className="w-[100px] text-sm md:text-lg text-center">
              Required
            </span>
            <span className="w-[100px] text-sm md:text-lg text-center">
              Category
            </span>
            <span className="w-[100px] text-sm md:text-lg text-center">
              Participants
            </span>
            <span className="w-[100px] text-sm md:text-lg text-center">
              Actions
            </span>
          </div>
          {events &&
            events.map((event, index) => (
              <div
                className="flex w-full justify-between mb-2 items-center text-black h-[100px] text-[14px]"
                key={event.id}
              >
                <span className="w-[200px] text-center">
                  {event.eventTitle}
                </span>
                <span className="w-[150px] text-center">
                  {event.eventLocation}
                </span>
                <span className="w-[130px] text-center">
                  {dateFormat(event.startDate, "mmmm d")}
                </span>
                <span className="w-[130px] text-center">
                  {" "}
                  {dateFormat(event.deadlineDate, "mmmm d")}
                </span>
                <span className="w-[100px] text-center">
                  {event.eventCapacity}
                </span>
                <span className="w-[100px] text-center">{event.category}</span>
                <span className="w-[100px] text-center">
                  {event.participants.length}
                </span>
                <span className="w-[100px] text-center flex justify-center space-x-5">
                  <EditEvents event Data={event} isOpen={isModalOpen} />
                  <MdDelete
                    size={28}
                    className="text-red-400 cursor-pointer"
                    onClick={() => deleteEvents(event._id)}
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
      />{" "}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Flip}
      />{" "}
    </>
  );
};

export default EventTable;
