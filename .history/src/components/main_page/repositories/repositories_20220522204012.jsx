import classes from "./repositories.module.css";
import { connect } from "react-redux";
import Repo from "./repo/repo";
import Icons from "../../../icons/icons";
import Paginate from "./paginate/paginate";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

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

  const items = repositories.map((element, i) => (
    <Repo key={i} dataRepo={element} />
  ));

  return (
    <div className={classes.repositories}>
      <p
        className={classes.amountRepositories}
      >{`Repositories (${repositories.length})`}</p>
      <div className={classes.items}>{items}</div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { repositories: state.mainReducer.repositories };
};

export default connect(mapStateToProps, null)(Repositories);
