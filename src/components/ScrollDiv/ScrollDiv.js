
import React, {useRef} from 'react';
import styled from 'styled-components';
import CuisinesCard from "../../components/Cuisines/components/CuisinesCard";
import { CgArrowLeft,CgArrowRight } from "react-icons/cg";
import { Button } from '../../constant/ConstantStyledCom';
import { useState } from 'react';
import RestrauntCard from '../RestrauntCard';

const Container = styled.div`
width: 79vw;
//height: 35rem;
background: #fff;
display: flex;
flex-direction: column;
padding-top: 2rem;
border-bottom: 2px solid rgb(240, 240, 245);
margin-bottom: 5rem;
`;
const Header = styled.h2`
color: #000;
font-size: 3rem;
`;
const CuisinesDiv = styled.div`
display: flex;
flex-wrap: nowrap;
overflow: hidden;
//overflow-x: scroll;
gap: 2rem;
//position: relative;
transition: 'transform 0.5s ease';
&::-webkit-scrollbar{
  display: none;
}
`;
const Div = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`;
const ButtonsDiv =styled.div`
display: flex;
gap: 2rem;
`;

//const Cuisines_Width = 30;

function ScrollDiv({data, type}) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const ref = useRef();

  // Handle Scroll Function

  const handleScroll = (scrollAmount) => {
    if(scrollAmount == "left"){
    ref.current.scrollLeft -= 500;
  } else {
    ref.current.scrollLeft += 500;
  }
}
  return (
    <Container>
      <Div>
      <Header>What's on your mind?</Header>
      <ButtonsDiv>
      <Button width="4rem" background="rgb(226, 226, 231)" opacity="1" height="4rem" fontSize="2.5rem" onClick={()=>handleScroll("left")}><CgArrowLeft /></Button>
        <Button width="4rem" background="rgb(226, 226, 231)" opacity="1" height="4rem" fontSize="2.5rem" onClick={()=>handleScroll("right")}><CgArrowRight /></Button>
      </ButtonsDiv>
      </Div>
      <CuisinesDiv ref={ref}>
      {type === "cuisines" ? data?.map((item)=> {
        return  <CuisinesCard key={item?.id} data={item}/>
      }) : data?.map((item)=> {
        return  <RestrauntCard key={item?.info?.id} restaurant={item?.info}/>
      })}
      </CuisinesDiv>
    </Container>
  )
}

export default ScrollDiv;