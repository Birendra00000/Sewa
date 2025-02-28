"use client";

import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
const EditEvents = ({ isOpen, onClose, eventData }) => {
  // console.log("evendataId", eventData._id);
  const [formData, setFormData] = useState({
    eventTitle: eventData.eventTitle,
    eventDescription: eventData.eventDescription,
    eventLocation: eventData.eventLocation,
    startDate: eventData.startDate,
    deadlineDate: eventData.deadlineDate,
    eventCapacity: eventData.eventCapacity,
    category: eventData.category,
  });

  //For Editing toast message
  const notifySuccess = () => toast.info("Event updated successfully", 200);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "startDate" || name === "deadlineDate") {
      setFormData({ ...formData, [name]: new Date(value).toISOString() });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const categories = [
    "Social Events",
    "Technology Workshop",
    "Education",
    "Healthcare",
    "Sports",
    "Entertainment",
  ];
  const [file, setFile] = useState(eventData.eventImage);
  // console.log("fileImage", file);

  const formDateData = (date) => {
    if (!date) return "";
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authUser = JSON.parse(localStorage.getItem("AuthUser"));
    console.log("AuthUserrr", authUser);
    let token = authUser?.token;

    // console.log("Retrieved Token:", token); // Check if token is correctly stored

    // Decode the token

    // Check if the decoded token is valid

    // Prepare form data for submission
    const formDataToSend = new FormData();
    formDataToSend.append("eventTitle", formData.eventTitle);
    formDataToSend.append("eventDescription", formData.eventDescription);
    formDataToSend.append("eventCapacity", formData.eventCapacity);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("eventLocation", formData.eventLocation);
    formDataToSend.append("startDate", formData.startDate);
    formDataToSend.append("deadlineDate", formData.deadlineDate);

    if (file && file instanceof File) {
      formDataToSend.append("image", file);
    }

    try {
      const response = await axios.put(
        `http://localhost:4000/api/event/${eventData._id}`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Updated fetched successfully");
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
            Edit New Event
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 ">Title</label>
              <input
                type="text"
                name="eventTitle"
                value={formData.eventTitle}
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
                name="eventDescription"
                value={formData.eventDescription}
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
                  name="eventLocation"
                  value={formData.eventLocation}
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
                  value={formDateData(formData.startDate)}
                  onChange={handleChange}
                  required
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
                  value={formDateData(formData.deadlineDate)}
                  onChange={handleChange}
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

export default EditEvents;
