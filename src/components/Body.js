import React, {useState, useEffect, useContext} from "react";
import RestrauntCard from "./RestrauntCard";
import styled from "styled-components";
import NoRestro from "./NoRestro";
import FilterNav from "./FilterNav";
import {AppContext} from "../context/AppContext";
import { useAxios } from "../networks/axios";
import Cuisines from "./Cuisines/Cuisines";
import ChainRestro from "./ChainRestro";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 12rem;
  background: rgb(255, 255, 255);
`;
const RestroList = styled.div`
  width: 79vw;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem 1rem;
  padding-bottom: 5rem;
  @media (max-width: 768px) {
    width: 100%;
    padding: 3rem 5rem;
  }
`;
const SearchBox = styled.div`

`;
const Check = styled.h1`
font-size: 3rem;
color: #000;
`;

const filterData = (searchTxt, restaurants) => {
  return restaurants.filter((restaurant) => restaurant?.info?.name.toLowerCase()?.includes(searchTxt.toLowerCase()));
}
function Body() {
  const {setCities, setApiData, location, setCuisines, setRestaurants} = useContext(AppContext);
  const [stateName, setStateName] = useState('');
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [totalRestaurant, setTotalRestaurant] = useState();
  const fetchApi = useAxios();

useEffect(()=>{
  fetchRestaurantList();
},[location]);

const fetchRestaurantList=async ()=>{
try{
    const response = await fetchApi(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location?.latitude}&lng=${location?.longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`, "get");

    console.log(response);
  setApiData(response);

  const checkResData = async (data) => {
    for(let i=0;i<data?.data?.data?.cards?.length;i++){
      let checkData = data?.data?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      if(checkData!==undefined){
        return checkData;
      }
    }
  }

  const resData=await checkResData(response);
   setAllRestaurants(resData);
   setTotalRestaurant(resData?.length);
  setFilterRestaurants(resData);
  setRestaurants(resData);

  // to find cities
  
  const findCities = async (data) => {
    for(let i=0;i<data?.data?.data?.cards.length;i++){
      let checkData = data?.data?.data?.cards[i]?.card?.card;
      if(checkData?.cities!==undefined && checkData?.id === "footer_content"){
        return checkData?.cities;
      }
    }
  }
  const allCities =await findCities(response);
  setCities(allCities);

  // To Find Cuisines

  const findCuisines = async (data) => {
    for(let i=0;i<data?.data?.data?.cards.length;i++){
      let checkData = data?.data?.data?.cards[i]?.card?.card;
      if(checkData?.imageGridCards?.info!==undefined && checkData?.id === "whats_on_your_mind"){
        return checkData?.imageGridCards?.info;
      }
    }
  }
  const allCuisines =await findCuisines(response);
  setCuisines(allCuisines);

}catch(e){
  console.log(e);
}
  
}


  return  (
    <Container>
      {/* <FilterNav totalRestaurant={totalRestaurant}/> */}
      <Cuisines/>
      <ChainRestro/>
      <RestroList>
        {!filterRestaurants ? <NoRestro/> : filterRestaurants?.map((restaurant) => {
          return (
            <RestrauntCard
              restaurant={restaurant?.info}
              key={restaurant?.info?.id}
            />
          );
        })}
      </RestroList>
    </Container>
  );
}
 export default Body;
