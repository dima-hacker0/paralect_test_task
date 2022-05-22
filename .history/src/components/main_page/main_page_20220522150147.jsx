import classes from "./main_page.module.css";
import User from "./user/user";
import Repositories from "./repositories/repositories";
import { connect } from "react-redux";
import Loading from "../loading/loading";

const MainPage = (props) => {
  const { repositories, user, loadingStatus } = props;

  if (
    loadingStatus.user === "noRequest" &&
    loadingStatus.repositories === "noRequest"
  ) {
    return <div className={classes.noRequest}>Введите запрос</div>;
  }
  return (
    <section className={classes.MainPage}>
      <User />
      <Repositories />
    </section>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    repositories: state.mainReducer.repositories,
    user: state.mainReducer.user,
    loadingStatus: state.mainReducer.loadingStatus,
  };
};

export default connect(mapStateToProps, null)(MainPage);
