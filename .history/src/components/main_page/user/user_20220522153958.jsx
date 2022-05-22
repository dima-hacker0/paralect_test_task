import classes from "./user.module.css";
import { connect } from "react-redux";

const User = (props) => {
  console.log(props.userInformation);
  const { avatar_url, name } = props.userInformation;
  return (
    <div className={classes.profile}>
      <img className={classes.avatar} src={avatar_url} alt="avatar" />
      {name !== undefined ? <p>{name}</p> : null}
    </div>
  );
};
const mapStateToProps = (state) => {
  return { userInformation: state.mainReducer.user };
};
export default connect(mapStateToProps)(User);
