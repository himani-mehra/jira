import React from "react";
import "./Dashboard.css";
import DashboardPath from "../dashboardPath/DashboardPath";
import DashboardHeader from "../dashboardHeader/DashboardHeader";
import FilterSection from "../filterSection/FilterSection";
import DashboardSheet from "../dashboardSheet/DashboardSheet";

const Header = () => {
  return (
    <div className="dashboard">
      <DashboardPath />
      <DashboardHeader />
      <FilterSection />
      
      <div className="dashboard-sheet-section">
        <DashboardSheet title="Backlog" count="3" />
        <DashboardSheet title="Selected for development" count="4" />
        <DashboardSheet title="In progress" count="2" />
        <DashboardSheet title="done" count="0" />
      </div>
    </div>
  );
};

export default Header;
