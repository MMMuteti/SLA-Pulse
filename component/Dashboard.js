<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import Alert from "../components/Alert";
import SLAChart from "./SLAChart";

export default function Dashboard() {
  const [slaData, setSlaData] = useState([]);
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/fetchSLAs")
      .then((response) => response.json())
      .then((data) => {
        setSlaData(data);
        setLoading(false);
      })
      .catch(() => {
        setAlert({ type: "error", message: "Failed to load SLA data." });
        setLoading(false);
      });
  }, []);

  const triggerAlert = (type, message) => setAlert({ type, message });

  const calculateSummary = () => {
    const totalTasks = slaData.length;
    const completedTasks = slaData.filter((task) => task.status === "Completed").length;
    const pendingTasks = slaData.filter((task) => task.status === "In Progress").length;

    return { totalTasks, completedTasks, pendingTasks };
  };

  const summary = slaData?.length ? calculateSummary() : { totalTasks: 0, completedTasks: 0, pendingTasks: 0 };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="dashboard">
      <h1>SLA Dashboard</h1>
=======
import Alert from "../components/Alert";
import { useEffect, useState } from "react";

export default function Home() {
  const [alert, setAlert] = useState(null);

  const triggerAlert = (type, message) => {
    setAlert({ type, message });
    setTimeout(() => setAlert(null), 5000); // Auto-clear alert after 5 seconds
  };

  return (
    <div>
      <h1>SLA Tracker</h1>
>>>>>>> master
      <button onClick={() => triggerAlert("success", "SLA Updated Successfully!")}>
        Show Success Alert
      </button>
      <button onClick={() => triggerAlert("error", "SLA Breach Detected!")}>
        Show Error Alert
      </button>
      <button onClick={() => triggerAlert("warning", "Approaching SLA Deadline!")}>
        Show Warning Alert
      </button>

      {alert && <Alert message={alert.message} type={alert.type} />}
<<<<<<< HEAD

=======
    </div>
  );
}

import React from "react";
import SLAChart from "./SLAChart";

export default function Dashboard({ slaData }) {
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
>>>>>>> master
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
<<<<<<< HEAD
        
=======
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

useEffect(() => {
    fetch("/api/fetchSLAs")
    .then((response) => response.json())
    .then((data) => setSladata(data));
})
>>>>>>> master
