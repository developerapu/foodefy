
import React from 'react';
import styled from 'styled-components';
import CarouselCard from './CarouselCard';

const Container = styled.div`
width: 100vw;
height: 50vh;
background: #171a29;
margin-bottom: 5rem;
display: flex;
align-items: center;
justify-content: center;
gap: 4rem;
`

function Cuisines() {
  return (
    <Container>
      <CarouselCard/>
      <CarouselCard/>
      <CarouselCard/>
      <CarouselCard/>
    </Container>
  )
}

export default Cuisines;