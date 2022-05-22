import classes from './loading.module.css';

const Loading = () => {
  return (
    <div className={classes.block}>
      <div className={classes.shellSpinner}>
        <div className={classes.ldsSpinner}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
