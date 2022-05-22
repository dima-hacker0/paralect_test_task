import classes from "./repositories.module.css";
import { connect } from "react-redux";

const Repositories = () => {
  return (
    <div className={classes.repositories}>
      <p className={classes.amountRepositories}></p>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps, null)(Repositories);
