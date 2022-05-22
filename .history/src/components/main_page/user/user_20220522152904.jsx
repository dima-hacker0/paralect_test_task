import classes from "./user.module.css";
import { connect } from "react-redux";

const User = (props) => {
  console.log(props);
  return (
    <div className={classes.profile}>
      <img src="" alt="" />
    </div>
  );
};
const mapStateToProps = (state) => {
  return state.mainReducer;
};
export default connect(mapStateToProps)(User);
