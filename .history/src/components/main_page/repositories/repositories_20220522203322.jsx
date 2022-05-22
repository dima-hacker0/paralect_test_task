import classes from "./repositories.module.css";
import { connect } from "react-redux";
import Repo from "./repo/repo";
import Icons from "../../../icons/icons";
import Paginate from "./paginate/paginate";

const Repositories = (props) => {
  const { repositories } = props;

  if (repositories.length === 0) {
    return (
      <div className={classes.emptyRepo}>
        <Icons id="empty-repo" />
        <p className={classes.emptyRepoTitle}>Repository list is empty</p>
      </div>
    );
  }

  const items = repositories.map((element, i) => {
    return <Repo key={i} dataRepo={element} />;
  });

  return (
    <div className={classes.repositories}>
      <p
        className={classes.amountRepositories}
      >{`Repositories (${repositories.length})`}</p>
      <div className={classes.items}>{items}</div>
      <Paginate itemsPerPage={4} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { repositories: state.mainReducer.repositories };
};

export default connect(mapStateToProps, null)(Repositories);
