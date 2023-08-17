import React from "react";
import {Link, useLocation} from "react-router-dom";
import styled from "styled-components";
import {getCountryFlag} from "../utils/getCountryFlag";

export default function Detail() {
  
  const location = useLocation();
  const cardData = location.state;
  const originalUrl = cardData.url;
  const contentLines = cardData.content.split(/\d+\./).filter(line => line.trim() !== "");
  
  const formattedContent = contentLines.map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br/>
      <br/>
    </React.Fragment>
  ));
  
  const Title = styled.div`
    margin-top: 20px;
    font-size: 36px;
    font-style: italic;
  `;
  
  const IconWrapper = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 2;
    font-size: 100px;
    border: none;
  `;
  
  const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 200px;
    flex-direction: column;
  `;
  
  const Button = styled.button`
    width: 1000px;
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
    <div>
      <div>
        
        <img src={cardData.img} alt="News" style={{width: "70%", borderRadius: "10px", marginTop: "30px"}}/>
        
        
        <IconWrapper><img src={getCountryFlag(cardData.country)}/></IconWrapper>
      
      </div>
      <div>
        
        <span style={{fontSize: "30px", fontWeight: "bold"}}>이 기사의 현재 조회 수 : {cardData.visit_count}</span>
        <Title>{cardData.title}</Title>
        
        <br/>
        <Flex>
          
          <b style={{fontSize: "20px"}}>
            <hr/>
            <br/>
            {formattedContent}
          </b>
          
          
          <Button>
            <Link to={originalUrl} style={{textDecoration: "none"}}>
              <b style={{fontSize: "60px", color: "white"}}> 📄Click to Original News !📄</b>
            </Link>
          </Button>
          <br/>
        </Flex>
      
      </div>
    </div>
  );
  
}
