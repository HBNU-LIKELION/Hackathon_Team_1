import React, {useEffect, useState} from "react";
import styled, {keyframes} from "styled-components";
import Card from "../components/Card";
import worldMapImage from "../assets/worldMapImage.png";
import worldMapBackgroundImage from "../assets/worldMapBackgroundImage.jpeg";
import {getNewsData} from "../service/getNewsData";
import {coordsData} from "../utils/coordsData";
import ModalDetail from "../components/ModalDetail";

// Notice: 이 애니메이션 정의는 컴포넌트 밖에 정의해야함.
const blinkAnimation = keyframes`
  0%, 50% {
    opacity: 1;
  }
  25%, 75% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const fadeIn = keyframes` // fadeIn 애니메이션 정의
                            from {
                              opacity: 0;
                            }
                            to {
                              opacity: 1;
                            }
`;


export default function WorldMap() {
  const [newsData, setNewsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;
  
  useEffect(() => {
    async function fetchData() {
      const data = await getNewsData();
      setNewsData(data);
    }
    
    fetchData();
  }, []);
  
  // RedDot 설정 시작
  const [redDots, setRedDots] = useState([]);
  
  useEffect(() => {
    if (newsData.length > 0) {
      const sortedData = newsData.slice().sort((a, b) => b.visit_count - a.visit_count);
      const top3 = sortedData.slice(0, 3);
      const dotData = top3.map((item) => ({
        id: item.id,
        top: coordsData[item.id - 1].top,
        left: coordsData[item.id - 1].left,
        zIndex: item.id,
        size: item.visit_count * 2,
      }));
      setRedDots(dotData);
    }
  }, [newsData]);
  // RedDot 설정 끝
  
  // 페이지 핸들링 과정 시작
  const totalPageCount = Math.ceil(newsData.length / cardsPerPage);
  
  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage === totalPageCount ? 1 : prevPage + 1));
  };
  
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? totalPageCount : prevPage - 1));
  };
  
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  // 페이징 핸들링 과정 끝
  
  const WorldMapStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-image: url(${worldMapBackgroundImage});
    background-size: auto;
    background-position: center;
    background-repeat: repeat;
  `;
  
  const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  `;
  
  const WorldMapImageStyle = styled.div`
    position: relative;
    width: 1200px;
    height: 674px;
    background-image: url(${worldMapImage});
    background-size: cover;
    background-position: center;
  `;
  const RedDot = styled.div`
    position: absolute;
    width: ${(props) => Math.min(props.size, props.maxSize)}px; // 최대 크기 제한
    height: ${(props) => Math.min(props.size, props.maxSize)}px; // 최대 크기 제한
    background-color: red;
    border-radius: 50%;
    animation: ${blinkAnimation} 2s infinite;
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    z-index: ${(props) => props.zIndex};
  `;
  
  const FadeInWrapper = styled.div`
    animation: ${fadeIn} 1s ease-in-out;
  `;
  
  const [modalOpen, setModalOpen] = useState(false);
  
  const closeModal = () => {
    setModalOpen(false);
  };
  
  const openModal = () => {
    setModalOpen(true);
  };
  
  
  
  return (
    <div>
      
      <FadeInWrapper>
        <WorldMapStyle>
          <WorldMapImageStyle>
            {redDots.map((circle) => (
              <RedDot
                key={circle.id}
                top={circle.top}
                left={circle.left}
                zIndex={circle.zIndex}
                size={circle.size}
                maxSize={30}
              />
            ))}
        
        
      </WorldMapImageStyle>
        </WorldMapStyle>
        <div>
          <br/>
          <br/>
          <CardsContainer>
            {newsData.slice(startIndex, endIndex).map((data) => (
              <Card key={data.id} data={data} onClick={openModal}/>
            ))}
          </CardsContainer>
          <button onClick={handlePrevPage}>이전</button>
          <button onClick={handleNextPage}>다음</button>
          {/*<ModalDetail isOpen={modalOpen} onClose={closeModal} data={newsData} />*/}
        </div>
      </FadeInWrapper>
      
    </div>
  );
}
