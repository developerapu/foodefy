import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import { useAxios } from '../../networks/axios';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import RestauDetails from './components/RestauDetails';
import ScrollDiv from '../ScrollDiv/ScrollDiv';
import FoodItemDiv from './components/FoodItemDiv';


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 11rem;
  background: rgb(255, 255, 255);
  padding: 5rem;
`;
const MainDiv = styled.div`
width: 50vw;
@media(max-width: 768px) {
  width: 70rem;
}
`;
const Header = styled.h3`
font-size: 3rem;
padding: 0 0 3rem 1rem;
color: #000;
`;

function RestauMenuPage() {
  const {location} = useContext(AppContext);
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantDetails, setRestaurantDetails] = useState({});
  const [dealsDetails, setDealsDetails] = useState({});
  const [itemsDetails, setItemDetails] = useState([]);
  const fetchApi = useAxios();
  const {resId} = useParams();

  useEffect(()=> {
    fetchRestauMenu();
  }, []);

  const fetchRestauMenu = async () => {
    try {
      const response = await fetchApi(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${location?.latitude}&lng=${location?.longitude}&restaurantId=${resId}`);
      console.log(response?.data?.data, "response");
       setRestaurantName(response?.data?.data?.cards[0]?.card?.card?.text);
       setRestaurantDetails(response?.data?.data?.cards[2]?.card?.card?.info);
       setDealsDetails(response?.data?.data?.cards[3]?.card?.card);
       setItemDetails(response?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Error fetching data. Please try again later.");
    }
  };
  return (
    <Container>
      <MainDiv>
        <Header>{restaurantName}</Header>
        <RestauDetails data={restaurantDetails}/>
        <ScrollDiv data={dealsDetails} type="deals" title="Deals for you"/>
        {
            itemsDetails?.map((item, i)=> {
              return <FoodItemDiv key={i} data = {item}/>
            })
        }
      </MainDiv>
      {console.log(itemsDetails, "lol")}
    </Container>
  )
}

export default RestauMenuPage;