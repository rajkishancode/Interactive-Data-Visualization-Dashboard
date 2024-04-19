import React from "react";
import { getBarDataset } from "../helper/utils";
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import datalabels from "chartjs-plugin-datalabels";

ChartJs.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  datalabels
);

const BarChart = ({ barChartData, onBarClick, barLabels }) => {
  const barDataset = getBarDataset(barChartData);

  const data = {
    labels: barLabels,
    datasets: [
      {
        label: "Bar Chart",
        data: barDataset,
        backgroundColor: "#4472C4",
        borderColor: "#60a5fa",
        hoverBackgroundColor: "#C55A11",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y",

    onClick: (event, elements) => {
      const clickedIndex = elements[0]?.index;

      if (clickedIndex !== undefined) {
        onBarClick(clickedIndex);
      }
    },

    scales: {
      x: {
        title: {
          display: true,
          text: "Total Time Spent",
        },
      },
      y: {
        title: {
          display: true,
          text: "Features",
        },
      },
    },
    plugins: {
      datalabels: {
        display: true,
        align: "end",
        anchor: "start",
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
