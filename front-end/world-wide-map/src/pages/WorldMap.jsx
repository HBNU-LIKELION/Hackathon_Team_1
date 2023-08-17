import React, {useEffect, useState} from "react";
import styled, {keyframes} from "styled-components";
import Card from "../components/Card";
import worldMapBackgroundImage from "../assets/worldMapBackgroundImage.jpeg";
import worldMapImage from "../assets/worldMapImage.png";
import {getNewsData} from "../service/getNewsData";
import {getCountryFlag} from "../utils/getCountryFlag";
import {coordsData} from "../utils/coordsData";
import {truncateTitle} from "../utils/truncateTitle";

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

export default function WorldMap() {
  const [newsData, setNewsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredDotId, setHoveredDotId] = useState(null);
  const [redDots, setRedDots] = useState([]);
  const [shuffledNewsData, setShuffledNewsData] = useState([]);

  const cardsPerPage = 6;
  
  useEffect(() => {
    async function fetchData() {
      const data = await getNewsData();
      setNewsData(data);
    }
    
    fetchData();
  }, []);
  
  // RedDot 설정 시작
  useEffect(() => {
    if (newsData.length > 0) {
      const sortedData = newsData.slice().sort((a, b) => b.visit_count - a.visit_count);
      const top3 = sortedData.slice(0, 3);
      const dotData = [];
      
      for (let index = top3.length - 1; index >= 0; index--) {
        const item = top3[index];
        dotData.push({
          id: item.id,
          top: coordsData[item.id - 1].top,
          left: coordsData[item.id - 1].left,
          zIndex: item.id,
          title: item.title,
          country: item.country,
          size: item.visit_count * 1.8,
          maxSize: (top3.length - index) * 20,
        });
      }
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

  useEffect(() => {
    if (newsData.length > 0) {
      const shuffledData = shuffleArray(newsData);
      setShuffledNewsData(shuffledData);
    }
  }, [newsData]);

  function shuffleArray(array) {
    const shuffledArray = array.slice(); // 배열 복사본 생성
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // 값 교환
    }
    return shuffledArray;
  }


  const WorldMapStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6000px;
    height: 2000px;
    background-image: url(${worldMapBackgroundImage});
    background-size: auto;
    background-position: center;
    background-repeat: repeat;
  `;
  
  const WorldMapImageStyle = styled.div`
    position: relative;
    width: 1200px;
    bottom: 50px;
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
    animation: ${props => (props.isHovered ? "none" : blinkAnimation)} 2s infinite; /* hover 상태일 때는 애니메이션 끄기 */
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    z-index: ${(props) => props.zIndex};
    cursor: pointer;

    &::after {
      content: "";
      background-image: ${(props) => `url(${getCountryFlag(props.country)})`};
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: center;
      position: absolute;
      bottom: 70%;
      left: 50%;
      transform: translateX(-50%);
      padding: 30px;
      border-radius: 4px;
      white-space: nowrap;
    }

    &:hover {
      cursor: zoom-in;
    }

    &:hover::after {
      content: "${(props) => truncateTitle(props.title)}";
      background-image: ${(props) => `url(${getCountryFlag(props.country)})`};
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      position: absolute;
      bottom: 110%;
      left: 50%;
      transform: translateX(-50% -50%);
      background-color: rgba(0, 0, 0, 0.8);
      color: white;
      font-weight: normal;
      padding: 8px;
      border-radius: 4px;
      font-size: 25px;
      white-space: nowrap;
    }
  `;
  
  const Button = styled.button`
    width: 75px;
    padding: 13px;
    display: block;
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
  
  const CardsContainer = styled.div`
    display: inline-grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 20px;
    column-gap: 100px;
  `;
  
  const FlexWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;
  
  const Flex = styled.div`
    display: flex;
    flex-direction: column;
  `;
  
  const Footer = styled.footer`
    width: 6000px;
    height: 100px;
    background-color: #2F4282;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    bottom: 0;
    left: 0;
  `;
  
  // const [footerOpacity, setFooterOpacity] = useState(0); // 초기값 0
  
  // useEffect(() => {
  //   const handleScroll = () => {
  //     // 스크롤 위치에 따라 투명도 조절
  //     const scrollPosition = window.scrollY;
  //     const maxScroll = document.body.clientHeight - window.innerHeight;
  //     const opacity = scrollPosition / maxScroll;
  //     setFooterOpacity(opacity);
  //   };
  //
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  
  return (
    <div>
      <FlexWrapper>
        
        <WorldMapStyle>
          
          <div style={{marginTop: "700px", marginLeft: "100px"}}>
            <Button onClick={handlePrevPage}>이전</Button>
          </div>
          
          <Flex>
            <WorldMapImageStyle>
              {redDots.map((circle) => (
                <RedDot
                  key={circle.id}
                  top={circle.top}
                  left={circle.left}
                  zIndex={circle.zIndex}
                  size={circle.size}
                  title={circle.title}
                  country={circle.country}
                  maxSize={circle.maxSize}
                  isHovered={hoveredDotId === circle.id} // hoveredDotId는 state로 관리되는 값
                  onMouseEnter={() => setHoveredDotId(circle.id)}
                  onMouseLeave={() => setHoveredDotId(null)}
                />
              ))}
            </WorldMapImageStyle>
            
            {/*TODO: ?. 옵셔널 체이닝 연산자 사용 시 정상 동작 -> 왜 그런지?*/}
            {/*<h1>최신 업데이트 : {newsData[1].created_at} </h1>*/}
            <hr style={{marginBottom: "30px"}}/>
            <h1 style={{color: "white"}}>최신 업데이트 : {newsData[1]?.created_at.slice(0, 10)} </h1>
            <br/>
            <br/>
            
            <CardsContainer>
              {shuffledNewsData.slice(startIndex, endIndex).map((data) => (
                <Card key={data.id} data={data}/>
              ))}
            </CardsContainer>
          
          </Flex>
          
          <div style={{marginTop: "700px", marginRight: "100px"}}>
            <Button onClick={handleNextPage}>다음</Button>
          </div>
        
        </WorldMapStyle>
        
        <Footer>
          <p>© 2023 NewsBroadAnywhere. All rights reserved.</p><br/>
          <p>Produced by. Yeachan Juno Jaeyoung Juchan</p>
        </Footer>
        
      </FlexWrapper>
  
     
      
    </div>
  );
}
