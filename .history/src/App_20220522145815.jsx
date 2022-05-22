import Header from "./components/header/header";
import MainPage from "./components/main_page/main_page";
import { connect } from "react-redux";
function App(props) {
  console.log(loadingStatus);
  return (
    <div className="App">
      <Header />
      <MainPage />
    </div>
  );
}
