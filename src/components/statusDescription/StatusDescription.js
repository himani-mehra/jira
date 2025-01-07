import React from "react";
import "./StatusDescription.css";

const StatusDescription = () => {
  return (
    <div className="status-description">
      <i class="bi bi-check-square-fill" style={{ color: "#4fade6" }}></i>
      <i class="bi bi-arrow-up" style={{ color: "#65ba43" }}></i>
      <i class="bi bi-arrow-down" style={{ color: "#e94a4a" }}></i>
      <i class="bi bi-bookmark-fill" style={{ color: "#65ba43" }}></i>
      <span>
        How about naming your component "StatusBadge" or "TaskStatus"? These
        names suggest.
      </span>
    </div>
  );
};

export default StatusDescription;
