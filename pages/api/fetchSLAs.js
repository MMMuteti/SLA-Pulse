import axios from "axios";

export default async function fetchSLAs(req, res) {
  if (req.method === "GET") {
    try {
      // Fetch data from the backend API
      const response = await axios.get("http://localhost:5500/api/slas");
      const slaData = response.data;

      // Send the data back to the client
      res.status(200).json(slaData);
    } catch (error) {
      console.error("Error fetching SLA data:", error.message);
      res.status(500).json({ error: "Failed to fetch SLA data" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
