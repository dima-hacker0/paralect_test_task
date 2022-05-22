import classes from "./user.module.css";
import { connect } from "react-redux";

const User = (props) => {
  console.log(props.userInformation);
  const { avatar_url, name, login } = props.userInformation;
  return (
    <div className={classes.profile}>
      <img className={classes.avatar} src={avatar_url} alt="avatar" />
      <div className={classes.description}>
        {name !== undefined ? <p className={classes.name}>{name}</p> : null}
        <a
          rel="noreferrer"
          target="_blank"
          href={`https://github.com/${login}`}
          className={classes.link}
        >
          {login}
        </a>
        <div className={classes.followersAndFollowing}>
          <div className={classes.followers}></div>
          <div className={classes.followers}></div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { userInformation: state.mainReducer.user };
};
export default connect(mapStateToProps)(User);
