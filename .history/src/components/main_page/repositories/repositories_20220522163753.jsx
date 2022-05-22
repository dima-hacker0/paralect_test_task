import classes from "./repositories.module.css";
import { connect } from "react-redux";

const Repositories = (props) => {
  const { repositories } = props;
  return (
    <div className={classes.repositories}>
      <p className={classes.amountRepositories}>{repositories.length}</p>
    </div>
  );
};

const mapStateToProps = (state) => {};

export default connect(mapStateToProps, null)(Repositories);
