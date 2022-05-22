import Icons from "../../../icons/icons";
import classes from "./input_search.module.css";
import { connect } from "react-redux";

const Search = (props) => {
  debugger;
  const { value, dispatch } = props;

  console.log(value);

  const handleChange = (e) => {};

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
const mapStateToProps = (state) => {
  return { value: state.mainReducer.inputValue };
};

export default connect(mapStateToProps, null)(Search);
