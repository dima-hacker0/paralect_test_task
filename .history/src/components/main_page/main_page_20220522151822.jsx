import classes from "./main_page.module.css";
import User from "./user/user";
import Repositories from "./repositories/repositories";
import { connect } from "react-redux";
import Loading from "../loading/loading";
import Icons from "../../icons/icons";

const MainPage = (props) => {
  const {
    repositories,
    user,
    loadingStatus: { user: userStatus, repositories: repositoriesStatus },
  } = props;

  if (userStatus === "noRequest" && repositoriesStatus === "noRequest") {
    return (
      <div className={classes.noRequest}>
        <Icons id="search" width="64" height="64" />
        <p className={classes.textStartSearch}>
          Start with searching a GitHub user
        </p>
      </div>
    );
  }
  // else if (userStatus === "isLoading" || repositoriesStatus === "isLoading") {
  //   <Loading />;
  // }
  // return <Loading />;

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
