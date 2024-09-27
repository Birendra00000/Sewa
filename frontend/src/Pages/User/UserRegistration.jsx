import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    password: "",
    address: "",
    skill: "",
  });
  console.log("formdata", formData);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const notifySuccess = () =>
    toast.success("Volunteer Registration successfully");
  const notifyError = () => toast.error("Failed to Register");

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("response", response);
      notifySuccess();

      // console.log(JSON.stringify(response.data.data));
      // console.log("response", response.data.user);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8  flex-col">
        <div className="max-w-3xl w-full space-y-8 bg-white  rounded-xl shadow-lg">
          {" "}
          <div className="text-3xl font-bold text-center text-white items-center mb-6 flex justify-around bg-blue-300">
            Volunteer Registration
            <img
              src="/assets/logo.png"
              alt=""
              className="w-[200px] h-[100px]"
            />
          </div>
          <form onSubmit={(e) => submitData(e)} className="space-y-6 p-8">
            {/* First Name */}
            <div className="items-center flex ">
              <label className="block text-base font-semibold text-gray-700 mb-2 w-[25%]">
                Name
              </label>
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="outline-none w-[200px] px-4 py-2 text-gray-800 border border-gray-300 rounded-md shadow-sm "
                  required
                />{" "}
                <div className="text-sm text-gray-600">First Name</div>
              </div>{" "}
              {/* Last Name */}
              <div className="ml-[10%]">
                <input
                  input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="outline-none w-[200px] px-4 py-2 text-gray-800 border border-gray-300 rounded-md shadow-sm "
                  required
                />{" "}
                <div className="text-sm text-gray-600">Last Name</div>
              </div>
            </div>
            <div className="items-center flex ">
              <label className="block text-base font-semibold text-gray-700 mb-2 w-[25%]">
                Phone Number
              </label>
              <div className="w-[75%]">
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="outline-none  px-4 py-2 text-gray-800 border border-gray-300 rounded-md shadow-sm w-11/12"
                  required
                />{" "}
                <div className="text-sm text-gray-600">Phone number</div>
              </div>{" "}
            </div>{" "}
            <div className="items-center flex ">
              <label className="block text-base font-semibold text-gray-700 mb-2 w-[25%]">
                Address
              </label>
              <div className="w-[75%]">
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="outline-none  px-4 py-2 text-gray-800 border border-gray-300 rounded-md shadow-sm w-11/12"
                  required
                />{" "}
                <div className="text-sm text-gray-600">Address</div>
              </div>{" "}
            </div>{" "}
            {/* Email */}
            <div className="items-center flex ">
              <label className="block text-base font-semibold text-gray-700 mb-2 w-[25%]">
                E-mail
              </label>
              <div className="w-[75%]">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="outline-none px-4 py-2 text-gray-800 border border-gray-300 rounded-md shadow-sm w-11/12"
                  required
                />{" "}
                <div className="text-sm text-gray-600">example@gmail.com</div>
              </div>{" "}
            </div>{" "}
            {/* Password */}
            <div className="items-center flex ">
              <label className="block text-base font-semibold text-gray-700 mb-2 w-[25%]">
                Password
              </label>
              <div className="w-[75%]">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="outline-none px-4 py-2 text-gray-800 border border-gray-300 rounded-md shadow-sm w-11/12"
                  required
                />{" "}
                <div className="text-sm text-gray-600">Password</div>
              </div>{" "}
            </div>
            {/* Volunteering Area */}
            <div className="items-center flex ">
              <label className="block text-base font-semibold text-gray-700 mb-2 w-[25%]">
                Please indicate areas to volunteer according to your skills{" "}
              </label>
              <div className="w-[75%]">
                <select
                  name="skill"
                  value={formData.skill}
                  onChange={handleChange}
                  className="block px-4 py-2  border rounded-lg bg-white w-11/12"
                  required
                >
                  <option value="Hospitals">Hospitals</option>
                  <option value="Orphanages">Orphanages</option>
                  <option value="Schools">Schools</option>
                  <option value="Community Services">Community Services</option>
                </select>
              </div>{" "}
            </div>
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-1/4 px-6 py-3 font-medium  text-white rounded-lg shadow-md   
          transition-transform transform hover:scale-105 bg-green-500"
              >
                Submit Form
              </button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default UserRegistration;
