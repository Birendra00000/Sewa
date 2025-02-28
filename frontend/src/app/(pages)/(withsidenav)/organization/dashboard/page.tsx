"use client";

import React from "react";
import LineChartRegisterUser from "@/components/OrgComponents/Charts/LineChartRegisterUser";
import ParticipantsUser from "@/components/OrgComponents/ParticipantsUser";

const Page = () => {
  return (
    <div className="w-full flex justify-center ">
      <div className="flex w-[90%] gap-10 mt-10">
        <ParticipantsUser />
        <LineChartRegisterUser />
      </div>
    </div>
  );
};

export default Page;
