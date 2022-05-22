import classes from "./user.module.css";
import { connect } from "react-redux";

const User = (props) => {
  return (
    <div className={classes.profile}>
      <img src="" alt="" />
    </div>
  );
};
const mapStateToProps = (state) => {
  return state;
};
export default connect()(User);
