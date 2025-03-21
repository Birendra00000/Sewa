"use client";

import React from "react";
// import img1 from "/assets/Ellipse 5.png";
// import img2 from "/assets/Ellipse 6.png";
// import img3 from "/assets/Ellipse 9.png";
// import img4 from "/assets/Group 20.png";
import Image from "next/image";

const Herosection = () => {
  return (
    <div className="relative flex flex-col-reverse lg:flex-row items-center gap-10 mx-24 justify-between min-h-screen bg-blue-50 p-6 ">
      <div className="flex flex-col items-center text-center lg:text-left lg:items-start">
        <div className="max-w-2xl lg:max-w-5xl mb-8">
          <p className="text-2xl lg:text-5xl font-semibold text-gray-800">
            "Your <span className="text-[#0bbcfe]">talent</span> can shape{" "}
            <br className="hidden lg:block" />
            <span className="text-[#0bbcfe]">tomorrow</span>—come be part of a{" "}
            <br className="hidden lg:block" />
            <span className="text-[#0bbcfe]">team</span> where{" "}
            <br className="hidden lg:block" />
            <span className="text-[#0bbcfe]">creativity</span> knows no bounds."
          </p>
        </div>

        <div className="mt-10">
          <button className="px-6 py-2 text-white bg-[#0bbcfe] rounded-full shadow-md hover:bg-[#0176a2] transition lg:px-8 lg:py-3">
            Join Us →
          </button>
        </div>
      </div>

      <div className="flex justify-center lg:justify-end lg:flex-1">
        {/* <Image
          src={img4}
          width={500}
          height={500}
          alt="Picture of the author"
          className="w-[300px] lg:w-[550px] max-w-full"
        /> */}
      </div>

      {/* <Image
        src={img1}
        width={500}
        height={500}
        alt="Picture of the author"
        className="w-[100px] lg:w-[150px] absolute left-1/4 top-1/4 lg:left-[650px] lg:top-[90px] -translate-x-1/4 lg:translate-x-0 lg:translate-y-0"
      />
      <Image
        src={img2}
        width={500}
        height={500}
        alt="Picture of the author"
        className="w-[100px] lg:w-[150px] absolute left-1/4 top-1/2 lg:left-[620px] lg:top-[450px] -translate-x-1/4 lg:translate-x-0 lg:translate-y-0"
      />
      <Image
        src={img2}
        width={500}
        height={500}
        alt="Picture of the author"
        className="w-[100px] lg:w-[150px] absolute left-1/4 top-1/2 lg:left-[620px] lg:top-[450px] -translate-x-1/4 lg:translate-x-0 lg:translate-y-0"
      />
      <Image
        src={img3}
        width={500}
        height={500}
        alt="Picture of the author"
        className="w-[100px] lg:w-[150px] absolute right-1/4 top-1/2 lg:right-10 lg:top-[450px] -translate-x-1/4 lg:translate-x-0 lg:translate-y-0"
      /> */}
    </div>
  );
};

export default Herosection;
