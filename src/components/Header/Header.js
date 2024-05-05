import React from 'react';
import logo from '../../assets/images/foodefy.jpg';
import styled from 'styled-components';
import { CgSearch, CgPokemon, CgShoppingCart,CgUser,CgEditUnmask,CgChevronDown } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import {Para} from "../../constant/ConstantStyledCom"
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const Container = styled.div`
 width: 100vw;
 display: flex;
 justify-content: space-between;
 padding: 3rem 16rem;
 position: fixed;
 top: 0;
 box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
 background: #fff;
 z-index: 9999;
 @media(max-width: 768px) {
  padding: 3rem;
  top: 92.5%;
}
`
const LogoLocation = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 4rem;
@media(max-width: 768px) {
  display: none;
}
`
const LogoImg = styled.img`
width: 20rem;
`
const Unorder = styled.ul`
display: flex;
@media(max-width: 768px) {
  width: 100%;
  justify-content: space-between;
}
`
const List = styled.li`
list-style: none;
font-size: 3rem;
padding: 0 3rem;
display: flex;
align-items: center;
cursor: pointer;
&:hover {
    color: orange;
}
@media(max-width: 768px) {
 //padding: 2rem;
 flex-direction: column;
}
`
const Span = styled.span`
padding-left: 1rem;
font-size: ${(props)=> props.fontSize ? props.fontSize : '2.5rem'};
color: gray;
`;
const LocationBox = styled.div`
display: flex;
align-items: center;
gap: 0.7rem;
font-size: 3rem;
color: orange;
cursor: pointer;
`;
const Header = () => {
    const [currentAddress, setCurrentAddress] = useState("");
    const navigate = useNavigate();
    const {showLocation, setShowLocation, location}= useContext(AppContext);

    useEffect(()=> {
        getCity();
    },[location]);
    const getCity = async () => {
        try {
          const response = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${location?.latitude}&lon=${location?.longitude}&zoom=10`
          );
          const address = `${response?.data?.address?.city}, ${response?.data?.address?.state}, ${response?.data?.address?.country}`
          setCurrentAddress(address);
        } catch (error) {
          console.error("Error fetching data:", error);
          alert("Error fetching data. Please try again later.");
        }
      };

    const handleClick = (pathNavigate)=> {
        const path = pathNavigate;
    navigate(path);
    }
    return (
        <Container>
            <LogoLocation>
                <LogoImg src={logo} alt="" />
                <LocationBox onClick={()=> setShowLocation(true)}>
                <Para fontSize="2rem" fontWeight="bold" textDecoration="underline" gap="0.5rem" color="#000">Other</Para >
                <Para fontSize="2rem" fontWeight="200" color='gray'>{currentAddress}</Para>
                <CgChevronDown/>
                </LocationBox>
                </LogoLocation>
            <Unorder>
                <List onClick={()=>handleClick("search")}><CgSearch/> <Span>Search</Span></List>
                <List><CgEditUnmask/> <Span>Offers</Span></List>
                <List><CgPokemon/> <Span>Help</Span></List>
                <List><CgUser/><Span>Sign In</Span></List>
                <List><CgShoppingCart/><Span>Cart</Span></List>
            </Unorder>
        </Container>
    )
}

export default Header;