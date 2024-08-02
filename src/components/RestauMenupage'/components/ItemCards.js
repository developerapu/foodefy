import React from "react";
import styled from "styled-components";
import { Button } from "../../../constant/ConstantStyledCom";
import { IMG_CDN } from "../../../config";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid #d3d3d3;
  padding: 5rem 0;
`;
const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-right: 15rem;
  @media (max-width: 768px) {
    padding-right: 5rem;
  }
`;
const ButtonDiv = styled.div`
  margin-top: -4rem;
`;
const ImageDiv = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ItemImg = styled.img`
  width: 20rem;
  height: 20rem;
  border-radius: 3rem;
  object-fit: cover;
`;
const NamePara = styled.p`
  font-size: 3rem;
  font-weight: 600;
  color: #000;
`;

const Para = styled.p`
  font-size: 2rem;
  color: #000;
  font-weight: 400;
`;
const Star = styled.div`
  width: 2rem;
  height: 2rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props?.color ? props?.color : "#48c479")};
  border-radius: 50%;
  color: #fff;
`;
const RatingDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

function ItemCards({ data }) {
  const { name, price, defaultPrice, description, imageId, ratings } =
    data?.card?.info;
  console.log(data, description)
  return (
    <Container>
      <DescriptionDiv>
        <NamePara>{name}</NamePara>
        <Para>₹{defaultPrice ? defaultPrice / 100 : price / 100}</Para>
        {ratings?.aggregatedRating?.rating ? (
          <RatingDiv>
            <Star
              color={
                ratings?.aggregatedRating?.rating >= 4
                  ? "#48c479"
                  : ratings?.aggregatedRating?.rating < 3
                  ? "#e1b055"
                  : "#db7c38"
              }
            >
              ★
            </Star>
            <Para>
              {ratings?.aggregatedRating?.rating} (
              {ratings?.aggregatedRating?.ratingCountV2})
            </Para>
          </RatingDiv>
        ) : null}
        <Para>{description}</Para>
      </DescriptionDiv>
      <ImageDiv>
        {imageId ? <ItemImg src={IMG_CDN + imageId} alt="itemImage" /> : null}
        <ButtonDiv>
          <Button
            opacity="1"
            width="10rem"
            backgroun="#fff"
            color="green"
            fontSize="2rem"
            borderRadius="1rem"
            boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px"
          >
            ADD
          </Button>
        </ButtonDiv>
      </ImageDiv>
    </Container>
  );
}

export default ItemCards;
