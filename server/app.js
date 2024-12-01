app.get("/api/slas", (req, res) => {
    // Logic to fetch SLA data
    res.json(slaData);
  });
  
  app.put("/api/slas/:id", (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
  
    // Find the SLA by ID and update its status
    const sla = slaData.find((item) => item.id === id);
    if (sla) {
      sla.status = status;
      res.json(sla);
    } else {
      res.status(404).json({ error: "SLA not found" });
    }
  });
  