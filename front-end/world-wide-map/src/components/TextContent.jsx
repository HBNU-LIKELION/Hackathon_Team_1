import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 130px;
  left: 252px;
  z-index: 2;
  transform: translate(-50%, -50%);
  transition: transform 0.3s ease;
`;

const TextContent = ({ children }) => {
  return <Container>{children}</Container>;
};

export default TextContent;
