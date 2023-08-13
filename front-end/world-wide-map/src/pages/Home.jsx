import React, {useState} from "react";
import globe from "../assets/globe.png";
import styled, {keyframes} from "styled-components";
import {useNavigate} from "react-router-dom";
import Modal from "../components/Modal";
import minimap from "../assets/miniWorldMapImage.png";
import miniCardImage from "../assets/miniCardImage.png"
import FirstModal from "../components/FirstModal";
import SecondModal from "../components/SecondModal";


const rotate = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;
export default function Home() {
  
  const navigate = useNavigate();
  
  //TODO: Home에서 Modal.jsx를 렌더링하는 로직 변경 필요
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleModalButtonClick = () => {
    setIsModalOpen2(true);
  };
  
  
  //두번째 모달을 위한 코드
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const handleCloseModal2 = () => {
    setIsModalOpen2(false);
  };
  const handleModalButtonClick2 = () => {
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
  
  const RotatingImage = styled.img` // rotate 애니메이션을 적용할 이미지 컴포넌트
    animation: ${rotate} 4s linear infinite; // 애니메이션 속성 설정
    width: 300px;
  `;
  
  
  return (
    
    <div className="my-component">
      
      <Background>
        <div id="box">
          <p style={{color: "white", paddingTop: "80px", fontStyle: "italic", fontSize: "48px"}}><font
            style={{color: "#66CCC5"}}>N</font>ews <font style={{color: "#66CCC5"}}>B</font>road <font
            style={{color: "#66CCC5"}}>A</font>nywhere !</p>
          <RotatingImage src={globe} alt="Rotating Globe"/>
        </div>
        
        <Button onClick={() => {
          handleOpenModal();
        }}>
          <b>How to use?</b>
        </Button>
        
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onButtonClick={handleModalButtonClick}
          buttonText="다음으로"
        >
          <FirstModal/>
        </Modal>
        
        <Modal
          isOpen={isModalOpen2}
          onClose={handleCloseModal2}
          onButtonClick={handleModalButtonClick2}
          buttonText="시작하기"
        >
          <SecondModal/>
        </Modal>
      </Background>
    </div>
  );
}
