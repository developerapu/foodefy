import React from 'react';
import styled from 'styled-components';
import { Para } from '../../../constant/ConstantStyledCom';
import { IMG_CDN } from '../../../config';
import { useAxios } from '../../../networks/axios';

const Container = styled.div`
width: 20rem;
cursor: pointer;
`;
const CuisineImg = styled.img`
width: 20rem;
`;

function CuisinesCard({data}) {
  return (
    <Container>
        <CuisineImg src={`${IMG_CDN + data?.imageId}`} alt="" />
    </Container>
  )
}

export default CuisinesCard