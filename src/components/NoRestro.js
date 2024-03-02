import React from 'react';
import styled from 'styled-components';
import SadImage from "../assets/images/sad-emoji.png";

const Container = styled.div`
width: 100vw;
height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Box = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1rem;
width: 35rem;
padding: 2rem;
//border: 2px solid red;
`;
const Img = styled.img`
width: 20rem;
`;
const Head = styled.h1`
    font-weight: 800;
    font-size: 2.5rem;
    line-height: 2.5rem;
    letter-spacing: -0.3px;
    color: rgba(2, 6, 12, 0.92);
`;
const Para = styled.p`
        font-weight: 200;
    font-size: 2rem;
    line-height: 2rem;
    letter-spacing: -0.3px;
    color: rgba(2, 6, 12, 0.6);
    text-align: center;

`;

function NoRestro() {
  return (
    <Container>
        <Box>
        <Img src={SadImage} alt="" />
        <Head>Location Unserviceable</Head>
        <Para>We don’t have any services here till now. Try changing location.</Para>  
        </Box>
    </Container>
  )
}

export default NoRestro;