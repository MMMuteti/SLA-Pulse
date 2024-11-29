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