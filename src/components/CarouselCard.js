import React from 'react';
import carouselImg from "../assets/images/carouselImg.webp";
import styled from 'styled-components';

const Img = styled.img`
width: 35rem;
height: 35rem;
transition: transform .5s cubic-bezier(.215,.61,.355,1);
    //-webkit-backface-visibility: visible;
    backface-visibility: visible;
    transform: translateZ(0);
`

function CarouselCard() {
  return (
    <div>
        <Img src={carouselImg} alt="" />
    </div>
  )
}

export default CarouselCard;