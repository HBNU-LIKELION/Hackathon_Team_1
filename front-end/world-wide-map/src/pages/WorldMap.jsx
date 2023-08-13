import React, {useEffect, useState} from "react";
import styled, {keyframes} from "styled-components";
import Card from "../components/Card";
import worldMapImage from "../assets/worldMapImage.png";
import worldMapBackgroundImage from "../assets/worldMapBackgroundImage.jpeg";
import {getNewsData} from "../service/getNewsData";
import {coordsData} from "../utils/coordsData";

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

// fadeIn 애니메이션 정의
const fadeIn = keyframes`
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
  const cardsPerPage = 3;
  
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
    display: inline-grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 20px;
    column-gap: 100px;
  
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
  
  const Button = styled.button`

    width: 75px;
    padding: 13px;
    display: inline;
    border: none;
    background-color: #66CCC5;
    color: white;
    text-align: center;
    cursor: pointer;
    border-radius: 7px;
    font-size: 20px;
    margin: 0px 35px;


    &:hover {
      background-color: #8de3dd;
    }
  `;
  const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 700px;
  `;
  
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
      </FadeInWrapper>
      <br/>
      
      {/*TODO: ?. 옵셔널 체이닝 연산자 사용 시 정상 동작 -> 왜 그런지?*/}
      {/*<h1>{newsData[1].created_at}</h1>*/}
      
      <h1>최신 업데이트 : {newsData[1]?.created_at} </h1>
      <Flex>
        <div>
          <Button onClick={handlePrevPage}>이전</Button>
        </div>
        <CardsContainer>
          {newsData.slice(startIndex, endIndex).map((data) => (
            <Card key={data.id} data={data}/>
          ))}
        </CardsContainer>
        <div>
          <Button onClick={handleNextPage}>다음</Button>
        </div>
      </Flex>
    </div>
  );
}
