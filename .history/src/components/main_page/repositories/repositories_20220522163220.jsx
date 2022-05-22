import classes from "./repositories.module.css";
import { connect } from "react-redux";
const Repositories = () => {
  return (
    <div className={classes.repositories}>
      <p className={classes.amountRepositories}></p>
    </div>
  );
};

export default Repositories;
