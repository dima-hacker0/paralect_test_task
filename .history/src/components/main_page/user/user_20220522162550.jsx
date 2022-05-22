import classes from "./user.module.css";
import { connect } from "react-redux";
import Icons from "../../../icons/icons";

const User = (props) => {
  console.log(props.userInformation);
  const { avatar_url, name, login, followers, following } =
    props.userInformation;
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
          <div className={classes.followers}>
            <Icons id="two-person" />
            <p></p>
          </div>
          <div className={classes.following}>
            <Icons id="person" />
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { userInformation: state.mainReducer.user };
};
export default connect(mapStateToProps)(User);
