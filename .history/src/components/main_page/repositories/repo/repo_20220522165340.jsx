import classes from "./repo.module.css";

const Repo = (props) => {
  console.log(props.dataRepo);

  const { name, description, html_url } = props.dataRepo;
  return <div></div>;
};

export default Repo;
