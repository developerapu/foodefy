import React from "react";
import styled from "styled-components";
import DwnloadGBtn from "../assets/images/Download-GBtn.webp";
import DwnloadPlayBtn from "../assets/images/Download-App-Btn.webp";
import { CgFacebook, CgInstagram,CgTwitter } from "react-icons/cg";

const Container = styled.div`
width: 100%;
background: #000;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 8rem 8rem 2rem 8rem;
`;
const InfoSwiggy = styled.div`
width: 90%;
display: flex;
padding-bottom: 20px;
border-bottom: 1px solid #4d4d4d;
gap: 20rem;
`;
const Box = styled.div`
max-width: 40rem;
`;
const Unorder = styled.ul`

`;
const Heading = styled.h4`
    color: gray;
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 3rem;
`;
const List = styled.li`
list-style: none;
color: #fff;
font-weight: 300;
font-size: 2rem;
line-height: 4rem;
font-family: ProximaNova,arial,Helvetica Neue,sans-serif;
letter-spacing: 0;
`;
const ButtonBox = styled.div`
display: flex;
flex-direction: column;
gap: 4rem;
`;
const Button = styled.button`
width: 20rem;
background: transparent;
border: none;
`;
const DPlayImg = styled.img`
width: 25rem;
`;
const StateHeading = styled.h4`
    color: gray;
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 600;
    padding: 3rem 0;
    background: #000;
`;

const States = styled.div`
display: flex;
justify-content: space-between;
`;
const DeliveryStates = styled.div`
width: 90%;
display: flex;
flex-direction: column;
padding-bottom: 20px;
border-bottom: 1px solid #4d4d4d;
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
font-family: ProximaNova,arial,Helvetica Neue,sans-serif;
`;
const CopyRight = styled.p`
font-size: 2.5rem;
`;
const SocialLogos = styled.div`
display: flex;
gap: 1rem;
`
const Ancor = styled.a`
font-size: 3rem;
color: #fff;
`;

function Footer() {
  return (
    <Container>
    <InfoSwiggy>
      <Box>
        <Heading>Company</Heading>
        <Unorder>
          <List>About us</List>
          <List>Team</List>
          <List>Careers</List>
          <List>Swiggy Blog</List>
          <List>Bug Bounty</List>
          <List>Swiggy One</List>
          <List>Swiggy Corporate</List>
          <List>Swiggy Instamart</List>
          <List>Swiggy Genie</List>
        </Unorder>
      </Box>
      <Box>
        <Heading>Contact</Heading>
        <Unorder>
          <List>Help & Support</List>
          <List>Partner With Us</List>
          <List>Ride With Us</List>
        </Unorder>
      </Box>
      <Box>
        <Heading>LEGAL</Heading>
        <Unorder>
          <List>Terms & Conditions</List>
          <List>Refund & Cancellation</List>
          <List>Privacy Policy</List>
          <List>Cookie Policy</List>
          <List>Offer Terms</List>
          <List>Phishing & Fraud</List>
          <List>Corporate - Swiggy Money Codes Terms and Conditions</List>
          <List>Corporate - Swiggy Discount Voucher Terms and Conditions</List>
        </Unorder>
      </Box>
        <ButtonBox>
            <Button><DPlayImg src={DwnloadGBtn} alt="" /></Button>
            <Button><DPlayImg src={DwnloadPlayBtn} alt="" /></Button>
        </ButtonBox>
    </InfoSwiggy>
    <BottomFooter>
      <FLogo>Foodyfy</FLogo>
      <CopyRight>© 2023 FoodyFy</CopyRight>
      <SocialLogos>
        <Ancor href="#"><CgFacebook/></Ancor>
        <Ancor href="#"><CgInstagram/></Ancor>
        <Ancor href="#"><CgTwitter/></Ancor>
      </SocialLogos>
    </BottomFooter>
    </Container>
  );
}

export default Footer;
