import { useEffect } from "react";
import Icons from "../../icons/icons";
import classes from "./header.module.css";
import Search from "./input_search/input_search";

const Header = () => {
  useEffect(() => {
    const a = fetch("https://api.github.com/users/dima-hacker0/repos");
  });

  return (
    <header className={classes.header}>
      <div className={classes.contaiener}>
        <Icons id="github-logo" />
        <Search />
      </div>
    </header>
  );
};

export default Header;
