import classes from "./repo.module.css";

const Repo = (props) => {
  console.log(props.dataRepo);

  const { name, description, html_url } = props.dataRepo;
  return (
    <div className={classes.repo}>
      <p>{name}</p>
      {description !== undefined ? <p>{description}</p> : null}
    </div>
  );
};

export default Repo;
