import React from "react";
import Drawer from "@atlaskit/drawer";
import "./SearchDrawer.css";
import StateDescription from "../statusDescription/StatusDescription"

const SearchDrawer = ({ isOpen, setIsOpen }) => {
  return (
    <div className="search-drawer-wrapper">
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        width="wide"
        label="Search Drawer"
      >
        <div className="search-drawer-content">
          <input
            className="search-issue"
            type="text"
            placeholder="Search issues by summary, description..."
          ></input>
          <div className="recent-issues">recent issues</div>
          <div className="issues-list">
            <StateDescription />
            <StateDescription />
            <StateDescription />
            <StateDescription />
            <StateDescription />
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default SearchDrawer;
