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
  Legend
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
      suggestedMin: -10,
      suggestedMax: 200,
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

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Montly Generated Invoice",
      data: labels.map(() => faker.number.int({ min: 0, max: 70 })),
      borderColor: "#4AC3C6",
      backgroundColor: "#4AC3C6",
      fill: true,
      tension: 0.3,
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
