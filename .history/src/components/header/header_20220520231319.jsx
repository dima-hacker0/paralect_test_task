import Icons from "../../icons/icons";
import classes from "./header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.contaiener}>
        <Icons name="github-logo" />
      </div>
    </header>
  );
};

export default Header;
