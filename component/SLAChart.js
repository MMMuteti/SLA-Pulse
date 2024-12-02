import React from "react";
import { Line } from "react-chartjs-2";
import PropTypes from "prop-types";

export default function SLAChart({ data }) {
  if (!data || data.length === 0) {
    return <p>No SLA data available to display.</p>;
  }

  const chartData = {
    labels: data.map((item) => item.task),
    datasets: [
      {
        label: "SLA Status",
        data: data.map((item) => (item.status === "Completed" ? 100 : 0)),
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.raw === 100 ? "Completed" : "Pending"}`,
        },
      },
    },
    scales: {
      y: {
        ticks: {
          stepSize: 100,
          callback: (value) => (value === 100 ? "Completed" : "Pending"),
        },
      },
    },
  };

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <Line data={chartData} options={options} />
    </div>
  );
}

SLAChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      task: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};
