import Icons from "../../icons/icons";
import classes from "./header.module.css";
import Search from "./input_search/input_search";
import { connect } from "react-redux";

const Header = (props) => {
  const { value, dispatch } = this.propss;
  //   const a = () => {
  //     const a = fetch(
  //       "https://api.github.com/users/dima-hacker0/repos?per_page=10?page=1"
  //     )
  //       .then((data) => data.json())
  //       .then((data) => console.log(data));

  //     const b = fetch("https://api.github.com/users/dima-hacker0")
  //       .then((data) => data.json())
  //       .then((data) => console.log(data));
  //   };

  return (
    <header className={classes.header}>
      <div className={classes.contaiener}>
        <Icons id="github-logo" />
        <Search />
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return { value: state.mainReducer.inputValue };
};

export default connect(mapStateToProps, null)(Header);
