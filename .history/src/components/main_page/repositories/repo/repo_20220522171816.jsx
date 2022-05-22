import classes from "./repo.module.css";

const Repo = (props) => {
  console.log(props.dataRepo);

  const { name, description, html_url } = props.dataRepo;
  console.log(description);
  return (
    <div className={classes.repo}>
      <a
        rel="noreferrer"
        target="_blank"
        href={html_url}
        className={classes.name}
      >
        {name}
      </a>
      {description !== null ? (
        <p className={classes.description}>{description}</p>
      ) : null}
    </div>
  );
};

export default Repo;
