import React, { useState, useEffect, useContext } from "react";
import RestrauntCard from "./RestrauntCard";
import styled from "styled-components";
import NoRestro from "./NoRestro";
import FilterNav from "./FilterNav";
import { AppContext } from "../context/AppContext";
import { useAxios } from "../networks/axios";
import Cuisines from "./Cuisines/Cuisines";
import ChainRestro from "./ChainRestro";
import { Link } from "react-router-dom";

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
const SearchBox = styled.div``;
const Check = styled.h1`
  font-size: 3rem;
  color: #000;
`;
const MenuLink = styled(Link)`
text-decoration: none;
`;

const filterData = (searchTxt, restaurants) => {
  return restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase()?.includes(searchTxt.toLowerCase())
  );
};
function Body() {
  const { setCities, setApiData, location, setCuisines, setRestaurants } =
    useContext(AppContext);
  const [stateName, setStateName] = useState("");
  const [resTitle, setResTitle] = useState({});
  const [findFilter, setFindFilter] = useState({});
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [totalRestaurant, setTotalRestaurant] = useState();
  const fetchApi = useAxios();

  useEffect(() => {
    fetchRestaurantList();
  }, [location]);

  const fetchRestaurantList = async () => {
    try {
      const response = await fetchApi(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location?.latitude}&lng=${location?.longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`,
        "get"
      );
      console.log(response.data.data);
      setApiData(response);

      const checkResData = async (data) => {
        for (let i = 0; i < data?.data?.data?.cards?.length; i++) {
          let checkData =
            data?.data?.data?.cards[i]?.card?.card;
          if (checkData?.gridElements?.infoWithStyle
            ?.restaurants !== undefined) {
            return checkData;
          }
        }
      };

      const resData = await checkResData(response);
      setAllRestaurants(resData);
      setTotalRestaurant(resData?.length);
      setFilterRestaurants(resData);
      setRestaurants(resData);

      // check title
      
      const findTitle = async (data) => {
        for (let i = 0; i < data?.data?.data?.cards.length; i++) {
           let checkData = data?.data?.data?.cards[i]?.card?.card;
          if (checkData !== undefined && checkData?.id === "popular_restaurants_title") {
            return checkData;
          }
      }
    }

      const title = await findTitle(response);
      console.log(title, "title");
      setResTitle(title);

      // find filter items 

      const findFilter = async (data) => {
        for (let i = 0; i < data?.data?.data?.cards.length; i++) {
          //console.log(data?.data?.data?.cards[i]?.card?.card?.facetList, "title");
           let checkData = data?.data?.data?.cards[i]?.card?.card      ;
          if (checkData?.facetList !== undefined) {
            return checkData;
          }
      }
    }

      const filterItem = await findFilter(response);
       console.log(filterItem, "title");
      setFindFilter(filterItem);

      // to find cities

      const findCities = async (data) => {
        for (let i = 0; i < data?.data?.data?.cards.length; i++) {
          let checkData = data?.data?.data?.cards[i]?.card?.card;
          if (
            checkData?.cities !== undefined &&
            checkData?.id === "footer_content"
          ) {
            return checkData?.cities;
          }
        }
      };
      const allCities = await findCities(response);
      setCities(allCities);

      // To Find Cuisines

      const findCuisines = async (data) => {
        for (let i = 0; i < data?.data?.data?.cards.length; i++) {
          let checkData = data?.data?.data?.cards[i]?.card?.card;
          if (
            checkData?.imageGridCards?.info !== undefined &&
            checkData?.id === "whats_on_your_mind"
          ) {
            return checkData;
          }
        }
      };
      const allCuisines = await findCuisines(response);
      setCuisines(allCuisines);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
       {filterRestaurants?.length === 0 ?
          <NoRestro /> : <>
      <Cuisines />
      <ChainRestro />
      <RestroList>
        <FilterNav title={resTitle} filter={findFilter}/>
          {filterRestaurants?.gridElements?.infoWithStyle
          ?.restaurants?.map((restaurant) => {
            return (
              <MenuLink
                key={restaurant?.info?.id}
                to={`/restaurants/${restaurant?.info?.id}`}
              >
                <RestrauntCard
                  restaurant={restaurant?.info}
                  styleDirection="row"
                />
              </MenuLink>
            );
          })}
      </RestroList>
      </>
       }
    </Container>
  );
}
export default Body;
