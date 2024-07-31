import "./App.css";
import Main from "./component/main/Main";
import Sidebar from "./component/sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="app">
        <div className="appGlass">
          <div className="">
            <Sidebar />
          </div>
          <div className="">
            <Main />
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
}

export default App;
