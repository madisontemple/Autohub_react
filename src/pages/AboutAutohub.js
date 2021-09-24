import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "../index.css";
import Home from "./Home";
function AboutAutohub() {
  const history = useHistory();
  const HomeClick = () => history.push("./");
  const BuyClick = () => history.push("./Buy");
  const SellClick = () => history.push("./Sell");
  const ManagedClick = () => history.push("./Managed.js");
  const AboutClick = () => history.push("./AboutAutohub");
  const CCenterClick = () => history.push("./CCenter");
  const JoinClick = () => history.push("./Join");
  const LoginClick = () => history.push("./Login");

  const HyundaiClick = () => history.push("./Hyundai");
  const KiaClick = () => history.push("./Kia");
  const BenzClick = () => history.push("./Benz");
  const BmwClick = () => history.push("./Bmw");
  const GenesisClick = () => history.push("./Genesis");

  return (
    <div>
    
      <AboutMenuPart>
        <AboutListUl>
          <AboutList>단지소개</AboutList>
          <AboutList>층별안내</AboutList>
          <AboutList>단지사진</AboutList>
          <AboutList>특별 프로모션</AboutList>
          <AboutList>오시는길</AboutList>
        </AboutListUl>
      </AboutMenuPart>
      <Home />
    </div>
  );
}



const AboutMenuPart = styled.div`
  background-color: #f11843;
  margin-bottom: -40px;
  
  
`;
const AboutListUl = styled.ul`
  list-style: none;
  padding-left: 265px;
  margin-top: 10px;
  
  
  
`;
const AboutList = styled.li`
  float: left;
  margin-left: 20px;
  color: white;
  font-weight: 900;
  font-size: 15px;
  cursor: pointer;
  
  display: block;
	position: relative;
	padding: 1em 1;
  
  &::after {
  content: '';
	position: absolute;
  padding-top: 1px;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 0.1em;
	background-color: white;
	opacity: 0;
	transition: opacity 300ms, transform 400ms;
  }
  &:hover::after,
&:focus::after {
	opacity: 1;
	transform: translate3d(0, 0.3em, 0);
}

`;

export default AboutAutohub;
