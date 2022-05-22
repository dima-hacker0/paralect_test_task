import classes from "./main_page.module.css";
import User from "./user/user";
import Repositories from "./repositories/repositories";
import { connect } from "react-redux";

const MainPage = (props) => {
  const { repositories, user, loadingStatus } = props;

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
