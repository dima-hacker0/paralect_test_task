import classes from "./main_page.module.css";
import User from "./user/user";
import Repositories from "./repositories/repositories";

const MainPage = () => {
  return (
    <section className={classes.MainPage}>
      <User />
      <Repositories />
    </section>
  );
};

export default MainPage;
