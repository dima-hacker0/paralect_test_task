import Header from "./components/header/header";
import MainPage from "./components/main_page/main_page";
import { connect } from "http2";

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
