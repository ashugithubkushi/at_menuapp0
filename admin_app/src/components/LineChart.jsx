import React from 'react';
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const data = {
    labels: labels,
    datasets: [
       {
        label: "My first dataset",
        backgroundColor: "rgba(255, 255, 255)",
        borderColor: "rgba(255, 99, 132, 1)",
        data: [0, 10, 5, 2, 20, 30, 45],
       },
    ],
};

const LineChat = () => {
  return (
    <div className="bg-white border border-secondary">
      <Line data={data}></Line>
    </div>
  )
}

export default LineChat
