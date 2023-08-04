import React from "react";
import earth from "../assets/지구본1.png";
import earthBackground from "../assets/지구배경.png";

import "./Home.css";
import styled from "styled-components";
import {Link} from "react-router-dom";


export default function Home() {
  const Button = styled.button`
    font-family: 'PyeongChangPeace-Bold';
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
  
  return (
    
    // style={{
    // //   backgroundImage : `url(${earthBackground})`,
    // //   backgroundPosition: 'center',
    // //   backgroundRepeat: 'no-repeat',
    // //   backgroundSize: 'cover',
    // //
    // // }}
    
    <div className="my-component">
      <br/>
      <br/>
      <br/>
      <br/>
      <h1 style={{color: "white"}}>World Wide Hot Topic!</h1>
      
      <div id="box">
        
        <h3 style={{color: "white"}}>전 세계 실시간 뉴스들을 한눈에 모아보세요!</h3>
        
        <img src={earth} width="300px" className="earth"/>
      
      </div>
      <Link to="/worldmap">
        <Button>
          <b>시작하기</b>
        </Button>
      </Link>
    </div>
  
  );
}
