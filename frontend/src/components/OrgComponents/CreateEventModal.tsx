"use client";

import { AuthAPI } from "@/api";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CreateEventModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    startDate: "",
    deadlineDate: "",
    eventCapacity: "",
    category: "",
  });
  // console.log(formData);
  const [file, setFile] = useState(null);
  // console.log("fileee,file", file);
  const categories = [
    "Social Events",
    "Technology Workshop",
    "Education",
    "Healthcare",
    "Sports",
    "Entertainment",
  ];

  //For creating toast message
  const notifySuccess = () => toast.success("Event created successfully", 200);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Retrieve AuthUser object from localStorage
    const authUser = JSON.parse(localStorage.getItem("AuthUser"));
    let token;
    // Check if authUser exists and has a token
    if (authUser && authUser?.token) {
      token = authUser?.token;
      // console.log("Token:", token);
    } else {
      // console.log("No token found in AuthUser.");
    }

    // Decode the token

    // Check if the decoded token is valid

    // Prepare form data for submission
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("eventCapacity", formData.eventCapacity);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("location", formData.location);
    formDataToSend.append("startDate", formData.startDate);
    formDataToSend.append("deadlineDate", formData.deadlineDate);

    if (file) {
      formDataToSend.append("image", file);
    }

    try {
      const response = await AuthAPI.post(
        "http://localhost:4000/api/event",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setFormData({
        title: "",
        description: "",
        location: "",
        startDate: "",
        deadlineDate: "",
        eventCapacity: "",
        category: "",
      });
      setFile(null);

      // console.log("Event created successfully", response);
      notifySuccess();
      // Handle success (e.g., clear form, close modal)
    } catch (error) {
      if (error.response) {
        console.log("Response data:", error.response.data);
        console.log("Status:", error.response.status);
        console.log("Headers:", error.response.headers);
      } else if (error.request) {
        console.log("Request error, no response received:", error.request);
      } else {
        console.log("Error setting up the request:", error.message);
      }

      // Handle error appropriately
    }
  };

  // console.log("handleSubmit", handleSubmit);

  if (!isOpen) return null;

  const TodayDate = new Date();
  const disabledDateBeforeToday = TodayDate.toISOString().split("T")[0];

  return (
    <>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center overflow-y-scroll h-full">
        <div className="mt-[100px] mb-8 bg-white rounded-lg shadow-lg w-[90%] md:w-[600px] p-6">
          <div className="w-full flex justify-end cursor-pointer">
            <span onClick={onClose}>
              <IoMdClose size={24} />
            </span>
          </div>
          <h2 className="text-lg text-blue-500 font-semibold text-center mb-4">
            Create New Event
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 ">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full border rounded-md p-2 outline-none"
                placeholder="Enter event title"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                className="w-full border rounded-md p-2 outline-none"
                placeholder="Enter event description"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-md p-2 outline-none"
                  placeholder="Enter event location"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Required Volunteer
                </label>
                <input
                  type="number"
                  name="eventCapacity"
                  value={formData.eventCapacity}
                  onChange={handleChange}
                  required
                  min={0}
                  className="w-full border rounded-md p-2"
                  placeholder="Enter event capacity"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="eventImage"
                  className="block text-sm font-medium mb-2"
                >
                  Event Image <span className="text-red-600"> *</span>
                </label>
                <input
                  type="file"
                  id="image"
                  name="image" // Ensure this name is consistent
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                />
                <label
                  htmlFor="image"
                  className="mt-2 p-2 border border-gray-300 rounded-xl  w-[130px] bg-blue-500 text-white cursor-pointer flex justify-center"
                >
                  Upload Image
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-md p-2 outline-none"
                >
                  <option value="" disabled>
                    Select category
                  </option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Start Date
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  required
                  min={disabledDateBeforeToday}
                  className="w-full border rounded-md p-2 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Deadline Date
                </label>
                <input
                  type="date"
                  name="deadlineDate"
                  value={formData.deadlineDate}
                  onChange={handleChange}
                  min={disabledDateBeforeToday}
                  required
                  className="w-full border rounded-md p-2 outline-none"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={onClose}
                className="bg-red-500  text-white rounded-md px-4 py-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-500  text-white rounded-md px-4 py-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default CreateEventModal;
