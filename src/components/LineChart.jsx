import React from "react";
import { getLineDates } from "../helper/utils";
import { Line } from "react-chartjs-2";
import zoomPlugin from "chartjs-plugin-zoom";

import {
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

ChartJs.register(
  LineElement,
  CategoryScale,
  PointElement,
  LinearScale,
  Tooltip,
  zoomPlugin
);

const LineChart = ({ lineChartdata, selectedIndex }) => {
  const lineChartPoints = lineChartdata.map(({ Features }) => Features);

  const selectedBarDataPoints = lineChartPoints.map(
    (dataPoint) => dataPoint[selectedIndex]
  );

  const lineDates = getLineDates(lineChartdata);

  const data = {
    labels: lineDates,
    datasets: [
      {
        label: "Line Chart",
        data: selectedBarDataPoints,
        backgroundColor: "#4472C4",
        borderColor: "#4472C4",
        pointBorderColor: "#4472C4",
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Time Range",
        },
      },
      y: {
        title: {
          display: true,
          text: "Values",
        },
      },
    },

    plugins: {
      datalabels: {
        display: false,
      },
      zoom: {
        pan: {
          enabled: true,
        },
        zoom: {
          pinch: {
            enabled: true,
          },
          mode: "x",
        },
      },
    },
  };
  return <Line data={data} options={options} />;
};

export default LineChart;
