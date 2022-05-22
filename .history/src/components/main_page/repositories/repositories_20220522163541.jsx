import classes from "./repositories.module.css";
import { connect } from "react-redux";

const Repositories = (props) => {
  return (
    <div className={classes.repositories}>
      <p className={classes.amountRepositories}></p>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return { repositories: state.mainReducer.repositories };
};

export default connect(mapStateToProps, null)(Repositories);
