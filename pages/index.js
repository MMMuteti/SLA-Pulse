import { useEffect, useState } from "react";

export default function Home() {
  const [slas, setSlas] = useState([]);

  useEffect(() => {
    fetch("/api/slas")
      .then((response) => response.json())
      .then((data) => setSlas(data));
  }, []);

  