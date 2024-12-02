import { useEffect, useState } from "react";
<<<<<<< HEAD
import Alert from "../components/Alert";
import Dashboard from "../components/Dashboard";

export default function Home() {
  const [slaData, setSlaData] = useState([]);
  const [alert, setAlert] = useState(null);

  // Fetch SLA data
  useEffect(() => {
    fetch("/api/slas")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch SLA data");
        return response.json();
      })
      .then((data) => setSlaData(data))
      .catch((error) => {
        console.error("Error fetching SLAs:", error.message);
        triggerAlert("error", "Failed to load SLA data.");
      });
  }, []);

  // Update SLA status
  const updateStatus = async (id, status) => {
    try {
      const response = await fetch("/api/update-sla", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      const result = await response.json();

      if (response.ok) {
        setSlaData((prev) =>
          prev.map((sla) => (sla.id === id ? { ...sla, status } : sla))
        );
        triggerAlert("success", "SLA updated successfully!");
      } else {
        throw new Error(result.error || "Failed to update SLA.");
      }
    } catch (error) {
      console.error("Error updating SLA:", error.message);
      triggerAlert("error", error.message);
    }
  };

  // Trigger alert
  const triggerAlert = (type, message) => {
    setAlert({ type, message });
    setTimeout(() => setAlert(null), 5000); // Auto-clear alert
  };

  return (
    <div>
      <h1>SLA Tracker</h1>

      {/* Alert Component */}
      {alert && <Alert message={alert.message} type={alert.type} />}

      {/* Dashboard */}
      <Dashboard slaData={slaData} />

      {/* SLA Table */}
=======

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
>>>>>>> master
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
<<<<<<< HEAD
          {slaData.map((sla) => (
=======
          {slas.map((sla) => (
>>>>>>> master
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
<<<<<<< HEAD
=======

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
>>>>>>> master
