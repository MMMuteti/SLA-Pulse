pages/api/fetchSLAs.js

export default async function handler(req, res) {
<<<<<<< HEAD
  const response = await fetch("http://localhost:5500/api/slas");
  const data = await response.json();
  res.status(200).json(data);
}

node_modules/
.next/
.env
=======
  const response = await fetch("http://localhost:5000/api/slas");
  const data = await response.json();
  res.status(200).json(data);
}
>>>>>>> master
