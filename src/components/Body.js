import React, {useState, useEffect, useContext} from "react";
import RestrauntCard from "./RestrauntCard";
import styled from "styled-components";
import NoRestro from "./NoRestro";
import FilterNav from "./FilterNav";
import {AppContext} from "../context/AppContext";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 12rem;
`;
const RestroList = styled.div`
  width: 79vw;
  display: flex;
  flex-wrap: wrap;
  gap: 5vh 1vw;
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
  const {setCities, setApiData} = useContext(AppContext);
  const [searchTxt, setSearchTxt] = useState();
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [totalRestaurant, setTotalRestaurant] = useState();
//console.log(allRestaurants);

useEffect(()=>{
  fetchRestaurantList();
},[]);

const fetchRestaurantList=async ()=>{
try{
  
  //const data=await fetch("https://corsproxy.org/?"+encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1685786&lng=79.9338798&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"));
  //setProgress(50);
   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0827989&lng=80.2754246&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

  const logData = await data.json();
  console.log(logData);

  //const json=await data.json();
  setApiData(logData);

  const checkJsonData = async (jsonData) => {
    for(let i=0;i<jsonData?.data?.cards.length;i++){
      let checkData = jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      if(checkData!==undefined){
        return checkData;
      }
    }
  }

  const resData=await checkJsonData(logData);
  //console.log(resData);
   setAllRestaurants(resData);
   setTotalRestaurant(resData?.length);
  setFilterRestaurants(resData);

  // to find cities
  
  const findCities = async (jsonData) => {
    for(let i=0;i<jsonData?.data?.cards.length;i++){
      let checkData = jsonData?.data?.cards[i]?.card?.card;
      // id = jsonData?.data?.cards[i]?.card?.card?.id;
      //console.log(id)
      if(checkData?.cities!==undefined && checkData?.id === "footer_content"){
        return checkData?.cities;
      }
    }
  }
  const allCities =await findCities(logData);
  setCities(allCities);
  //console.log(jsonData?.data?.cards[i]?.card?.card?.cities);

  //console.log(allCities, "cities");

}catch(e){
  console.log(e);
}
  
}

  return  (
    <Container>
      {/* <SearchBox>
        <input
          type="text"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => {setSearchTxt(e.target.value); const data = filterData(searchTxt, allRestaurants);
            setFilterRestaurants(data);}}
        />
        <button
          onClick={() => {
            const data = filterData(searchTxt, allRestaurants);
            setFilterRestaurants(data);
          }}
        >Search</button>
      </SearchBox> */}
      <FilterNav totalRestaurant={totalRestaurant}/>
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
      <Check>{filterRestaurants?.length} Data</Check>
    </Container>
  );
}
 export default Body;
