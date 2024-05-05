import React from 'react';
import styled from 'styled-components';
import { Para } from '../../../constant/ConstantStyledCom';
import { IMG_CDN } from '../../../config';

const Container = styled.div`
width: 30rem;
cursor: pointer;
`;
const CuisineImg = styled.img`
width: 20rem;
`;

function CuisinesCard({data}) {
  return (
    <Container>
        <CuisineImg src={`${IMG_CDN + data?.imageId}`} alt="" />
        <Para></Para>
    </Container>
  )
}

export default CuisinesCard