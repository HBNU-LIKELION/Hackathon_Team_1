import React from "react";
import {Link, useLocation} from "react-router-dom";
import styled from "styled-components";
import {getCountryFlag} from "../utils/getCountryFlag";
import {ImArrowRight2} from "react-icons/im";

export default function Detail() {
  
  const location = useLocation();
  const cardData = location.state;
  const originalUrl = cardData.url;
  if (!cardData) {
    return <div>Loading or Error message...</div>; // 혹은 원하는 UI 표시
  }
  
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
  const URLStyle = styled.div`
    color: black;
    position: absolute;
    right: 100px;
    text-underline: none;
  `;
  
  
  return (
    <div>
      
      
      <div>
        <img src={cardData.img} alt="News" style={{width: "100%"}}/>
        <IconWrapper>{getCountryFlag(cardData.country)}</IconWrapper>
      
      </div>
      
      <div>
        <Title>{cardData.title}</Title>
        
        
        <br/>
        {/*<p>내용 : {cardData.content}</p>*/}
        <b style={{fontSize: "20px"}}>
          <hr/>
          <br/>
          {cardData.content.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br/>
              <br/>
            </React.Fragment>
          ))}
        </b>
        
        
        <URLStyle>
          <Link to={originalUrl} style={{textDecoration: "none"}}>
            <ImArrowRight2 size="55"/> <span style={{fontSize: "60px"}}>원문보기</span>
          </Link>
        </URLStyle>
      
      </div>
    </div>
  );
}
