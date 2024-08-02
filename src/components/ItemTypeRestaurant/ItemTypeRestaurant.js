import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAxios } from '../../networks/axios';
import { useParams } from "react-router-dom";
import RestrauntCard from '../RestrauntCard';
import { Link } from "react-router-dom";

const Container = styled.div`
width: 100%;
margin-top: 12rem;
padding: 8rem 15rem;
display: flex;
flex-direction: column;
gap: 2rem;
`;
const Header = styled.div`
width: 100%;
display: flex;
gap: 2rem;
flex-direction: column;
//padding: 5rem;
border: 2px solid red;
`;

const Title = styled.p`
font-size: 4rem;
color: #000;
font-weight: 600;
`;
const SubTitle = styled.p`
font-size: 2.5rem;
color: #282c3f;
`;
const Main = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
gap: 2rem;
`;
const MenuLink = styled(Link)`
text-decoration: none;
`;

function ItemTypeRestaurant() {
    const [headData, setHeadData] = useState({});
    const [restaurant, setRestaurant]= useState([]);
    const fetchApi = useAxios();
    const itemId = useParams();
    console.log(itemId);

    useEffect(()=> {
        fetchRestaurantsData();
    },[]);

  const fetchRestaurantsData = async () => {
    try {
      const response = await fetchApi(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7586175&lng=80.9141368&collection=${itemId.foodId}&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null`,
        "get"
      );
      console.log(response?.data?.data);
      const resData = response?.data?.data?.cards;
      setRestaurant(resData?.slice(3));
      setHeadData(resData[0]?.card?.card)
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Container>
      <Header>
        <Title>{headData?.title}</Title>
        <SubTitle>{headData?.description}</SubTitle>
        {/* <FilterDiv>

        </FilterDiv> */}
      </Header>
      <Main>
        {restaurant?.map((data, i)=>{
          if(data?.card?.card?.info) {
            return (
              <MenuLink
                key={data?.card?.card?.info?.id}
                to={`/restaurants/${data?.card?.card?.info?.id}`}
              >
                <RestrauntCard restaurant={data?.card?.card?.info} styleDirection="row"/>
              </MenuLink>)
          }
        })}
        {console.log(restaurant)}
      </Main>
    </Container>
  )
}

export default ItemTypeRestaurant;