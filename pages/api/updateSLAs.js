import axios from "axios";

export default async function updateSLAs(req, res) {
  // Allow only PUT requests
  if (req.method !== "PUT") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { id, status } = req.body; // Extract SLA ID and new status from the request body

    try {
      // Update SLA status in the backend
      const response = await axios.put(`http://localhost:5500/api/slas/${id}`, { status });

  try {
    // Update SLA status in the backend
    const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:5500";
    const response = await axios.put(`${API_BASE_URL}/api/slas/${id}`, { status });

    // Respond to the client with the updated SLA
    res.status(200).json(response.data);
  } catch (error) {
    // Enhanced error handling
    console.error("Error updating SLA:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json({
      error: error.response?.data || "Failed to update SLA",
    });
  }
}
