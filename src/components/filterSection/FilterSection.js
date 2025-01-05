import React from "react";
import Search from "../search/Search";
import Avatar from "../avatar/Avatar";
import "./FilterSection.css"
import TransparentButton from "../transparentButton/TransparentButton";

const FilterSection = () => {
  return (
    <div className="filter-section">
      <Search />
      <Avatar />
      <TransparentButton title="Only My Issues"/>
      <TransparentButton title="Recently Updated" />
    </div>
  );
};

export default FilterSection;
