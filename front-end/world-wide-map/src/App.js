import "./App.css";
import Home from "./pages/Home";
import WorldMap from "./pages/WorldMap";
import {Route, Routes} from "react-router-dom";
import PatchVisitCount from "./service/patchVisitCount";
import Modal from "./components/Modal";
import React from "react";
import Detail from "./components/Detail";
import Articletest from "./Test/Articletest";


function App() {
  
  
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="worldmap" element={<WorldMap/>}></Route>
        <Route path="modal" element={<Modal/>}></Route>
      </Routes>
    {/*<PatchVisitCount/>*/}
    
    {/*<Articletest />*/}
    
    </div>
  );
}

export default App;

