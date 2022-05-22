import classes from "./user.module.css";
import { connect } from "react-redux";

const User = (props) => {
  const { userInformation } = props;
  return (
    <div className={classes.profile}>
      <img src="" alt="" />
    </div>
  );
};
const mapStateToProps = (state) => {
  return { userInformation: state.mainReducer.user };
};
export default connect(mapStateToProps)(User);
