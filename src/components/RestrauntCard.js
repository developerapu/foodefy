import React from "react";
import { IMG_CDN } from "../config";
import styled from "styled-components";

const Container = styled.div`
  width: 19vw;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  //padding: 3rem;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    gap: 3rem;
  }
`;
const FoodImg = styled.img`
  width: 100%;
  @media (max-width: 768px) {
    width: 30%;
    border-radius: 2rem;
  }
`;
const Name = styled.h2`
  font-size: 2.2rem;
  font-weight: 500;
  font-family: ProximaNova, arial, Helvetica Neue, sans-serif;
  padding: 1rem 0;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;
const Cusines = styled.p`
  font-size: 1.5rem;
  color: #686b78;
  padding-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;
const Unorder = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
`;
const List = styled.li`
  list-style: none;
  font-size: 1.5rem;
  color: #000;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;
const Span = styled.span`
  background: ${(props) => (props.bgColor ? props.bgColor : "#48c479")};
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
  }
`;
const DetailDiv = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;

// function RestrauntCard({cloudinaryImageId, name, cuisines, avgRating, slaString, costForTwoString,aggregatedDiscountInfo}) {
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
  //console.log(cloudinaryImageId, name, cuisines, avgRating, slaString, costForTwoString,aggregatedDiscountInfo);
  return (
    <Container>
      <FoodImg src={IMG_CDN + cloudinaryImageId} alt="" />
      <DetailDiv>
        <Name>{name}</Name>
        <Cusines>{cuisines?.slice(0,4)?.join(", ")}{cuisines?.length >=4 ? "...." : "" }</Cusines>
        <Unorder>
          <List>
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
          <List>{sla?.slaString}</List>
          <List>{costForTwo}</List>
        </Unorder>
        <DeliveryCost>
          {aggregatedDiscountInfoV3?.header}
        </DeliveryCost>
      </DetailDiv>
    </Container>
  );
}

export default RestrauntCard;
