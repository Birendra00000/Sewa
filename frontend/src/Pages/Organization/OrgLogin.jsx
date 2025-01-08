import React, { useState, useContext } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API } from "../../api";
import { AuthContext } from "../../context/authentication/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const OrgLogin = () => {
  const navigate = useNavigate();
  const { authDispatch, setRefetch } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const notifySuccess = () => toast.success("Login successfully");
  const notifyError = () => toast.error("Failed to Register");

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post(
        "http://localhost:4000/api/orglogin",
        formData
      );
      const { data } = response;
      // console.log("ORGdata", response?.data?.orgExist);
      const { token, orgExist } = data;
      authDispatch({
        type: "LOGIN",
        payload: {
          token,
          ...orgExist,
        },
      }); // Set refetch to true to trigger data fetching in AuthProvider
      // console.log("JSON", JSON.stringify(authDispatch));
      // window.location.reload(); // Reloads the entire page
      navigate("/org/dashboard");
      // window.location.reload();

      // Reset form data
      setFormData({
        email: "",
        password: "",
      });
      //   console.log("response", response);

      //   notifySuccess();

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
            Organization Login
            <img
              src="/assets/logo.png"
              alt=""
              className="w-[200px] h-[100px]"
            />
          </div>
          <form onSubmit={(e) => submitData(e)} className="space-y-6 p-8">
            {/* First Name */}
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
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-1/4 px-6 py-3 font-medium  text-white rounded-lg shadow-md   
          transition-transform transform hover:scale-105 bg-green-500"
              >
                Submit Form
              </button>
            </div>{" "}
            <span className="w-full flex  justify-center font-medium text-blue-500">
              <p>Already have an account?</p>
              <Link to="/org/register" className="underline font-semibold">
                Sign Up
              </Link>
            </span>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default OrgLogin;
