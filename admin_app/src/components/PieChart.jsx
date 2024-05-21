import React from 'react';
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const data = {
    labels: labels,
    datasets: [
       {
        label: "My first dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(25, 99, 132, 1)",
        data: [0, 10, 5, 2, 20, 30, 45],
       },
    ],
};

const PieChat = () => {
  return (
    <div className="bg-white border border-secondary">
      <Pie data={data}></Pie>
    </div>
  )
}

export default PieChat
