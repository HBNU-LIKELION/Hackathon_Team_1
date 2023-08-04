import "./App.css";
import Home from "./pages/Home";
import WorldMap from "./pages/WorldMap";
import {Route, Routes} from "react-router-dom";
import PatchVisitCount from "./service/patchVisitCount";

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="worldmap" element={<WorldMap/>}></Route>
      </Routes>
    {/*<PatchVisitCount/>*/}
    </div>
  );
}

export default App;

