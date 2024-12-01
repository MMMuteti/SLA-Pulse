import { useEffect, useState } from "react";

export default function Home() {
  const [slas, setSlas] = useState([]);

  useEffect(() => {
    fetch("/api/slas")
      .then((response) => response.json())
      .then((data) => setSlas(data));
  }, []);

  const updateStatus = async (id, status) => {
    const response = await fetch("/api/update-sla", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    const result = await response.json();
    if (result.success) {
      setSlas((prev) =>
        prev.map((sla) => (sla.id === id ? { ...sla, status } : sla))
      );
    }
  };

  return (
    <div>
      <h1>SLA Tracker</h1>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Deadline</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {slas.map((sla) => (
            <tr key={sla.id}>
              <td>{sla.task}</td>
              <td>{new Date(sla.deadline).toLocaleString()}</td>
              <td>{sla.status}</td>
              <td>
                <button onClick={() => updateStatus(sla.id, "Completed")}>
                  Mark as Completed
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import Alert from "../components/Alert";
import { useState } from "react";

export default function Home() {
  const [alert, setAlert] = useState(null);

  const triggerAlert = (type, message) => {
    setAlert({ type, message });
    setTimeout(() => setAlert(null), 5000); // Auto-clear alert after 5 seconds
  };

  return (
    <div>
      <h1>SLA Tracker</h1>
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
    </div>
  );
}


import Dashboard from "../components/Dashboard";
import { useEffect, useState } from "react";

export default function Home() {
  const [slaData, setSlaData] = useState([]);

  useEffect(() => {
    fetch("/api/slas")
      .then((response) => response.json())
      .then((data) => setSlaData(data));
  }, []);

  return (
    <div>
      <Dashboard slaData={slaData} />
    </div>
  );
}