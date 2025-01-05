import "./DashboardSheet.css";
import React from 'react'
import Card from "../card/Card"

const DashboardSheet = ({title, count}) => {
  return (
    <div className="dashboard-sheet">
      <div className="status">
        <span className="title">{title}</span>
        <span className="count">{count}</span>
      </div>
      <Card />
    </div>
  );
}

export default DashboardSheet