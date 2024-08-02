import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DownArrow from "../../../assets/images/DownArrow.svg";
import ScrollDiv from "../../ScrollDiv/ScrollDiv";
import ItemCards from "./ItemCards";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 2rem;
  margin: 2rem 0;
  border-radius: 2rem;
  @media (max-width: 768px) {
    gap: 6rem;
    padding: 5rem;
  }
`;
const TitleDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const Img = styled.img`
  width: 3.5rem;
  transition: all 0.4s ease;
  transform: ${(props) => (props.showItems ? "rotate(180deg)" : "null")};
  @media (max-width: 768px) {
    width: 6rem;
  }
`;

const Title = styled.h3`
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  font-weight: 600;
  line-height: 22px;
  color: #180435;
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;
const Button = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 2rem;
  gap: 2rem;
  padding-left: 2rem;
  cursor: pointer;
  font-weight: 500;
  //line-height: 22px;
  color: #180435;
  transition: all 0.2s ease;
  @media (max-width: 768px) {
    width: 5rem;
    flex-direction: column;
    font-size: 3rem;
  }
  &:hover {
    scale: 1.1;
  }
`;

function FoodItemDiv({ data }) {
  const [showItems, setShowItems] = useState(false);
  const [itemData, setItemData] = useState([]);

  // useEffect(()=> {
  //     filterItems()
  // },[]);

  // const filterItems = () => {
  //     console.log(data)
  //     const filterArr = [];
  //     filterArr?.push(data?.filter(d => d?.card?.card?.itemCards !== undefined));
  //     console.log(filterArr);
  //     if ("itemCards" in data?.card?.card) {
  //         filterArr.push(templatedata[i]);
  //       }
  // }
  console.log(data?.card);
  return (
    <Container>
      {data?.card?.card?.carousel ? (
        <ScrollDiv
          data={data?.card?.card?.carousel}
          type="Top Picks"
          title="Top Picks"
        />
      ) : null}
      {data?.card?.card?.itemCards ? (
        <Box>
          <TitleDiv onClick={() => setShowItems(!showItems)}>
            <Title>{data?.card?.card?.title}</Title>
            <Button>
              <Img src={DownArrow} alt="" showItems={showItems} />
            </Button>
          </TitleDiv>
          {showItems ? data?.card?.card?.itemCards?.map((item)=> {
            return <ItemCards data={item} key={item?.card?.info?.id}/>
          }) : null}
        </Box>
      ) : null}
    </Container>
  );
}

export default FoodItemDiv;
