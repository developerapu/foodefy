import React from "react";
import styled from "styled-components";
import { Para } from "../../../constant/ConstantStyledCom";

const Container = styled.div`
  width: 100%;
  height: 20rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  margin-bottom: 7rem;
  border-radius: 3rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const RatingDiv = styled.div`
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #000;
`;
const Star = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props?.bgColor ? props?.bgColor : "#48c479")};
  border-radius: 50%;
  color: #fff;
`;
const Span = styled.span`
  color: gray;
  font-size: 2.5rem;
  font-weight: 300;
`;

function RestauDetails({ data }) {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla,
    totalRatingsString,
    costForTwoMessage,
    areaName,
    aggregatedDiscountInfoV3,
  } = data;
  return (
    <Container>
      <RatingDiv>
        <Star
          bgColor={
            avgRating >= 4 ? "#48c479" : avgRating < 3 ? "#e1b055" : "#db7c38"
          }
        >
          ★
        </Star>
        <Para fontSize="2.5rem" fontWeight="bold">
          {avgRating}
        </Para>
        <Para
          fontSize="2.5rem"
          fontWeight="bold"
        >{`(${totalRatingsString})`}</Para>
        <Para color="gray">.</Para>
        <Para fontSize="2.5rem" fontWeight="bold">
          {costForTwoMessage}
        </Para>
      </RatingDiv>
      <Para
        padding="0 0 0 2rem"
        color="orange"
        fontSize="2rem"
        textDecoration="underline"
        gap="0.2rem"
      >
        {cuisines?.slice().join(",")}
      </Para>
      <Para padding="0 0 0 2rem" fontSize="2rem" fontWeight="bold">
        Outlet: <Span>{areaName}</Span>
      </Para>
      <Para padding="0 0 0 2rem" fontSize="2rem" fontWeight="bold">
        {sla?.slaString}
      </Para>
    </Container>
  );
}

export default RestauDetails;
