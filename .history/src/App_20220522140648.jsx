import Header from "./components/header/header";
import MainPage from "./components/main_page/main_page";
import { connect } from "http2";

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <Header />
      <MainPage />
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect()(App);
