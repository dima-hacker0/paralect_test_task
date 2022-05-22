import { useEffect } from "react";
import Icons from "../../icons/icons";
import classes from "./header.module.css";
import Search from "./input_search/input_search";

const Header = () => {
  useEffect(() => {
    a();
  }, []);

  const a = () => {
    const a = fetch(
      "https://api.github.com/users/dima-hacker0/repos?per_page=100"
    )
      .then((data) => data.json())
      .then((data) => console.log(data));

    const b = fetch(
      "https://api.github.com/users/dima-hacker0'
    )
      .then((data) => data.json())
      .then((data) => console.log(data));
  };

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
