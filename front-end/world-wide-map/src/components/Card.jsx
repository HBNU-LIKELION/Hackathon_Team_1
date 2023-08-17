import React, {Fragment} from "react";
import styled from "styled-components";
import {truncateTitle} from "../utils/truncateTitle";
import {getCountryFlag} from "../utils/getCountryFlag";
import {useNavigate} from "react-router-dom";
import {postRequest} from "../service/postRequest";

export default function Card({data}) {
  
  const navigate = useNavigate();

  const handleCardClick = async () => {
    try {
      await postRequest(data);

      navigate(`/detail/${data.id}`, { state: data });

    } catch (error) {
      console.error('POST 실패:', error);
    }
  };

  const CardItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 360px;
    height: 350px;
    text-align: center;
    border-radius: 7px;
    position: relative;
    transition: transform 0.75s;
    font-size: 17px;
    background-color: white;

    &:hover {
      transform: translateY(-10px);
    }
  `;
  
  const IconWrapper = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 2;
  `;
  
  const CardImage = styled.img`
    width: 100%;
    height: 85%;
    object-fit: cover;
    border-radius: 7px 7px 0 0;
    z-index: 1;
  `;
  
  const CardContent = styled.div`
    height: 20%;
    padding: 10px;
  `;
  
  const Title = styled.div`
    margin-bottom: 10px;
    font-size: 20px;
  `;
  
  const Country = styled.span`
    font-size: 13px; // 고정된 글자 크기 설정
  `;
  
  return (
    <Fragment>
      <CardItem key={data.id} onClick = {handleCardClick}>
        <CardImage src={data.img}/>
        <IconWrapper><img src={getCountryFlag(data.country)}/></IconWrapper>
        <CardContent>
          <Title>{truncateTitle(data.title)}</Title>
          <Country>국가 : {data.country}</Country>
        </CardContent>
      </CardItem>
    </Fragment>
  );
}
