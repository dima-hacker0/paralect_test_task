import Icons from "../../../icons/icons";
import classes from "./input_search.module.css";
import { connect } from "react-redux";
import { changeInputValueCreator } from "../../../redux/main_reducer/main_reducer_creator";

const Search = (props) => {
  const { value, dispatch } = props;

  const handleChange = (e) => {
    dispatch(changeInputValueCreator(e.target.value));
  };

  const searchUser = () => {
    console.log(100);
  };

  return (
    <div className={classes.blockSearch}>
      <input
        value={value}
        onKeyUp={searchUser}
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
