
import React, {useRef} from 'react';
import styled from 'styled-components';
import CuisinesCard from "../../components/Cuisines/components/CuisinesCard";
import { CgArrowLeft,CgArrowRight } from "react-icons/cg";
import { Button } from '../../constant/ConstantStyledCom';
import RestrauntCard from '../RestrauntCard';
import DealsForYou from '../RestauMenupage\'/components/DealsForYou';
import TopPicks from '../RestauMenupage\'/components/TopPicks';
import { Link } from 'react-router-dom';

const Container = styled.div`
width: 100%;
//height: 35rem;
background: #fff;
display: flex;
flex-direction: column;
//padding-top: 2rem;
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
const MenuLink = styled(Link)`
text-decoration: none;
`;

//const Cuisines_Width = 30;

function ScrollDiv({data, type, title}) {
  const ref = useRef();

  // Handle Scroll Function

  const handleScroll = (scrollAmount) => {
    if(scrollAmount === "left"){
    ref.current.scrollLeft -= 500;
  } else {
    ref.current.scrollLeft += 500;
  }
}
  return (
    <Container>
      <Div>
      <Header>{title ? title : data?.header?.title}</Header>
      <ButtonsDiv>
      <Button width="4rem" background="rgb(226, 226, 231)" opacity="1" height="4rem" fontSize="2.5rem" onClick={()=>handleScroll("left")}><CgArrowLeft /></Button>
        <Button width="4rem" background="rgb(226, 226, 231)" opacity="1" height="4rem" fontSize="2.5rem" onClick={()=>handleScroll("right")}><CgArrowRight /></Button>
      </ButtonsDiv>
      </Div>
      <CuisinesDiv ref={ref}>
      {type === "cuisines" ? data?.imageGridCards?.info?.map((item)=> {
        return  <MenuLink key={item?.id} to={"/food/collection/id=/" + item?.action?.link?.match(/\d+/g).map(Number)[0] + "/restaurants"}><CuisinesCard  data={item}/></MenuLink>
      }) : type === "deals" ? data?.gridElements?.infoWithStyle?.offers?.map((item, i)=> {
        return <DealsForYou key={i} data={item}/>
      }) : type === "Top Picks" ? data?.map((item)=> {return <TopPicks key={item?.bannerId} data={item}/>}) : data?.gridElements?.infoWithStyle
      ?.restaurants?.map((item)=> {
        return  <MenuLink
        key={item?.info?.id}
        to={`/restaurants/${item?.info?.id}`}
      ><RestrauntCard  restaurant={item?.info} styleDirection="column"/> </MenuLink>
      })}
      </CuisinesDiv>
    </Container>
  )
}

export default ScrollDiv;