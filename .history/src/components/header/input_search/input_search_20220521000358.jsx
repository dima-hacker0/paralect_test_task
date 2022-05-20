import Icons from "../../../icons/icons";
import classes from "./input_search.module.css";

const Search = () => {
  return (
    <div>
      <input type="text" />
      <div className={classes.icon}></div>
      <Icons id="search" />
    </div>
  );
};

export default Search;
