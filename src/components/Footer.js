import React, { useContext, useState } from "react";
import styled from "styled-components";
import DwnloadGBtn from "../assets/images/Download-GBtn.webp";
import DwnloadPlayBtn from "../assets/images/Download-App-Btn.webp";
import { CgFacebook, CgInstagram, CgTwitter } from "react-icons/cg";
import { AppContext } from "../context/AppContext";
import DownArrowWhite from "../assets/images/DownArrowWhite.svg";
import App from "../App";

const Container = styled.div`
  width: 100%;
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  //border: 2px solid blue;
  justify-content: center;
  //padding: 8rem 8rem 2rem 8rem;
  @media (max-width: 768px) {
    margin-bottom: 10rem;
  }
`;
const InfoSwiggy = styled.div`
  width: 100%;
  display: flex;
  padding: 3rem 0 4rem 0;
  border-bottom: 1px solid #4d4d4d;
  gap: 20rem;
  flex-wrap: wrap;
  justify-content: center;
  //border: 2px solid red;
  @media (max-width: 768px) {
    gap: 6rem;
  }
`;
const Box = styled.div`
  max-width: 40rem;
  //order: 2px solid red;
  @media (max-width: 768px) {
    width: 25rem;
  }
`;
const Unorder = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 25rem;
    gap: 2rem;
  }
`;
const Heading = styled.h4`
  font-size: 2.5rem;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 3rem;
  line-height: 20px;
  letter-spacing: -0.3px;
  color: rgba(255, 255, 255, 0.92);
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;
const List = styled.li`
  cursor: pointer;
  list-style: none;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 300;
  font-size: 2rem;
  line-height: 4rem;
  font-family: ProximaNova, arial, Helvetica Neue, sans-serif;
  letter-spacing: 0;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const ContactAndLegalBox = styled.div`
width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
const ButtonBox = styled.div`
  display: flex;
  //flex-direction: column;
  gap: 4rem;
`;
const Button = styled.button`
  cursor: pointer;
  width: 20rem;
  background: transparent;
  border: none;
  @media (max-width: 768px) {
    width: 15rem;
  }
`;
const DPlayImg = styled.img`
  width: 100%;
  @media (max-width: 768px) {
    //width: 20rem;
  }
`;
const CityDropDown = styled.button`
  width: 15rem;
  height: 4rem;
  border: 0.1rem solid gray;
  border-radius: 1rem;
  color: #fff;
  font-size: 2rem;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
const Para = styled.p`
  font-size: 2rem;
`;
const DownArrowImg = styled.img`
  width: 2rem;
  transform: ${(props) => (props.showAllCities ? "rotate(180deg)" : "null")};
`;

const BottomFooter = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  color: #fff;
  padding: 2rem 0;
`;
const FLogo = styled.h2`
  font-size: 3rem;
  line-height: 1.2;
  font-family: ProximaNova, arial, Helvetica Neue, sans-serif;
`;
const CopyRight = styled.p`
  font-size: 2.5rem;
`;
const SocialLogos = styled.div`
  display: flex;
  gap: 1rem;
`;
const Ancor = styled.a`
  font-size: 3rem;
  color: #fff;
`;
const AllCityDiv = styled.div`
  display: ${(props) => (props.showAllCities ? "block" : "none")};
  width: 100%;
  padding: 3rem 20rem;
  @media (max-width: 768px) {
    //padding: 6rem;
    padding: 2rem 0 0 6rem;
  }
`;
const Boxes = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    //padding-left: 6rem;
    //gap: 10rem;
  }
`;
const GoogleButtons = styled.div`
width: 100%;
padding: 3rem 40rem;
display: flex;
justify-content: center;
gap: 10rem;
background-color: rgb(240, 240, 245);
`;

const ButtonHead = styled.h1`
font-size: 4rem;
font-weight: 800;
    line-height: 32px;
    letter-spacing: -0.6px;
    color: rgba(2, 6, 12, 0.75);
    @media (max-width: 768px) {
    display: none;
  }
`;

const companyList = [
  "About us",
  "Team",
  "Careers",
  "Swiggy One",
  "Swiggy Instamart",
  "Swiggy Genie",
];
const contactList = ["Help & Support", "Partner With Us", "Ride With Us"];
const legalList = ["Terms & Conditions", "Privacy Policy", "Cookie Policy"];

function Footer() {
  const { cities, apiData } = useContext(AppContext);
  const [showAllCities, setShowSAllCities] = useState(false);
  const sliceValue = Math.floor(cities?.slice(6)?.length / 4);
  return (
    <Container>
      <GoogleButtons>
        <ButtonHead>For better experience,download the Swiggy app now</ButtonHead>
      <ButtonBox>
          <Button>
            <DPlayImg src={DwnloadGBtn} alt="" />
          </Button>
          <Button>
            <DPlayImg src={DwnloadPlayBtn} alt="" />
          </Button>
        </ButtonBox>
      </GoogleButtons>
      <InfoSwiggy>
        <Box>
          <Heading>Company</Heading>
          <Unorder>
            {companyList?.map((item, index) => {
              return <List key={index}>{item}</List>;
            })}
          </Unorder>
        </Box>
          <Box>
            <Heading>Contact</Heading>
            <Unorder>
              {contactList?.map((item, index) => {
                return <List key={index}>{item}</List>;
              })}
            </Unorder>
          </Box>
          <Box>
            <Heading>LEGAL</Heading>
            <Unorder>
              {legalList?.map((item, index) => {
                return <List key={index}>{item}</List>;
              })}
            </Unorder>
          </Box>
        <Box>
          <Heading>We deliver to:</Heading>
          <Unorder>
            {cities?.slice(0, 6)?.map((item, index) => {
              return <List key={index}>{item?.text}</List>;
            })}
          </Unorder>
          <CityDropDown onClick={() => setShowSAllCities(!showAllCities)}>
            <Para>{cities?.length} cities</Para>
            <DownArrowImg
              src={DownArrowWhite}
              alt=""
              showAllCities={showAllCities}
            />
          </CityDropDown>
        </Box>
      </InfoSwiggy>
      <AllCityDiv showAllCities={showAllCities}>
        <Heading>Other cities that we deliver:</Heading>
        <Boxes>
          <Box>
            <Unorder>
              {cities
                ?.slice(6)
                ?.slice(0, sliceValue)
                .map((item, index) => {
                  return <List key={index}>{item?.text}</List>;
                })}
            </Unorder>
          </Box>
          <Box>
            <Unorder>
              {cities
                ?.slice(6)
                ?.slice(sliceValue + 1, 2 * sliceValue)
                .map((item, index) => {
                  return <List key={index}>{item?.text}</List>;
                })}
            </Unorder>
          </Box>
          <Box>
            <Unorder>
              {cities
                ?.slice(6)
                ?.slice(2 * sliceValue + 1, 3 * sliceValue)
                .map((item, index) => {
                  return <List key={index}>{item?.text}</List>;
                })}
            </Unorder>
          </Box>
          <Box>
            <Unorder>
              {cities
                ?.slice(6)
                ?.slice(3 * sliceValue + 1)
                .map((item, index) => {
                  return <List key={index}>{item?.text}</List>;
                })}
            </Unorder>
          </Box>
        </Boxes>
      </AllCityDiv>
      <BottomFooter>
        <FLogo>Foodyfy</FLogo>
        <CopyRight>© 2023 FoodyFy</CopyRight>
        <SocialLogos>
          <Ancor href="#">
            <CgFacebook />
          </Ancor>
          <Ancor href="#">
            <CgInstagram />
          </Ancor>
          <Ancor href="#">
            <CgTwitter />
          </Ancor>
        </SocialLogos>
      </BottomFooter>
    </Container>
  );
}

export default Footer;
