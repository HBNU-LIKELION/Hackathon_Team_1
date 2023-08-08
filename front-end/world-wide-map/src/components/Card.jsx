import React, {Fragment} from 'react';
import styled from 'styled-components';
import {truncateTitle} from "../utils/truncateTitle";
import {getCountryFlag} from "../utils/getCountryFlag";

export default function Card({data}) {
    const CardItem = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-width: 400px;
      height: 450px;
      text-align: center;
      border-radius: 7px;
      border: 2px solid black;
      position: relative;
      transition: transform 0.75s;

      &:hover {
        transform: translateY(-20px);
      }
    `;

    const IconWrapper = styled.div`
      position: absolute;
      top: 10px;
      left: 10px;
      z-index: 2;
      font-size: 70px;
      border: none;
    `;

    const CardImage = styled.img`
      width: 100%;
      height: 85%;
      object-fit: cover;
      border-radius: 7px 7px 0 0;
      z-index: 1;
    `;

    const CardContent = styled.div`
      height: 15%;
      padding: 10px;
      font-size: 2.3vw; // 글자 크기를 viewport 너비의 3%로 설정하는 과정
    `;

    //TODO : src의 alt 속성에 들어갈 이미지 필요
    return (
        <Fragment>
            <CardItem key={data.id}>
                <IconWrapper>{getCountryFlag(data.country)}</IconWrapper>
                <CardImage src={data.img} alt="추후 수정 필요"/>
                <CardContent>
                    {truncateTitle(data.title)}
                    <br />
                    <span style={{ fontSize: "17px" }}>국가 : {data.country}</span>
                </CardContent>

            </CardItem>
        </Fragment>
    );
}