import classes from "./repositories.module.css";
import { connect } from "react-redux";
import Repo from "./repo/repo";
import Icons from "../../../icons/icons";

const Repositories = (props) => {
  const { repositories } = props;

  if (repositories.length === 0) {
    return (
      <div>
        <Icons id="empty-reop" />
      </div>
    );
  }

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
