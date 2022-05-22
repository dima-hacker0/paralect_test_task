import Icons from "../../../icons/icons";
import classes from "./input_search.module.css";

const Search = () => {
  const [value, setValue] = "";

  const handleChange = (e) => {
    console.log(e);
  };
  return (
    <div className={classes.blockSearch}>
      <input
        value={value}
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
