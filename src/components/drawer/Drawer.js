import React, { useState } from "react";
import "./Drawer.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import jiraIcon from "../../assets/jira.png";
import SearchDrawer from "../searchDrawer/SearchDrawer";
import CreateIssueModal from "../createIssueModal/CreateIssueModal"

const CustomDrawer = () => {
  const [open, setOpen] = useState(false);
  const [isSearchDrawerOpen, setIsSearchDrawerOpen] = useState(false);
  const [isCreateIssueOpen, setIsCreateIssueOpen] = useState(false);

  const handleMouseEnter = () => setOpen(true);
  const handleMouseLeave = () => setOpen(false);

  const handleSearchClick = () => setIsSearchDrawerOpen(true);
  const handleCreateIssueClick = () => setIsCreateIssueOpen(true);

  return (
    <div
      className={`drawer-container ${open ? "open" : ""}`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="drawer-trigger" onMouseEnter={handleMouseEnter}>
        <img className="jira-icon" src={jiraIcon} alt="Jira icon" />

        <div className="menu-item" onClick={handleSearchClick}>
          <i className="bi bi-search" style={{ fontSize: "22px" }}></i>
          {open && <span>SEARCH ISSUES</span>}
        </div>

        <div className="menu-item" onClick={handleCreateIssueClick}>
          <i className="bi bi-plus-lg" style={{ fontSize: "22px" }}></i>
          {open && <span>CREATE ISSUES</span>}
        </div>

        <div className="menu-item about">
          <i className="bi bi-question-circle" style={{ fontSize: "22px" }}></i>
          {open && <span>ABOUT</span>}
        </div>
      </div>

      <SearchDrawer
        isOpen={isSearchDrawerOpen}
        setIsOpen={setIsSearchDrawerOpen}
      />
      <CreateIssueModal
        isOpen={isCreateIssueOpen}
        setIsOpen={setIsCreateIssueOpen}
      />
    </div>
  );
};

export default CustomDrawer;
