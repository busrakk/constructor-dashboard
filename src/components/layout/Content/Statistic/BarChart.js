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
  indexAxis: "y",
  scales: {
    y: {
      beginAtZero: true,
      position: "left",
      ticks: {
        color: "#6B7A99",
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
        color: "#ADB8CC",
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

const labels = ["Visitors", "Subscriber", "Contributor", "Author"];

export const data = {
  labels,
  datasets: [
    {
      data: [113, 60, 20, 8],
      backgroundColor: [
        "rgba(255, 102, 51, 1)",
        "rgba(51, 97, 255, 1)",
        "rgba(136, 51, 255, 1)",
        "rgba(46, 230, 202, 1)",
      ],
    },
  ],
};

const barThickness = 5; // İncelik değeri

export function BarChart() {
  return <Bar options={{ ...options, barThickness }} data={data} />;
}
