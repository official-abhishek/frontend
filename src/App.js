import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateComponentFolder from "./components/CreateComponentFolder";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponents from "./components/ListEmployeeComponents";

function App() {
  return (
    <div>
      {/* <div className="container"> */}
      <HeaderComponent />
      <div className="container">
        <Routes>
          <Route path="/" exact Component={ListEmployeeComponents}></Route>
          <Route path="/employee" Component={ListEmployeeComponents}></Route>
          <Route path="/add-employee" Component={CreateComponentFolder}></Route>
        </Routes>
      </div>
      <FooterComponent />
    </div>

    // </div>
  );
}

export default App;
