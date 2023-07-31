import React from 'react';
import styled from 'styled-components';

// 아래 선언된 Container 부분의 css는 worldmap.css와 중복 선언되어있으므로
// 추후 수정 작업이 필요해보임

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/지도.png");
  background-size: auto;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;

const MapContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default MapContainer;
