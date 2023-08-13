import React from "react";
import styled, {keyframes} from "styled-components";

export default function Modal({isOpen, onClose, onButtonClick, buttonText, children}) {
  const handleButtonClick = () => {
    onClose();
    onButtonClick();
  };
  
  if (!isOpen) {
    return undefined;
  }
  
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
  const ModalButton = styled.button`
    width: 87.5%;
    padding: 13px;
    border: none;
    background-color: #66CCC5;
    color: white;
    text-align: center;
    cursor: pointer;
    border-radius: 7px;
    font-size: 20px;

    &:hover {
      background-color: #8de3dd;
    }
  `;
  
  return (
    <ModalOverlay>
      <ModalContent>
        {children}
        <ModalButton onClick={handleButtonClick}>{buttonText}</ModalButton>
      </ModalContent>
    </ModalOverlay>
  );
};
