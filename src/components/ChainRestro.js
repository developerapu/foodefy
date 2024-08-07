import React, {useContext} from 'react';
import styled from 'styled-components';
import { AppContext } from '../context/AppContext';
import ScrollDiv from './ScrollDiv/ScrollDiv';

const Container = styled.div`
width: 79vw;
border-bottom: 2px solid rgb(240, 240, 245);
margin-bottom: 6rem;
`;

function ChainRestro() {
    const {restaurants} = useContext(AppContext);
  return (
    <Container>
        <ScrollDiv data={restaurants} type="cards"/>
    </Container>
  )
}

export default ChainRestro;