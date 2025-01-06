import React from "react";
import "./DashboardHeader.css";

const DashboardHeader = () => {
  return (
    <div className="dashboard-header">
      <span className="heading">Jira board</span>
      <a href="https://github.com/himani-mehra" target="_blank">
        <button className="github-repo">
          <i class="bi bi-github"></i>
          Github Repo
        </button>
      </a>
    </div>
  );
};

export default DashboardHeader;
