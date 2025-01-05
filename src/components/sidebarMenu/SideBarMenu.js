import React, { useState } from "react";
import "./SideBarMenu.css";
import projectIcon from "../../assets/project.png";
import NAButton from "../naButton/NAButton";

const SideBarMenu = () => {
  const [isRealesesHovered, setisRealesesHovered] = useState(false);
  const [isIssuesAndFiltersHovered, setIsIssuesAndFiltersHovered] =
    useState(false);
  const [isPagesHovered, setPagesisHovered] = useState(false);
  const [isReportsHovered, setisReportsHovered] = useState(false);
  const [isComponentsHovered, setisComponentsHovered] = useState(false);
  return (
    <div className="sidebar-menu">
      <div className="sidebar-header">
        <div>
          <img className="project-icon" src={projectIcon} alt="jira-icon" />
        </div>
        <div className="project-name">
          <div className="project-version">singularity 1.0</div>
          <div className="project-type">Software project</div>
        </div>
      </div>
      <div className="jira-section">
        <i class="bi bi-credit-card fs-5"></i>
        <span className="project-settings">Jira Board</span>
      </div>
      <div className="settings-section">
        <i class="bi bi-gear fs-5"></i>
        <span className="project-settings">Project settings</span>
      </div>
      <hr></hr>
      <div
        className="options"
        onMouseEnter={() => setisRealesesHovered(true)}
        onMouseLeave={() => setisRealesesHovered(false)}
      >
        <i className="bi bi-truck fs-5"></i>
        <span className="project-settings">
          {isRealesesHovered ? <NAButton /> : "Releases"}
        </span>
      </div>
      <div
        className="options"
        onMouseEnter={() => setIsIssuesAndFiltersHovered(true)}
        on
        onMouseLeave={() => setIsIssuesAndFiltersHovered(false)}
      >
        <i class="bi bi-hdd-stack fs-5"></i>
        <span className="project-settings">
          {isIssuesAndFiltersHovered ? <NAButton /> : "Issues and filters"}
        </span>
      </div>
      <div
        className="options"
        onMouseEnter={() => setPagesisHovered(true)}
        onMouseLeave={() => setPagesisHovered(false)}
      >
        <i className="bi bi-file-earmark-text fs-5"></i>
        <span className="project-settings">
          {isPagesHovered ? <NAButton /> : "Pages"}
        </span>
      </div>
      <div
        className="options"
        onMouseEnter={() => setisReportsHovered(true)}
        onMouseLeave={() => setisReportsHovered(false)}
      >
        <i className="bi bi-graph-up-arrow fs-5"></i>
        <span className="project-settings">
          {isReportsHovered ? <NAButton /> : "Reports"}
        </span>
      </div>
      <div
        className="options"
        onMouseEnter={() => setisComponentsHovered(true)}
        onMouseLeave={() => setisComponentsHovered(false)}
      >
        <i className="bi bi-box-seam fs-5 bold-icon"></i>
        <span className="project-settings">
          {isComponentsHovered ? <NAButton /> : "Components"}
        </span>
      </div>
    </div>
  );
};

export default SideBarMenu;
