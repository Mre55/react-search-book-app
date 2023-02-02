import React, { useState } from "react";

import classes from "./SearchBar.module.css";

const SearchBar = (props) => {
  const [book, setBook] = useState("");

  const handleChange = (event) => {
    setBook(event.target.value);
  };

  return (
    <div className={classes["search-bar-container"]}>
      <input
        className={classes.input}
        type="text"
        placeholder="Search for..."
        onChange={handleChange}
      />
      <button
        className={classes.searchBtn}
        onClick={props.onFetch.bind(null, book)}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
