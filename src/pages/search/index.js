import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBtnImg from '../assets/images/searchBtn.svg';
import CrossBtnImg from '../assets/images/crossBtn.svg';
import Header from './Header';

const Container = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
//align-items: center;
//justify-content: center;
//padding-top: 20rem;
`;
const SearchBox = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
gap: 1rem;
padding-top: 20rem;
`;

const Input = styled.input`
width: 60%;
height: 8rem;
padding: 0 2rem;
font-size: 3rem;
&:focus {
  outline: none;
}
`;
const Button = styled.button`
width: 8rem;
font-size: 3rem;
border: none;
background: transparent;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
//box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
margin-left: -10rem;
`;
const CrossImg = styled.img`
width: 2rem;
`;

function SearchCom() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Container>
      <Header/>
      <SearchBox>
      <Input type="search" name="" id="" placeholder='Search for restaurant and food' value={searchValue} onChange={(e)=> setSearchValue(e.target.value)}/>
      {searchValue ? <Button><CrossImg src={CrossBtnImg} alt="" /></Button> :
      <Button><img src={SearchBtnImg} alt="" /></Button>}
      </SearchBox>
    </Container>
  )
}

export default SearchCom;