import React, {useState} from "react";
import globe from "../assets/globe.png";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Modal from "../components/Modal";
import WorldMap from "./WorldMap";


export default function Home() {
  //Modal 관련 코드 start
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  //Modal 관련 코드 end
  
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
    height: 100vh; /* 화면 높이만큼 이미지를 채우려면 필요한 스타일입니다. */
  `;
  
  return (
    
    
    <div className="my-component">
      <Background>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1 style={{color: "white"}}>World Wide Hot Topic!</h1>
        
        <div id="box">
          
          <h3 style={{color: "white"}}>전 세계 실시간 뉴스들을 한눈에 모아보세요!</h3>
          
          <img src={globe} width="300px" alt=""/>
        </div>
        
        
        <Button onClick={() => {
          handleOpenModal();
        }}>
          <b>서비스 소개 보기</b>
        </Button>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <h2>전 세계의 실시간 핫 토픽을 체험해보세요!</h2>
          <p>소개멘트 소개멘트 소개멘트 소개멘트 소개멘트 소개멘트</p>
        </Modal>
      
      </Background>
    
    </div>
  );
}
