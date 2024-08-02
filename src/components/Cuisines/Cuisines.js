import React, {useContext} from 'react';
import styled from 'styled-components';
import ScrollDiv from '../ScrollDiv/ScrollDiv';
import { AppContext } from '../../context/AppContext';

const Container = styled.div`
width: 79vw;
border-bottom: 2px solid rgb(240, 240, 245);
margin-bottom: 6rem;
`;

function Cuisines() {
  const {cuisines} = useContext(AppContext);
  return (
    <Container>
      <ScrollDiv data={cuisines} type="cuisines"/>
    </Container>
  )
}

export default Cuisines;