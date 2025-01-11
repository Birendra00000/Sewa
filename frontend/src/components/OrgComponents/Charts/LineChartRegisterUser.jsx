import React, { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
//var CanvasJSReact = require('@canvasjs/react-charts');

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class LineChartRegisterUser extends Component {
  render() {
    const options = {
      animationEnabled: true,
      title: {
        text: "",
      },
      axisX: {
        valueFormatString: "MMM",
      },
      axisY: {
        title: "Number of Participants",
      },
      data: [
        {
          yValueFormatString: "$#,###",
          xValueFormatString: "MMMM",
          type: "spline",
          dataPoints: [
            { x: new Date(2017, 0), y: 40 },
            { x: new Date(2017, 1), y: 50 },
            { x: new Date(2017, 2), y: 80 },
            { x: new Date(2017, 3), y: 60 },
            { x: new Date(2017, 4), y: 35 },
            { x: new Date(2017, 5), y: 33 },
            { x: new Date(2017, 6), y: 100 },
            { x: new Date(2017, 7), y: 52 },
            { x: new Date(2017, 8), y: 32 },
            { x: new Date(2017, 9), y: 42 },
            { x: new Date(2017, 10), y: 79 },
            { x: new Date(2017, 11), y: 98 },
          ],
        },
      ],
    };
    return (
      <div className="w-[40%]">
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}
export default LineChartRegisterUser;
