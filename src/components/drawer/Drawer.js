import React, { useState } from "react";
import AboutModal from "../aboutModal/AboutModal";
import "./Drawer.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import jiraIcon from "../../assets/jira.png";

const CustomDrawer = () => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true); // Open modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
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

        <div className="menu-item about" onClick={openModal}>
          <i className="bi bi-question-circle" style={{ fontSize: "22px" }}></i>
          {open && <span>ABOUT</span>}
        </div>
      </div>
      <AboutModal isOpen={isModalOpen} onClose={closeModal} />{" "}
      {/* Modal component */}
    </div>
  );
};

export default CustomDrawer;
