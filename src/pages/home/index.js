import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Body from "../../components/Body";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";
import LocationModal from "../../components/LocationSearch/LocationModal"
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function HomePage() {
  const {showLocation} = useContext(AppContext);
  return (
    <Container>
      {showLocation ? <LocationModal/> : null}
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}

export default HomePage;
