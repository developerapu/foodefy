import React from 'react';
import styled from 'styled-components';
import { IMG_CDN } from '../../../config';
import { Para } from '../../../constant/ConstantStyledCom';

const Container = styled.div`
border: 1px solid gray;
border-radius: 3rem;
padding: 2rem;
display: flex;
align-items: center;
gap: 2rem;
margin: 3rem 0;
`;
const LogoImg = styled.img`
width: 5rem;
`;
const OfferBox = styled.div`
width: 30rem;
display: flex;
flex-direction: column;
gap: 1rem;
`;

function DealsForYou({data}) {
    const {offerLogo, header, couponCode} = data?.info;
  return (
    <Container>
        <LogoImg src={IMG_CDN + offerLogo} alt="" />
        <OfferBox>
            <Para fontSize="2.5rem" fontWeight= "600">{header}</Para>
            <Para fontSize= "2rem" fontWeight= "400">{couponCode}</Para>
        </OfferBox>
    </Container>
  )
}

export default DealsForYou;