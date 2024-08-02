import React from "react";
import { IMG_CDN } from "../config";
import styled from "styled-components";

const Container = styled.div`
  width: 36.5rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform .2s; 
  padding: 2rem;
  gap: 2rem;
  &:hover {
    transform: scale(0.97);
  }
  @media (max-width: 768px) {
    width: ${(props)=> (props.direction == "column" ? "30rem" : "100%")};
    flex-direction: ${(props)=> (props.direction ? props.direction : "row")};
    gap: 3rem;
  }
`;
const FoodImg = styled.img`
  width: 33rem;
  height: 23rem;
  object-fit: cover;
  border-radius: 2rem;
  @media (max-width: 768px) {
    width: ${(props)=> (props.direction == "column" ? "20rem" : "15rem")};
    height: ${(props)=> (props.direction == "column" ? "13rem" : "20rem")};
  }
`;
const Name = styled.h2`
  font-size: 2.2rem;
  font-weight: 500;
  font-family: ProximaNova, arial, Helvetica Neue, sans-serif;
  padding: 1rem 0;
  color: #000;
  @media (max-width: 768px) {
    font-size: ${(props)=> (props.direction == "column" ? "2rem" : "3rem")};
  }
`;
const Cusines = styled.p`
  font-size: 1.5rem;
  color: #686b78;
  padding-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: ${(props)=> (props.direction == "column" ? "2rem" : "3rem")};
  }
`;
const Unorder = styled.ul`
  display: ${(props)=> (props?.direction ? "none" : "flex")};
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
  gap: 1rem;
  @media (max-width: 768px) {
    display: ${(props)=> (props?.show ? props?.show : "none")};
    //flex-direction: ${(props)=> props?.direction == "column" ? props?.direction : "row"};
    align-items: ${(props)=> props?.direction == "column" ? "flex-start" : "center"};
  }
`;
const List = styled.li`
  list-style: none;
  font-size: 1.5rem;
  color: #000;
  @media (max-width: 768px) {
    font-size: ${(props)=> (props.direction == "column" ? "2rem" : "3rem")};
  }
`;
const Span = styled.span`
  background: ${(props) => (props?.bgColor ? props?.bgColor : "#48c479")};
  padding: 0.5rem;
  color: #fff;
`;
const DeliveryCost = styled.h3`
  border-top: 1px solid #e9e9eb;
  font-size: 2rem;
  padding-top: 2rem;
  color: #8a584b;
  font-weight: 400;
  @media (max-width: 768px) {
    border: none;
    display: none;
  }
`;
const DetailDiv = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;

function RestrauntCard(props) {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla,
    costForTwo,
    aggregatedDiscountInfoV3,
  } = props.restaurant;
  const direction = props?.styleDirection;
  return (
    <Container className="main" direction={direction}>
      <FoodImg src={IMG_CDN + cloudinaryImageId} alt="" direction={direction}/>
      <DetailDiv>
        <Name direction={direction}>{name?.length >= 32 ? name?.slice(0,28)+"..." : name}</Name>
        <Unorder direction={direction} show={direction == "column" ? "flex" : "none"}>
          <List direction={direction}>
            <Span
              bgColor={
                avgRating >= 4
                  ? "#48c479"
                  : avgRating < 3
                  ? "#e1b055"
                  : "#db7c38"
              }
            >
              ☆ {avgRating}
            </Span>
          </List>
          <List direction={direction}>{sla?.slaString}</List>
          </Unorder>
        <Cusines direction={direction}>{cuisines?.slice(0,4)?.join(", ")}{cuisines?.length >=4 ? "...." : "" }</Cusines>
        <Unorder show={direction == "column" ? "none" : "flex"}>
          <List >
            <Span
              bgColor={
                avgRating >= 4
                  ? "#48c479"
                  : avgRating < 3
                  ? "#e1b055"
                  : "#db7c38"
              }
            >
              ☆ {avgRating}
            </Span>
          </List>
          <List >{sla?.slaString}</List>
          <List >{costForTwo}</List>
        </Unorder>
        <DeliveryCost>
          {aggregatedDiscountInfoV3?.header}
        </DeliveryCost>
      </DetailDiv>
    </Container>
  );
}

export default RestrauntCard;
