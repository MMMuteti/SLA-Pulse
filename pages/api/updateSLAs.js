import axios from "axios";

export default async function updateSLAs(req, res) {
  if (req.method === "PUT") {
    const { id, status } = req.body; // Extract SLA ID and new status from the request body

    if (!id || !status) {
      return res.status(400).json({ error: "Missing required fields: id or status" });
    }

    try {
      // Update SLA status in the backend
      const response = await axios.put(`http://localhost:3000/api/slas/${id}`, { status });

      // Respond to the client with the updated SLA
      res.status(200).json(response.data);
    } catch (error) {
      console.error("Error updating SLA:", error.message);
      res.status(500).json({ error: "Failed to update SLA" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
