import Icons from "../../../icons/icons";
import classes from "./input_search.module.css";
import { connect } from "react-redux";
import {
  addRepositoriesInformationCreator,
  addUserInformationCreator,
  changeInputValueCreator,
  changeLoadingStatusCreator,
} from "../../../redux/main_reducer/main_reducer_creator";

const Search = (props) => {
  const { value, dispatch } = props;

  const handleChange = (e) => {
    dispatch(changeInputValueCreator(e.target.value));
  };

  const searchUser = (e) => {
    if (e.keyCode !== 13 || value === "") return;
    dispatch(changeLoadingStatusCreator("user", "isLoading"));
    fetch(`https://api.github.com/users/${value}`)
      .then((data) => {
        if (data.status === 404) {
          throw new Error("User not found");
        }
        return data.json();
      })
      .then((data) => {
        dispatch(addUserInformationCreator(data));
        dispatch(changeLoadingStatusCreator("user", "isLoaded"));
        searchRepositories();
      })
      .catch((error) => {
        dispatch(changeLoadingStatusCreator("user", "userNotFound"));
      });
  };

  const searchRepositories = () => {
    dispatch(changeLoadingStatusCreator("repositories", "isLoading"));
    fetch(`https://api.github.com/users/${value}/repos`)
      .then((data) => data.json())
      .then((data) => {
        dispatch(addRepositoriesInformationCreator(data));
        dispatch(changeLoadingStatusCreator("repositories", "isLoaded"));
      });
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
