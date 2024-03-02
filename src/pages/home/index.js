import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Body from '../../components/Body';
import Footer from '../../components/Footer';

const Container = styled.div`
width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function HomePage() {
  return (
    <Container>
        <Header/>
        <Body/>
        <Footer/>
    </Container>
  )
}

export default HomePage;