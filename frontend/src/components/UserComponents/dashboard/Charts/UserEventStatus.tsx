"use client";

import React, { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const UserEventStatus = ({ authState }) => {
  const todayDate = new Date();
  const options = {
    animationEnabled: true,
    title: {
      text: "Event Status",
      fontSize: 18,
      padding: {
        top: 5, // Adjust padding between title and chart
        bottom: 0,
      },
      margin: 0, // Reduce the margin for title
    },
    legend: {
      verticalAlign: "bottom", // Place legend at bottom to reduce top space
      horizontalAlign: "center",
    },

    data: [
      {
        type: "doughnut",
        showInLegend: true,
        indexLabel: "{name}: {y}",
        yValueFormatString: "#,###'%'",
        dataPoints: [
          { name: "Not Started", y: 40 },
          { name: "Starting", y: 20 },
          { name: "Completed", y: 40 },
        ],
        radius: "70%", // Reduce the radius to make the chart smaller
      },
    ],
  };
  return (
    <div>
      <CanvasJSChart
        options={options}

        /* onRef={ref => this.chart = ref} */
      />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
  );
};

export default UserEventStatus;
