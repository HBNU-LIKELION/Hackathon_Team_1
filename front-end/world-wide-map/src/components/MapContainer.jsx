import React from 'react';
import styled from 'styled-components';

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
