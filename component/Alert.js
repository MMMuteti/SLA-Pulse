import React, { useState, useEffect } from "react";

export default function Alert({ message, type = "info", autoClose = true, duration = 5000 }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => setVisible(false), duration);
      return () => clearTimeout(timer);
    }
  }, [autoClose, duration]);

  if (!visible) return null;

  const getTypeStyles = () => {
    switch (type) {
      case "success":
        return "alert-success";
      case "error":
        return "alert-error";
      case "warning":
        return "alert-warning";
      default:
        return "alert-info";
    }
  };

  return (
    <div className={`alert ${getTypeStyles()}`}>
      <span>{message}</span>
      {!autoClose && (
        <button onClick={() => setVisible(false)} className="alert-close">
          &times;
        </button>
      )}
    </div>
  );
}
