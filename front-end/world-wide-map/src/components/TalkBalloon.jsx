import React from 'react';
import styled from 'styled-components';
import talkBalloon from '../assets/말풍선4.png';

const Img = styled.img`
  width: 150px;
  position: absolute;
  top: 100px;
  left: 202px;
  z-index: 2;
  transition: transform 0.3s ease;
`;

const TalkBalloon = () => {
  return <Img src={talkBalloon} alt="" />;
};

export default TalkBalloon;
