import React from "react";
import LineChartRegisterUser from "../../../components/OrgComponents/Charts/LineChartRegisterUser";
import BarChartOrg from "../../../components/OrgComponents/Charts/BarChartOrg";
import ParticipantsUser from "../../../components/OrgComponents/ParticipantsUser";

const OrgFashBoard = () => {
  return (
    <div className="w-full flex justify-center ">
      <div className="flex w-[90%] gap-10 mt-10">
        <ParticipantsUser />
        <LineChartRegisterUser />
      </div>
    </div>
  );
};

export default OrgFashBoard;
