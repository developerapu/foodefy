import React from 'react';
import logo from '../assets/images/foodefy.jpg';
import styled from 'styled-components';
import { CgSearch, CgPokemon, CgShoppingCart,CgUser,CgEditUnmask } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';


const Container = styled.div`
 width: 100%;
 //height: 10vh;
 border: 2px solid red;
 display: flex;
 //align-items: center;
 justify-content: space-between;
 padding: 3rem 19rem;
 position: fixed;
 top: 0;
 box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
 background: #fff;
 @media(max-width: 768px) {
  padding: 3rem;
  top: 92.5%;
}
`
const LogoLocation = styled.div`
display: flex;
justify-content: center;
align-items: center;
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
font-size: 2.5rem;
color: gray;
`
const Header = () => {
    const navigate = useNavigate();

    const handleClick = (pathNavigate)=> {
        const path = pathNavigate;
    navigate(path);
    }
    return (
        <Container>
            <LogoLocation>
                <LogoImg src={logo} alt="" />
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