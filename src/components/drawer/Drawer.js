import React, { useState } from "react";
import "./Drawer.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import jiraIcon from "../../assets/jira.png";

const CustomDrawer = () => {
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false); // Drawer closes when mouse leaves
  };

  return (
    <div
      className={`drawer-container ${open ? "open" : ""}`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="drawer-trigger" onMouseEnter={handleMouseEnter}>
        <img className="jira-icon" src={jiraIcon} alt="jira-icon" />

        <div className="menu-item">
          <i className="bi bi-search" style={{ fontSize: "22px" }}></i>
          {open && <span>SEARCH ISSUES</span>}
        </div>

        <div className="menu-item">
          <i className="bi bi-plus-lg" style={{ fontSize: "22px" }}></i>
          {open && <span>CREATE ISSUES</span>}
        </div>

        <div className="menu-item about">
          <i className="bi bi-question-circle" style={{ fontSize: "22px" }}></i>
          {open && <span>ABOUT</span>}
        </div>
      </div>
    </div>
  );
};

export default CustomDrawer;
