import React from "react";
import { Line } from "react-chartjs-2";

export default function SLAChart({ data }) {
  const chartData = {
    labels: data.map((item) => item.task),
    datasets: [
      {
        label: "SLA Status",
        data: data.map((item) => (item.status === "Completed" ? 1 : 0)),
        borderColor: "rgba(75,192,192,1)",
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
}
