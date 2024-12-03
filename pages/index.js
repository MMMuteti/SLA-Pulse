import { useEffect, useState } from "react";
import Alert from "../components/Alert";
import Dashboard from "../components/Dashboard";

export default function Home() {
  const [slas, setSlas] = useState([]); // SLA data state
  const [alert, setAlert] = useState(null); // Alert state

  // Fetch SLA data on component load
  useEffect(() => {
    fetch("/api/slas")
      .then((response) => response.json())
      .then((data) => setSlas(data))
      .catch(() =>
        triggerAlert("error", "Failed to fetch SLA data. Please try again.")
      );
  }, []);

  // Update SLA status
  const updateStatus = async (id, status) => {
    try {
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
        triggerAlert("success", "SLA status updated successfully!");
      } else {
        throw new Error("Failed to update SLA status.");
      }
    } catch (error) {
      triggerAlert("error", error.message);
    }
  };

  // Trigger an alert
  const triggerAlert = (type, message) => {
    setAlert({ type, message });
    setTimeout(() => setAlert(null), 5000); // Clear alert after 5 seconds
  };

  return (
    <div>
      <h1>SLA Tracker</h1>

      {/* Alert Component */}
      {alert && <Alert message={alert.message} type={alert.type} />}

      {/* SLA Table */}
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

      {/* Dashboard Component */}
      <Dashboard slaData={slas} />
    </div>
  );
}
