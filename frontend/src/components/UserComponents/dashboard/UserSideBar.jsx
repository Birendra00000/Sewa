// import React, { useState, useContext } from "react";
// import { FaBars } from "react-icons/fa";
// import { LuLayoutDashboard } from "react-icons/lu";
// import Button from "react-bootstrap/Button";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import { FaRegBell } from "react-icons/fa";
// import { IoSettingsOutline } from "react-icons/io5";

// import { LuLogOut } from "react-icons/lu";
// import { FaPeopleRobbery } from "react-icons/fa6";
// import { GoOrganization } from "react-icons/go";
// import { Link, useNavigate } from "react-router-dom";
// import * as ACTION_TYPES from "../../../context/authentication/type";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { AuthContext } from "../../../context/authentication/AuthContext";

// const UserSideBar = () => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const { isAuth, authDispatch } = useContext(AuthContext);
//   const navigate = useNavigate(); // Use the navigate hook

//   const [openSideBar, setOpenSideBar] = useState(true);

//   const handleSetSideBar = () => {
//     setOpenSideBar(!openSideBar);
//   };

//   const handleLogOut = () => {
//     console.log("Logging out..."); // Debugging line
//     authDispatch({ type: ACTION_TYPES.LOGOUT }); // Dispatch LOGOUT action\
//     navigate("/"); // Redirect to the main page after logging out
//     console.log(authDispatch);
//   };
//   return (
//     <>
//       {" "}
//       <Button variant="body" onClick={handleShow}>
//         <FaBars />
//       </Button>{" "}
//       <Offcanvas show={show} onHide={handleClose}>
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Sewa</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           <div className="w-[280px] bg-blue-400 h-full flex justify-center">
//             <div className="p-4 w-11/12 flex items-center flex-col gap-y-4">
//               <img
//                 src="/assets/logo.png"
//                 alt=""
//                 className="w-[150px] h-[80px]"
//               />
//               <div className="w-full flex justify-center flex-col items-center border-white border-b pb-5">
//                 <Link
//                   to="/user/dashboard"
//                   className="text-white flex items-center gap-x-1 p-2 hover:bg-red-600 rounded-md w-full "
//                 >
//                   {" "}
//                   <LuLayoutDashboard />
//                   <p>Dashboard</p>
//                 </Link>
//                 <span className="text-white flex items-center gap-x-1 p-2  hover:bg-red-600 rounded-md w-full">
//                   {" "}
//                   <FaPeopleRobbery />
//                   <p>My Events</p>
//                 </span>
//                 <span className="text-white flex items-center gap-x-1 p-2  hover:bg-red-600 rounded-md w-full">
//                   {" "}
//                   <GoOrganization />
//                   <p>Event Lists</p>
//                 </span>
//                 <span className="text-white flex items-center gap-x-1 p-2  hover:bg-red-600 rounded-md w-full">
//                   {" "}
//                   <FaRegBell />
//                   <p>BookMarks</p>
//                 </span>
//                 <span className="text-white flex items-center gap-x-1 p-2  hover:bg-red-600 rounded-md w-full">
//                   {" "}
//                   <IoSettingsOutline />
//                   <p>Account</p>
//                 </span>
//               </div>

//               <div className="w-full mt-32" onClick={handleLogOut}>
//                 <span className="text-white flex items-center gap-x-1 p-2 bg-red-500  hover:bg-red-600 rounded-md w-full">
//                   {" "}
//                   <LuLogOut />
//                   <p>Logout</p>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// };

// export default UserSideBar;
