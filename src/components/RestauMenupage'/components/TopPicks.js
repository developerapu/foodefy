import React from 'react';
import styled from 'styled-components';
import { IMG_CDN } from '../../../config';
import { Para, Button } from '../../../constant/ConstantStyledCom';

const Container = styled.div`
border: 1px solid gray;
border-radius: 3rem;
display: flex;
flex-direction: column;
align-items: center;
gap: 2rem;
margin: 3rem 0 7rem 0;
`;
const BannerImg = styled.img`
width: 35rem;
`;
const ButtonDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 15rem;
margin-top: -10rem;
z-index: 999;
`;

function TopPicks({data}) {
    console.log(data);
  return (
    <Container>
        <BannerImg src={IMG_CDN + data?.creativeId} alt={data?.title} />
        <ButtonDiv>
            <Para color='#fff' fontSize="2.5rem">₹{data?.dish?.info?.defaultPrice ? data?.dish?.info?.defaultPrice/100 : data?.dish?.info?.price/100}</Para>
            <Button opacity="1" width="10rem" backgroun="#fff" color="green" fontSize="2rem" borderRadius="1rem">ADD</Button>
        </ButtonDiv>
    </Container>
  )
}

export default TopPicks;