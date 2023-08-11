import "./App.css";
import Home from "./pages/Home";
import WorldMap from "./pages/WorldMap";
import {Route, Routes} from "react-router-dom";
import Modal from "./components/Modal";
import React from "react";
import Detail from "./components/Detail";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="worldmap" element={<WorldMap/>}></Route>
        <Route path="modal" element={<Modal/>}></Route>
        <Route path="/detail/:id" element={<Detail/>}></Route>
      </Routes>
    </div>
  );
}

