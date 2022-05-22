import Icons from "../../icons/icons";
import classes from "./header.module.css";
import Search from "./input_search/input_search";
import { connect } from "react-redux";

const Header = (props) => {
  console.log(props);
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
  return state;
};

export default connect(mapStateToProps, null)(Header);
