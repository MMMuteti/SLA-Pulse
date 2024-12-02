import axios from "axios";

export default async function fetchSLAs(req, res) {
<<<<<<< HEAD
  // Allow only GET requests
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Fetch data from the backend API
    const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:5500";
    const response = await axios.get(`${API_BASE_URL}/api/slas`);
    const slaData = response.data;

    // Send the data back to the client
    res.status(200).json(slaData);
  } catch (error) {
    // Enhanced error handling
    console.error("Error fetching SLA data:", error.toJSON());
    res
      .status(error.response?.status || 500)
      .json({ error: error.response?.data || "Failed to fetch SLA data" });
  }
}
=======
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
>>>>>>> master
