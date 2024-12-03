export default async function handler(req, res) {
    const response = await fetch("http://localhost:5500/api");
    const data = await response.json();
    res.status(200).json(data);
  }