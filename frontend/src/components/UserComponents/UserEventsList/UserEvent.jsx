import React, { useContext, useState, useEffect } from "react";
import MyEventContainer from "./MyEventContainer";
import MySingleEventCont from "./MySingleEventCont";
import { AuthContext } from "../../../context/authentication/AuthContext";
import Header from "../dashboard/reusable/Header";

const TaskContainer = () => {
  const { authState } = useContext(AuthContext);
  console.log("Authstatatata", authState);
  const [openIndex, setOpenIndex] = useState(0); // Default open index

  // Function to handle click on todo item
  const handleClick = (index) => {
    setOpenIndex(index === openIndex ? null : index); // Toggle open/close
  };

  return (
    <div className="mt-[4%]  flex justify-center">
      <div className="grid grid-cols-2  justify-center gap-x-1  lg:gap-5 shadow-md overflow-y-auto w-[95%] h-[80vh]">
        <div className="border border-gray-500">
          <div className="w-full flex justify-center items-center overflow-auto">
            <div className="w-[90%] h-[95%]">
              <div className="w-full flex justify-center mt-2 flex-col items-center mb-[3%] gap-3">
                <Header />
                {authState?.event_list?.map((event, index) => (
                  <div
                    key={index}
                    className={`w-[96%] h-[200px] border border-gray-500 rounded-lg cursor-pointer 
                        ${openIndex === index ? "bg-gray-200 " : ""}`}
                    onClick={() => handleClick(index)}
                  >
                    <MyEventContainer authState={event} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-md border border-gray-500">
          {openIndex !== null && (
            <MySingleEventCont authState={authState?.event_list[openIndex]} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskContainer;
