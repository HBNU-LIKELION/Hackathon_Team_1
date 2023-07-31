import React, {Fragment} from 'react';
import styled from 'styled-components';

export default function Card({data, itemStyle, truncateTitle, getCountryFlag}) {
  const CardContainer = styled.div`
    margin-top: 90px;
    margin-left: 80px;
    display: grid;
    grid-template-columns: 0.75fr 0.75fr 0.75fr;
    gap: 5px 5px;
  `;

  const CardItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 350px;
    text-align: center;
    border-radius: 7px;
    border: 2px solid black;
    position: relative;

    &:hover {
      transform: translateY(-20px);
      transition: 0.75s;
    }
  `;

  const CardImage = styled.img`
    width: 100%;
    height: 50%;
    object-fit: cover;
    border-radius: 7px 7px 0 0;
  `;

  const CardContent = styled.div`
    height: 50%;
    padding: 10px;
  `;

  return (

    <Fragment>
      <h1>그 외 기사들</h1>
      <CardContainer>
        {data.map((item) => (
          <CardItem key={item.id} style={itemStyle}>
            <CardImage src={item.img} alt=""/>
            <CardContent>
              <h2>
                {getCountryFlag(item.country)} {truncateTitle(item.title, 10)}
              </h2>
              <p>Country: {item.country}</p>
            </CardContent>
          </CardItem>
        ))}
      </CardContainer>
    </Fragment>
  );

}
