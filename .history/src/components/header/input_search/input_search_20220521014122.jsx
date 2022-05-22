import { useState } from "react";
import Icons from "../../../icons/icons";
import classes from "./input_search.module.css";

const Search = () => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={classes.blockSearch}>
      <input
        onChange={handleChange}
        placeholder="Enter GitHub username"
        className={classes.input}
        type="text"
      />
      <div className={classes.icon}>
        <Icons id="search" />
      </div>
    </div>
  );
};

export default Search;
