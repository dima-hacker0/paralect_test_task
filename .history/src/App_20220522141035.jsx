import Header from "./components/header/header";
import MainPage from "./components/main_page/main_page";
import { connect } from "react-redux";
function App(props) {
  console.log(props);
  const { repositories, user } = props;
  return (
    <div className="App">
      <Header />
      <MainPage />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    repositories: state.mainReducer.repositories,
    user: state.mainReducer.user,
  };
};

export default connect(mapStateToProps, null)(App);
