import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
  type: "line",
  responsive: true,
  interaction: {
    intersect: false,
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true,
      },
    },
    y: {
      display: true,
      title: {
        display: true,
        text: "Total Invoice Generated",
      },
      suggestedMin: 0,
      suggestedMax: 50,
    },
  },
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Invoice Visual Chart",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Montly Generated Invoice",
      data: labels.map(() => faker.number.int({ min: 0, max: 10000 })),
      borderColor: "#4AC3C6",
      backgroundColor: "#4AC3C6",
      fill: true,
      tension: 1,
    },
  ],
};

const BarChart = () => {
  return (
    <div className="chart_container">
      <Line options={options} data={data} updateMode={"resize"} />
    </div>
  );
};

export default BarChart;
