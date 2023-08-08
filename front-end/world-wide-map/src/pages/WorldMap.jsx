import React, {useEffect, useState} from "react";
import Card from "../components/Card";
import worldMap from "../assets/worldMapImage.png";
import styled from "styled-components";
import {getNewsData} from "../service/getNewsData";


export default function WorldMap() {

    const WorldMapStyle = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 100vh;
      background-image: url(${require("../assets/worldMapBackgroundImage.png")});
      background-size: auto;
      background-position: center;
      background-repeat: repeat;
    `;

    const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  `;

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

    return (
        <div>
            <WorldMapStyle>
                <img src={worldMap} alt="" />
            </WorldMapStyle>
            <h1>그 외 기사들</h1>
            <CardsContainer>
                {newsData.slice(startIndex, endIndex).map((data) => (
                    <Card key={data.id} data={data} />
                ))}
            </CardsContainer>
            <button onClick={handlePrevPage}>이전</button>
            <button onClick={handleNextPage}>다음</button>
        </div>
    );
}

