import classes from "./user.module.css";
import { connect } from "react-redux";
const User = () => {
  return (
    <div className={classes.profile}>
      <img src="" alt="" />
    </div>
  );
};
export default connect()(User);
