import React from "react";

const DashBoardCard = () => {
  return (
    <div className="flex w-full justify-center">
      <div className=" w-11/12 grid grid-cols-2 ">
        <div className="col-span-1">span1</div>
        <div className="grid grid-rows-2">
          <div className="row-span-1">span2</div>
          <div className="row-span-1">span3</div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardCard;
