import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  scales: {
    y: {
      beginAtZero: true,
      position: "right", // Sayıları sağ tarafta göstermek için
      ticks: {
        color: "#ADB8CC", // Sayıların rengini ayarla
        font: {
          size: 10,
          weight: "bold",
        },
      },
      grid: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#ADB8CC", // Sayıların rengini ayarla
        font: {
          size: 10,
          weight: "bold",
        },
      },
    },
  },
  plugins: {
    legend: {
      display: false,
      position: "right", // Sağ tarafta göstermek için
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  grouped: true, // Sütunları grup olarak göstermek için
};

const labels = [
  "9",
  "",
  "11",
  "",
  "13",
  "",
  "15",
  "",
  "17",
  "",
  "19",
  "",
  "21",
  "",
  "23",
  "",
  "25",
  "",
  "27",
  "",
  "29",
];

export const data = {
  labels,
  datasets: [
    {
      data: [
        600, 400, 350, 400, 200, 500, 400, 350, 400, 300, 200, 500, 250, 550,
        350, 450, 450, 250, 300, 430, 350, 400,
      ],
      backgroundColor: "rgba(41, 204, 57, 1)",
    },
  ],
};

const barThickness = 4; // İncelik değeri

const VBarChart = () => {
  return <Bar options={{ ...options, barThickness }} data={data} />;
};

export default VBarChart;
