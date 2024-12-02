import React, { useState, useEffect } from "react";
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
      const timer = setTimeout(() => setVisible(false), duration);
      return () => clearTimeout(timer);
    }
  }, [autoClose, duration]);

  if (!visible) return null;

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
          &times;
        </button>
      )}
    </div>
  );
}

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
