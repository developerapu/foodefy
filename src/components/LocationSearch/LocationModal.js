import React from "react";
import styled from "styled-components";
import CrossBtn from "../../assets/images/crossBtn.svg";
import LocationBtn from "../../assets/images/locationImg.svg";
import { Para } from "../../constant/ConstantStyledCom";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import axios from "axios";
import { useState } from "react";
import { CgSearch} from "react-icons/cg";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(18, 17, 15, 0.5);
  z-index: 99999999999;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.2s ease;
`;

const LocationBox = styled.div`
  width: 40vw;
  height: 100%;
  background: #fff;
  color: #000;
  padding: 6rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  @media (max-width: 768px) {
    width: 90vw;
    height: 40vh;
  }
`;
const LocationInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //border: 2px solid blue;
  gap: 2rem;
`;

const Input = styled.input`
  width: 100%;
  height: 5rem;
  font-size: 2rem;
  padding: 3rem;
  border: none;
  border: 1px solid lightgray;
  &:focus {
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    outline: none;
  }
`;
const CurrentLocationBox = styled.div`
  width: 60%;
  height: 10rem;
  border: 1px solid lightgray;
  display: flex;
  padding: 3rem;
  align-items: center;
  gap: 2rem;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  }
`;
const CurrentLocationImg = styled.img`
  width: 3rem;
`;

const NameLocationBox = styled.div`
  display: flex;
  width: 60%;
`;
const SearchBtn = styled.button`
  border: none;
  margin-left: -5rem;
  font-size: 3rem;
  background: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Span = styled.span`
font-size: 3rem;
margin-left: -8rem;
padding-top: 2rem;
cursor: pointer;
`;

const Button = styled.div`
  border: none;
  cursor: pointer;
`;
const CrossBtnImg = styled.img`
  width: 5rem;
`;

const ButtonPosition = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.showContact ? "space-between" : "flex-end"};
`;

function LocationModal() {
  const [stateName, setStateName] = useState("");
  const { showLocation, setShowLocation,location,setLocation } = useContext(AppContext);

  // Get latituce and longtitude using city name

  const getCoordinates = async () => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${stateName}`
      );
      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        const latLongObj = {
          latitude: lat,
          longitude: lon
        }
        setLocation(latLongObj);
        setShowLocation(false);
      } else {
        alert("State not found or coordinates not available.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Error fetching data. Please try again later.");
    }
  };

  // Get Current Location
  const getLocation = () => {
    //setShowLoader(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        console.log(location);
        setLocation(location);
        setShowLocation(false);

        //setShowLoader(false);
      });
    }
  };

  return (
    <Container>
      <LocationBox>
        <Button onClick={() => setShowLocation(false)}>
          <CrossBtnImg src={CrossBtn} alt="crossButton" />
        </Button>
        <LocationInput>
          <NameLocationBox>
            <Input type="text" placeholder="Search for area, street name " value={stateName} onChange={(e)=> setStateName(e.target.value)} />
            <SearchBtn onClick={getCoordinates}><CgSearch/></SearchBtn>
          </NameLocationBox>
          <CurrentLocationBox onClick={getLocation}>
            <CurrentLocationImg src={LocationBtn} alt="locationBtn" />
            <Para fontSize="2rem" color="gray">
              Get Current Location
            </Para>
          </CurrentLocationBox>
        </LocationInput>
      </LocationBox>
    </Container>
  );
}

export default LocationModal;
