import classes from "./main_page.module.css";
import Profile from "./profile/profile";
import Repositories from "./repositories/repositories";

const MainPage = () => {
  return (
    <section className={classes.MainPage}>
      <Profile />
      <Repositories />
    </section>
  );
};

export default MainPage;
