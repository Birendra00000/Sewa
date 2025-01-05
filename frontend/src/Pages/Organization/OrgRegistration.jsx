import React, { useState } from "react";
import axios from "axios";
import { FiUpload } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

const OrgRegistration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    orgName: "",
    orgEmail: "",
    orgContact: "",
    orgPassword: "",
    orgAddress: "",
    websiteUrl: "",
    orgDescription: "",
    orgImage: "",
  });

  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  console.log("formdata", formData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    // Use FileReader to generate a preview of the image
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result); // Set the preview URL to the result of FileReader
    };

    if (selectedFile) {
      reader.readAsDataURL(selectedFile); // Read the file as a data URL
    }
  };
  // console.log(handleFileChange);

  const notifySuccess = () =>
    toast.success("Organization Registration successfully");
  const notifyError = () => toast.error("Failed to Register");

  const submitData = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("orgName", formData.orgName);
    formDataToSend.append("orgEmail", formData.orgEmail);
    formDataToSend.append("orgContact", formData.orgContact);
    formDataToSend.append("orgPassword", formData.orgPassword);
    formDataToSend.append("orgAddress", formData.orgAddress);
    formDataToSend.append("websiteUrl", formData.websiteUrl);
    formDataToSend.append("orgDescription", formData.orgDescription);

    if (file) {
      formDataToSend.append("orgImage", file);
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/orgRegistration",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // console.log("Event created successfully", response);
      if (response.status === 200) {
        // navigate("/orgLogin");
        notifySuccess();
      }

      // console.log(JSON.stringify(response.data.data));
      // console.log("response", response.data.user);
    } catch (error) {
      notifyError();
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8  flex-col">
        <div className="max-w-3xl w-full space-y-8 bg-white  rounded-xl shadow-lg">
          {" "}
          <div className="text-3xl font-bold text-center text-white items-center mb-6 flex justify-around bg-blue-300">
            Organization Registration
            <img
              src="/assets/logo.png"
              alt=""
              className="w-[200px] h-[100px]"
            />
          </div>
          <form onSubmit={submitData} className="space-y-6 p-8">
            {/* First Name */}
            <div className="items-center flex ">
              <label className="block text-base font-semibold text-gray-700 mb-2 w-[25%]">
                Name
              </label>
              <div className="w-[75%]">
                <input
                  type="text"
                  name="orgName"
                  value={formData.orgName}
                  onChange={handleChange}
                  className="outline-none w-11/12 px-4 py-2 text-gray-800 border border-gray-300 rounded-md shadow-sm "
                  required
                />{" "}
                <div className="text-sm text-gray-600">First Name</div>
              </div>{" "}
              {/* Last Name */}
            </div>
            <div className="items-center flex ">
              <label className="block text-base font-semibold text-gray-700 mb-2 w-[25%]">
                Phone Number
              </label>
              <div className="w-[75%]">
                <input
                  type="tel"
                  name="orgContact"
                  value={formData.orgContact}
                  onChange={handleChange}
                  className="outline-none  px-4 py-2 text-gray-800 border border-gray-300 rounded-md shadow-sm w-11/12"
                  required
                />{" "}
                <div className="text-sm text-gray-600">Phone number</div>
              </div>{" "}
            </div>{" "}
            {/* ADDRESS */}
            <div className="items-center flex ">
              <label className="block text-base font-semibold text-gray-700 mb-2 w-[25%]">
                Address
              </label>
              <div className="w-[75%]">
                <input
                  type="text"
                  name="orgAddress"
                  value={formData.orgAddress}
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
                  name="orgEmail"
                  value={formData.orgEmail}
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
                  name="orgPassword"
                  value={formData.orgPassword}
                  onChange={handleChange}
                  className="outline-none px-4 py-2 text-gray-800 border border-gray-300 rounded-md shadow-sm w-11/12"
                  required
                />{" "}
                <div className="text-sm text-gray-600">Password</div>
              </div>{" "}
            </div>
            {/* Website url */}{" "}
            <div className="items-center flex ">
              <label className="block text-base font-semibold text-gray-700 mb-2 w-[25%]">
                Website Url
              </label>
              <div className="w-[75%]">
                <input
                  type="url"
                  name="websiteUrl"
                  value={formData.websiteUrl}
                  onChange={handleChange}
                  className="outline-none px-4 py-2 text-gray-800 border border-gray-300 rounded-md shadow-sm w-11/12"
                  required
                />{" "}
                <div className="text-sm text-gray-600">Website Url</div>
              </div>{" "}
            </div>
            {/* Image upload */}
            <div className="text-[12px] lg:text-[16px] w-full flex items-center ">
              {" "}
              <label htmlFor="" className="font-semibold mb-2 w-1/4">
                Upload Image
              </label>
              <span className="w-3/4 flex justify-start">
                <input
                  type="file"
                  name="orgImage"
                  id="orgImage"
                  accept="image/*"
                  hidden
                  onChange={handleFileChange}
                />
                <label
                  htmlFor="orgImage"
                  className="w-[60%] h-[120px] lg:w-[200px] lg:h-[140px] flex flex-col justify-center items-center gap-2 lg:gap-1 border border-gray-400 rounded-md cursor-pointer text-sm"
                >
                  <FiUpload size={25} />
                  <p className="mb-0">Drag&Drop files here</p>
                  <p className="mb-0">or</p>
                  <div className="p-2 flex justify-center items-center  rounded-lg border border-gray-500">
                    Browser
                  </div>
                </label>
                {/* Preview of the uploaded image */}
                {previewUrl && (
                  <img
                    src={previewUrl}
                    alt="Image Preview"
                    className=" w-[150px] h-[140px] object-cover rounded-md ml-[10%]"
                  />
                )}{" "}
              </span>
            </div>
            {/* Organization description */}{" "}
            <div className="items-center flex ">
              <label className="block text-base font-semibold text-gray-700 mb-2 w-[25%]">
                Description
              </label>
              <div className="w-[75%]">
                <textarea
                  name="orgDescription"
                  value={formData.orgDescription}
                  onChange={handleChange}
                  rows="4" // adjust the number of rows as needed
                  cols="50" // adjust the number of columns as needed
                  className="outline-none px-4 py-2 text-gray-800 border border-gray-300 rounded-md shadow-sm w-11/12"
                  required
                />

                <div className="text-sm text-gray-600">Description</div>
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
              <Link to="/org/login" className="underline  font-semibold">
                Sign In
              </Link>
            </span>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default OrgRegistration;
