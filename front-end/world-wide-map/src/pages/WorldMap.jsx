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

    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getNewsData();
            setNewsData(data);
        }
        fetchData();
    }, []);


    return (
        <div>
            <WorldMapStyle>
                <img src={worldMap} alt=""/>
            </WorldMapStyle>
            <h1>그 외 기사들</h1>
            <div>
                {newsData.length > 0 && <Card data={newsData[0]} />}
            </div>
        </div>
    );
}

