import React from 'react';
import styled from 'styled-components';
import { CgOptions } from "react-icons/cg";

const Container = styled.div`
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

function FilterNav({totalRestaurant}) {
  return (
    <Container>
        <RestroNo>{totalRestaurant} restaurants</RestroNo>
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
      </Container>
  )
}

export default FilterNav;