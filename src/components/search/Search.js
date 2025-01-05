import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <div className="search">
      <i
        className="bi bi-search search-bi-icon"
        style={{ fontSize: "13px" }}
      ></i>
      <input type="text"></input>
    </div>
  );
};

export default Search;
