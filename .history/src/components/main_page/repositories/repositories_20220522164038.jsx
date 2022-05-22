import classes from "./repositories.module.css";
import { connect } from "react-redux";

const Repositories = (props) => {
  const { repositories } = props;
  console.log(repositories);
  return (
    <div className={classes.repositories}>
      <p
        className={classes.amountRepositories}
      >{`Repositories (${repositories.length})`}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { repositories: state.mainReducer.repositories };
};

export default connect(mapStateToProps, null)(Repositories);
