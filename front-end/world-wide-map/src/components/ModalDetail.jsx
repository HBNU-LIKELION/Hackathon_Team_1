import React from "react";
import Modal from "./Modal";
import Detail from "./Detail";
import styled from "styled-components";


const CenteredModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  //background-color: rgba(0, 0, 0, 0.5); /* 반투명한 배경 설정 */
  z-index: 10; /* 원하는 z-index 값으로 설정하세요 */
`;
export default function ModalDetail({isOpen, onClose, data}) {
  
  
  return (
    <Modal isOpen={isOpen} onClose={onClose} onButtonClick={onClose} buttonText="닫기">
      
      {isOpen && (
        <CenteredModal>
          <img src={data.img} alt="News" style={{width: "50%"}}/>
          <h2>{data.title}</h2>
          <p>{data.content}</p>
          <a href={data.url} target="_blank" rel="noopener noreferrer">원문 보기</a>
        </CenteredModal>
      )
      }
    
    </Modal>
  );
}
