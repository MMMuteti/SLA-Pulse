import React, { useEffect, useState } from "react";
import SLAChart from "./SLAChart";

export default function Dashboard() {
  const [slaData, setSlaData] = useState([]);
  const [summary, setSummary] = useState({
    totalTasks: 0,
    completedTasks: 0,
    pendingTasks: 0,
  });

  useEffect(() => {
    fetch("/api/fetchSLAs")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setSlaData(data);
          setSummary(calculateSummary(data));
        } else {
          console.error("Fetched SLA data is not an array:", data);
          setSlaData([]);
          setSummary({
            totalTasks: 0,
            completedTasks: 0,
            pendingTasks: 0,
          });
        }
      })
      .catch((error) => console.error("Error fetching SLA data:", error));
  }, []);

  const calculateSummary = (data) => {
    const totalTasks = data.length;
    const completedTasks = data.filter((task) => task.status === "Completed").length;
    const pendingTasks = data.filter((task) => task.status === "In Progress").length;

    return {
      totalTasks,
      completedTasks,
      pendingTasks,
    };
  };

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
            {Array.isArray(slaData) ? 
              slaData.map((task) => (
                <tr key={task.id}>
                  <td>{task.task}</td>
                  <td>{new Date(task.deadline).toLocaleString()}</td>
                  <td>{task.status}</td>
                </tr>
              )) : 
              <tr><td colSpan="3">No tasks available</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}