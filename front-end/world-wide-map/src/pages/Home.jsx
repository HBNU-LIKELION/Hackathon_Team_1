import React, {useState} from "react";
import globe from "../assets/globe.png";
import styled, {keyframes} from "styled-components";
import {useNavigate} from "react-router-dom";
import Modal from "../components/Modal";
import minimap from "../assets/miniWorldMapImage.png";



const rotate = keyframes` // 애니메이션은 컴포넌트 위에 선언
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;
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

    width: 30%;
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
        <p style={{color: "white", paddingTop: "80px", fontStyle:"italic",fontSize:"48px"}}><font style={{color:"#66CCC5"}}>N</font>ews <font style={{color:"#66CCC5"}}>B</font>road <font style={{color:"#66CCC5"}}>A</font>nywhere !</p>
        
        <div id="box">
          <RotatingImage src={globe} alt="Rotating Globe" />
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
          buttonText="더 보기"
        >
          <p style={{fontWeight: "bold"}}>세계지도의 빨간 점은 조회수 Top 3 지역을 보여줍니다. </p>
          <p style={{fontWeight: "bold"}}>마우스를 올려 펼쳐보세요!</p>
          <img src={minimap} alt=""/>
        </Modal>
      </Background>
    </div>
  );
}
