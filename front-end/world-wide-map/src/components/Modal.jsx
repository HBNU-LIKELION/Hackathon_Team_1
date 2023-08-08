import React from "react";
import styled, {keyframes} from "styled-components";
import {Link} from "react-router-dom";

const slideIn = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${slideIn} 0.3s ease-out;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
`;

const Modal = ({isOpen, onClose, children}) => {
  if (!isOpen) return undefined;
  
  return (
    <ModalOverlay>
      <ModalContent>
        {children}
        <Link to="/worldmap">
          <button onClick={onClose}>시작하기</button>
        </Link>
      </ModalContent>
    </ModalOverlay>
  );
};


export default Modal;