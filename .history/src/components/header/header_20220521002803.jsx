import { useEffect } from "react";
import Icons from "../../icons/icons";
import classes from "./header.module.css";
import Search from "./input_search/input_search";

const Header = () => {
  useEffect(() => {
    a();
  }, []);

  const a = async () => {
    const a = await fetch(
      "https://api.github.com/users/dima-kl;;lkhacker0/repos"
    );
    console.log(a);
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
