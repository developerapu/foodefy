import React, {useState, useEffect} from "react";
import RestrauntCard from "./RestrauntCard";
import styled from "styled-components";
import NoRestro from "./NoRestro";
import FilterNav from "./FilterNav";

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
  const [searchTxt, setSearchTxt] = useState();
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [totalRestaurant, setTotalRestaurant] = useState();
console.log(allRestaurants);

useEffect(()=>{
  fetchRestaurantList();
},[]);

const fetchRestaurantList=async ()=>{
try{
  
  const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.8370262&lng=91.2841007&page_type=DESKTOP_WEB_LISTING");
  //setProgress(50);
  const json=await data.json();
  async function checkJsonData(jsonData){
    for(let i=0;i<jsonData?.data?.cards.length;i++){
      let checkData = jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      if(checkData!==undefined){
        return checkData;
      }
    }
  }

  const resData=await checkJsonData(json);
  console.log(resData);
   setAllRestaurants(resData);
   setTotalRestaurant(resData?.length);
  setFilterRestaurants(resData);

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
      <Check>{allRestaurants?.length} Data</Check>
    </Container>
  );
}
 export default Body;
