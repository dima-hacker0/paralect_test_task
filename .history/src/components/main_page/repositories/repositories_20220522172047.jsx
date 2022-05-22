import classes from "./repositories.module.css";
import { connect } from "react-redux";
import Repo from "./repo/repo";

const Repositories = (props) => {
  const { repositories } = props;

  const items = repositories.map((element, i) => (
    <Repo key={i} dataRepo={element} />
  ));

  return (
    <div className={classes.repositories}>
      <p
        className={classes.amountRepositories}
      >{`Repositories (${repositories.length})`}</p>
      <div className={classes.items}>{items}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { repositories: state.mainReducer.repositories };
};

export default connect(mapStateToProps, null)(Repositories);
