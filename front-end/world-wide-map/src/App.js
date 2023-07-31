import './App.css';
import Introduce from './components/Introduce';
import WorldMap from './components/WorldMap';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Introduce/>}></Route>
        <Route path="worldmap" element={<WorldMap/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
