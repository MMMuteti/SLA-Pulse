import React, { useEffect, useState } from "react";
import SLAChart from "./SLAChart";

export default function Dashboard() {
  const [slaData, setSlaData] = useState([]);

  useEffect(() => {
    fetch("/api/fetchSLAs")
      .then((response) => response.json())
      .then((data) => setSlaData(data))
      .catch((error) => console.error("Error fetching SLA data:", error));
  }, []);

  const calculateSummary = () => {
    const totalTasks = slaData.length;
    const completedTasks = slaData.filter((task) => task.status === "Completed").length;
    const pendingTasks = slaData.filter((task) => task.status === "In Progress").length;

    return {
      totalTasks,
      completedTasks,
      pendingTasks,
    };
  };

  const summary = calculateSummary();

  return (
    <div className="dashboard">
      <h1>SLA Dashboard</h1>
      <div className="dashboard-summary">
        <div className="card">
          <h2>Total Tasks</h2>
          <p>{summary.totalTasks}</p>
        </div>
        <div className="card">
          <h2>Completed Tasks</h2>
          <p>{summary.completedTasks}</p>
        </div>
        <div className="card">
          <h2>Pending Tasks</h2>
          <p>{summary.pendingTasks}</p>
        </div>
      </div>

      <div className="dashboard-chart">
        <h2>Task Progress</h2>
        <SLAChart data={slaData} />
      </div>

      <div className="dashboard-table">
        <h2>Task Details</h2>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Deadline</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {slaData.map((task) => (
              <tr key={task.id}>
                <td>{task.task}</td>
                <td>{new Date(task.deadline).toLocaleString()}</td>
                <td>{task.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}