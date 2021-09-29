import React , { useRef, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
// import "../index.css";


function Floor() {


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

  
  const FloorClick = () => history.push("./Floor");
  const ContactClick = () => history.push("./Contact");
  

  return (
  <div>
<AboutMenuPart>
        <AboutListUl>
          <AboutList button type="button" onClick={AboutClick}>단지소개</AboutList>
          <AboutList button type="button" onClick={FloorClick}>층별안내</AboutList>
          <AboutList>단지사진</AboutList>
          <AboutList>특별 프로모션</AboutList>
          <AboutList button type="button" onClick={ContactClick}>오시는길</AboutList>
        </AboutListUl>
      </AboutMenuPart>


<FloorTable>
  <Table>
  <Tr>
    <Th>A동</Th>
    <Th>B동</Th>
    <Th>C동</Th>
  </Tr>

  </Table>
  

</FloorTable>

<InfoTable>
<Table1>
  <Tr1>
    <Th1 style={{width:"80px"}}>4F</Th1>
    <Th1>볼링장,골프장,<br/><br/> 키즈카페,헬스장</Th1>
    <Th1>고객주차장</Th1>
    <Th1>자동차 경매실</Th1>
  </Tr1>

  </Table1>

  <Table1>
  <Tr1>
    <Th1 style={{width:"80px"}}>3F</Th1>
    <Th1>매매상사,식당,카페<br/><br/> 편의점,사무실</Th1>
    <Th1>고객주차장</Th1>
    <Th1>세차/광택<br/><br/>타이어/휠 복원</Th1>
  </Tr1>

  </Table1>
  <Table1>
  <Tr1>
    <Th1 style={{width:"80px"}}>2F</Th1>
    <Th1 style={{height:"150px"}}>매매상사,고객지원센터<br/><br/>차량등록사무소, 카페, 편의점<br/><br/>
    병원,약국,중앙정원,사무실</Th1>
    <Th1>고객주차장</Th1>
    <Th1>자동차 경매실</Th1>
  </Tr1>

  </Table1>
  <Table1>
  <Tr1>
    <Th1 style={{width:"80px"}}>1F</Th1>
    <Th1>매매상사,특별전시장,카페<br/><br/>금융사,용인시 지부,사무실</Th1>
    <Th1>고객주차장</Th1>
    <Th1>성능점검장</Th1>
  </Tr1>

  </Table1>
  <Table1>
  <Tr1>
    <Th1 style={{width:"80px"}}>B1F</Th1>
    <Th1>차량 전시장</Th1>
    <Th1>차량 전시장</Th1>
    <Th1>자동차 용품 전문점</Th1>
  </Tr1>

  </Table1>
  <Table1>
  <Tr1>
  <Th1 style={{width:"80px"}}>B2F</Th1>
    <Th1>차량 전시장</Th1>
    <Th1>차량 전시장</Th1>
    <Th1>엔카 포토존</Th1>
  </Tr1>

  </Table1>
  <Table1>
  <Tr1>
    <Th1 style={{width:"80px"}}>B3F</Th1>
    <Th1>차량 전시장</Th1>
    <Th1>차량 전시장</Th1>
    <Th1>차량 전시장</Th1>
  </Tr1>

  </Table1>
  <Table1>
  <Tr1>
    <Th1 style={{width:"80px"}}>B4F</Th1>
    <Th1>매매상사, 차량 전시장</Th1>
    <Th1>차량 전시장</Th1>
    <Th1></Th1>
  </Tr1>

  </Table1>

</InfoTable>





  </div>
  )
}

const AboutMenuPart = styled.div`
 
`;
const AboutListUl = styled.ul`
  list-style: none;
  padding-left: 145px;
  margin-top: 10px;
`;
const AboutList = styled.li`
  float: left;
  margin-left: 60px;
  color: black;
  font-weight: 900;
  font-size: 15px;
  cursor: pointer;

  display: block;
  position: relative;
  padding: 1em 1;

  &::after {
    content: "";
    position: absolute;
    padding-top: 1px;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: black;
    opacity: 0;
    transition: opacity 300ms, transform 400ms;
  }
  &:hover::after,
  &:focus::after {
    opacity: 1;
    transform: translate3d(0, 0.3em, 0);
  }

  
`;
const FloorTable = styled.div`
 padding-top: 100px;
 margin-left: 100px;
 
`;
const Table = styled.table`
    width: 80%;
    
    margin-left: 50px;
    border: 1px solid #444444;
    border-collapse: collapse;
    
`;
const Tr = styled.tr`
  
`;
const Th = styled.th`
  border: 1px solid #444444;
  height: 60px;
`;
const InfoTable = styled.div`
padding-top: 50px;
margin-left: 30px;
`;
const Table1 = styled.table`
width: 82%;
    
    margin-left: 40px;
    border: 1px solid #444444;
    border-collapse: collapse;
`;
const Tr1 = styled.tr`
  
`;
const Th1 = styled.th`
  border: 1px solid #444444;
  height: 80px;
  width: 360px;
`;


export default Floor;
