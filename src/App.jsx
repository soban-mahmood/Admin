import "./App.css";
import Main from "./component/main/Main";
import Right from "./component/right/Right";
import Sidebar from "./component/sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="app">
        <div className="appGlass">
          <Sidebar />
          <Main />
          <Right />
        </div>
      </div>
    </>
  );
}

export default App;
