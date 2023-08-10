import React, {useState} from "react";
import globe from "../assets/globe.png";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import Modal from "../components/Modal";
import minimap from "../assets/miniWorldMapImage.png";

export default function Home() {
  
  //TODO: Home에서 Modal.jsx를 렌더링하는 로직 변경 필요
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  const handleModalButtonClick = () => {
    navigate("/worldmap");
  };
  
  const Button = styled.button`

    width: 50%;
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
  
  const Background = styled.div`
    background-image: url(${require("../assets/homeBackgroundImage.png")});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
  `;
  
  return (
    
    <div className="my-component">
      <Background>
        <h1 style={{color: "white", paddingTop: "80px"}}>World Wide Hot Topic!</h1>
        
        <div id="box">
          <h3 style={{color: "white"}}>전 세계 실시간 뉴스들을 한눈에 모아보세요!</h3>
          <img src={globe} width="300px" alt=""/>
        </div>
        
        <Button onClick={() => {
          handleOpenModal();
        }}>
          <b>서비스 소개 보기</b>
        </Button>
        
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onButtonClick={handleModalButtonClick}
          buttonText="더 보기"
        >
          <h2>전 세계의 실시간 핫 토픽을 체험해보세요!</h2>
          <p style={{fontWeight: "bold"}}>NBA는 News Broad Anywhere의 약자로, 전 세계의 실시간 뉴스들을 한 눈에 모아볼 수 있는 비영리 서비스입니다.</p>
          <p style={{fontWeight: "bold"}}>세계적으로 핫한 기사들이 지도에 Pin으로 고정되어 있습니다.</p>
          <p style={{fontWeight: "bold"}}>클릭해서 펼쳐보세요!</p>
          <img src={minimap} alt=""/>
        
        </Modal>
      </Background>
    </div>
  );
}
