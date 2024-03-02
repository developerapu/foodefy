import React, {useState, useEffect} from "react";
import RestrauntCard from "./RestrauntCard";
import styled from "styled-components";
import { CgOptions } from "react-icons/cg";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const RestroList = styled.div`
  width: 79vw;
  display: flex;
  flex-wrap: wrap;
  gap: 5vh 1vw;
`;
const FilterNav = styled.div`
  width: 76vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e9e9eb;
  margin-bottom: 2rem;
`;
const RestroNo = styled.h2`
  font-size: 4rem;
`;
const Unorder = styled.ul`
  display: flex;
`;
const List = styled.li`
  list-style: none;
  padding: 2rem;
  font-size: 2.2rem;
  display: flex;
  align-items: center;
  font-weight: 300;
  text-transform: capitalize;
  color: #686b78;
  cursor: pointer;
  &:active {
    border-bottom: 2px solid black;
  }
`;
const Span = styled.span`
  padding-right: 1rem;
  font-weight: bold;
  &:hover {
    color: orange;
  }
`;
const FilterLog = styled.span`
  width: 3rem;
  height: 3rem;
  border: 2px solid orange;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: orange;
`;
const SearchBox = styled.div`

`;

const filterData = (searchTxt, restaurants) => {
  return restaurants.filter((restaurant) => restaurant?.data?.name.toLowerCase()?.includes(searchTxt.toLowerCase()));
}
function Shimmer() {
  const [searchTxt, setSearchTxt] = useState();
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.8370262&lng=91.2841007&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  if(filterRestaurants.length === 0) {
    return <h1>Sorry Not Found</h1>
  }
  return (
    <Container>
      <SearchBox>
        <input
          type="text"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
        />
        <button
          onClick={() => {
            const data = filterData(searchTxt, allRestaurants);
            setFilterRestaurants(data);
          }}
        >Search</button>
      </SearchBox>
      <FilterNav>
        <RestroNo>119 restaurants</RestroNo>
        <Unorder>
          <List>Relevance</List>
          <List>Delivery Time</List>
          <List>Rating</List>
          <List>Cost: Low To High</List>
          <List>Cost: High To Low</List>
          <List>
            <Span>Filters</Span>
            <FilterLog>
              <CgOptions />
            </FilterLog>
          </List>
        </Unorder>
      </FilterNav>
      <RestroList>
        {filterRestaurants.map((restaurant) => {
          // return <RestrauntCard {...restaurant.data}/>
          return (
            <RestrauntCard
            />
          );
        })}
      </RestroList>
    </Container>
  );
}

export default Shimmer;
