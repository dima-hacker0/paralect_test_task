import Icons from "../../../icons/icons";
import classes from "./input_search.module.css";

const Search = () => {
  return (
    <div className={classes.blockSearch}>
      <input className={classes.input} type="text" />
      <div className={classes.icon}></div>
      <Icons id="search" />
    </div>
  );
};

export default Search;
