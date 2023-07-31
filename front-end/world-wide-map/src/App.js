import React, {useEffect, useState} from 'react';
import './App.css';
import Introduce from './components/Introduce';
import WorldMap from './components/WorldMap';
import {Route, Routes} from 'react-router-dom';
import {truncateTitle} from './service/textService';
import MapContainer from './components/MapContainer';
import TalkBalloon from './components/TalkBalloon';
import TextContent from './components/TextContent';
import {getData} from './service/apiService';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const newData = await getData(); // 데이터 가져오는 비동기 처리
      setData(newData);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {/*<Introduce/>*/}
      {/*<WorldMap/>*/}
      <MapContainer>
        <TalkBalloon/>
        <TextContent>{truncateTitle(data, 6)}</TextContent>
      </MapContainer>
      <Routes>
        <Route path="/" element={<Introduce/>}></Route>
        <Route path="worldmap" element={<WorldMap/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
