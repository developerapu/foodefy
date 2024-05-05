import React, {useContext} from 'react';
import styled from 'styled-components';
import ScrollDiv from '../ScrollDiv/ScrollDiv';
import { AppContext } from '../../context/AppContext';

const Container = styled.div`
width: 79vw;
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