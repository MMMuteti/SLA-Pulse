import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import PropTypes from "prop-types";

export default function Alert({
  message,
  type = "info",
  autoClose = true,
  duration = 5000,
  className = "",
}) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (autoClose && duration > 0) {
=======

export default function Alert({ message, type = "info", autoClose = true, duration = 5000 }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (autoClose) {
>>>>>>> master
      const timer = setTimeout(() => setVisible(false), duration);
      return () => clearTimeout(timer);
    }
  }, [autoClose, duration]);

  if (!visible) return null;

<<<<<<< HEAD
  const getTypeStyles = () => `alert--${type}`;

  return (
    <div
      className={`alert ${getTypeStyles()} ${className}`}
      role="alert"
      aria-live={autoClose ? "polite" : "assertive"}
    >
      <span>{message}</span>
      {!autoClose && (
        <button
          onClick={() => setVisible(false)}
          className="alert-close"
          aria-label="Close alert"
        >
=======
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
>>>>>>> master
          &times;
        </button>
      )}
    </div>
  );
}
<<<<<<< HEAD

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["info", "success", "error", "warning"]),
  autoClose: PropTypes.bool,
  duration: PropTypes.number,
  className: PropTypes.string,
};

Alert.defaultProps = {
  type: "info",
  autoClose: true,
  duration: 5000,
  className: "",
};
=======
>>>>>>> master
