import Icons from "../../../icons/icons";
import classes from "./input_search.module.css";

const Search = () => {
  const [value, setValue] = "";

  const handleChange = () => {};
  return (
    <div className={classes.blockSearch}>
      <input
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
