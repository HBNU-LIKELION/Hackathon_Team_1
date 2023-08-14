import React, {useEffect, useState} from "react";
import {getNewsData} from "../service/getNewsData";
import styled, {keyframes} from "styled-components";
import worldMapBackgroundImage from "../assets/worldMapBackgroundImage.jpeg";
import worldMapImage from "../assets/worldMapImage.png";
import Card from "../components/Card";
import {coordsData} from "../utils/coordsData";

export default function WorldMapTest() {
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
  
  const totalPageCount = Math.ceil(newsData.length / cardsPerPage);
  
  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage === totalPageCount ? 1 : prevPage + 1));
  };
  
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? totalPageCount : prevPage - 1));
  };
  
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  
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
    }
  }, [newsData]);
  // RedDot 설정 끝
  
  const WorldMapStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
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
  const Flex = styled.div`
    display: flex;
    flex-direction: column;
  `;
  
  return (
    <div>
      
      <WorldMapStyle>
        
        <div style={{marginTop: "700px", marginLeft: "100px"}}>
          <Button onClick={handlePrevPage}>이전</Button>
        </div>
        
        <Flex>
          <WorldMapImageStyle/>
          
          <CardsContainer>
            {newsData.slice(startIndex, endIndex).map((data) => (
              <Card key={data.id} data={data}/>
            ))}
          </CardsContainer>
        
        </Flex>
        
        <div style={{marginTop: "700px", marginRight: "100px"}}>
          <Button onClick={handleNextPage}>다음</Button>
        </div>
      
      </WorldMapStyle>
    </div>
  );
}
