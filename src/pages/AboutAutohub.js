import React , { useRef, useEffect } from "react";
import styled from "styled-components";
import Map from "../shared/Map";
import { useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { BiBuildings } from "react-icons/bi";
import "../index.css";
import Home from "./Home";






function AboutAutohub() {
  
  
  


  
  const openForm = () =>
    (document.getElementById("myForm").style.display = "block");

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

      <IntroPart>
        <h2>오토허브 소개</h2>
        <AutohubImage src="/images/AutohubBuilding.png" />

        <p>자동차 매매단지의 패러다임을 바꾼 오토허브입니다.</p>

        <p>
          61,000 여평 규모의 오토허브는 2018년부터 운영된 최초의 대형
          매매단지로서
          <br />
          현재까지 허위매물 없이 안전하게 단지 운영을 하여 고객들에게 사랑을
          받아오고 있습니다.
        </p>

        <p>
          차량판매 시설뿐만 아니라 상품화 시설부터 차량등록 사무소까지
          <br />
          단지에 입점되어있어 상사 운영자와 고객 모두에게 최고의 서비스를
          제공하고 있습니다.
        </p>
        <p>
          또한 전문 식당, 카페, 편의점 등이 있어 단지 방문 고객은 편리한 단지
          이용 경험을 할 수 있으며,
          <br />
          이 밖에도 병원, 볼링장, 스크린 골프장 등 다양한 생활시설도 입점해 있어
          자동차 복합 문화 공간으로서 <br />
          완벽한 모습을 갖추고 있습니다.
        </p>
      </IntroPart>
      <BuildArea>
        <h2>세부 면적</h2>
        <p>
          최대8,000대의 실내 전시가 가능하며, 최대1,300대의 고객 주차가 가능한
          대형 복합 단지입니다.
        </p>
        <BuildButton onclick="openForm()">
          <BiBuildings />
          <Span>건축 면적 정보</Span>
        </BuildButton>

        <Table id="myForm">
          <Tr>
            <Th>건축 면적 정보</Th>
            <Th></Th>
            <Th></Th>
            <Th></Th>
          </Tr>
          <Tr>
            <Td>토지면적</Td>
            <Td>88,716m² </Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td>건축연면적</Td>
            <Td>175,676,72m² </Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td>용도</Td>
            <Td>자동차 관련 시설 및 부대시설</Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td>층수</Td>
            <Td>지라4층, 지하4층</Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td>건폐율</Td>
            <Td>16.81%</Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td>용적률</Td>
            <Td>55.15%</Td>
            <Td></Td>
            <Td></Td>
          </Tr>

          <Th>용도별 면적</Th>

          <Tr>
            <Th>구분</Th>
            <Th>면적</Th>
            <Th>구성비</Th>
            <Th>구분</Th>
          </Tr>
          <Tr>
            <Td>전시장</Td>
            <Td>139,520m²</Td>
            <Td>(42,205평)</Td>
            <Td>79%</Td>
          </Tr>
          <Tr>
            <Td>근린생활</Td>
            <Td>20,631m²</Td>
            <Td>(6,241평)</Td>
            <Td>12%</Td>
          </Tr>
          <Tr>
            <Td>정비시설</Td>
            <Td>15,526m²</Td>
            <Td>(4,697평)</Td>
            <Td>9%</Td>
          </Tr>
          <Tr>
            <Td>합계</Td>
            <Td>175,677m²</Td>
            <Td>(53,142평)</Td>
            <Td>100%</Td>
          </Tr>
          <Tr>
            <Td>구분</Td>
            <Td>면적</Td>
            <Td>구성비</Td>
            <Td>구분</Td>
          </Tr>
          <Tr>
            <Td>* 별도. 고객 주차장:27,500m²(8,319평) 1,270대</Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </Tr>
        </Table>
      </BuildArea>
      <IntroFacilities>
        <h2>시설 안내</h2>
        <p>다양한 시설이 입점 되어 있는 자동차 복합 문화 공간</p>
        <Table1>
          
            <tr>
              <Td1>자동차 관련시설</Td1>
              <Td1>상품화 관련 시설</Td1>
              <Td1>근린 생활 시설</Td1>
            </tr>
            <tr>
              <Td1>매매상사 및 차량 전시장 <br/>
              자동차 경매장 <br/>
              차량 용품 전문점<br/>
              금융사(캐피탈, 보험) <br/>
              차량 등록 사무소</Td1>
              <Td1>1급 정비소 <br/>
              성능 점검장 <br/>
              세차/광택<br/>
              포토존 <br/>
              기타 정비 및 휠 복원</Td1>
              <Td1>전문 식당가, 카페 <br/>
              병원(종합검진, 치과 등)<br/>
              약국, 편의점<br/>
              볼링장, 골프장, 헬스장 <br/>
              키즈 카페</Td1>
            </tr>
          
        </Table1>

      </IntroFacilities>
    <LocationPart>
    
    
    <h2>단지 위치 안내</h2>
    <p>최적의 교통 환경과 입지<br />
    수원신갈IC와 3분 거리에 위치하여 서울 강남권과 경기 남부 30분 이내에 도착 가능</p>
    </LocationPart>

    <EightPoints>
      <h2>오토허브 입점 포인트 8가지</h2>
      <p style={{fontSize:"22px" ,fontWeight:"600"}}>1. 매입 자금 지원 시스템</p>
      <p style={{fontSize:"22px",marginLeft:"30px"}}>최대 10억원의 저금리 금융 지원</p>

      <p style={{fontSize:"22px" ,fontWeight:"600"}}>2. 경매/공매 통한 차량 매입</p>
      <p style={{fontSize:"22px",marginLeft:"30px"}}>입주업체(오토헨즈 공.경매장, AJ셀카 경매장) 제휴 혜택</p>

      <p style={{fontSize:"22px" ,fontWeight:"600"}}>3. 엔카닷컴 제휴 단지</p>
      <p style={{fontSize:"22px",marginLeft:"30px"}}>입점 상사의 엔카 촬영 제휴 할인</p>

      <p style={{fontSize:"22px" ,fontWeight:"600"}}>4. 서울 강남권 30분 이내 도착 가능</p>
      <p style={{fontSize:"22px",marginLeft:"30px"}}>수원IC(경부/영동),수원신갈IC(경부/용서)3분 거리 위치</p>

      <p style={{fontSize:"22px" ,fontWeight:"600"}}>5. 매입에서 등록까지 원스톱</p>
      <p style={{fontSize:"22px",marginLeft:"30px"}}>단지 내 차량등록사업 출장소 운영</p>

      <p style={{fontSize:"22px" ,fontWeight:"600"}}>6. 최대 8,000여대 차량 전시장</p>
      <p style={{fontSize:"22px",marginLeft:"30px"}}>쾌적한 8,000여대 실내 전시장</p>

      <p style={{fontSize:"22px" ,fontWeight:"600"}}>7. 최대 1,300여대 고객 주차장</p>
      <p style={{fontSize:"22px",marginLeft:"30px"}}>회원사와 방문고객에게 모두 편리한 고객 주차장</p>

      <p style={{fontSize:"22px" ,fontWeight:"600"}}>8. 단지 내 다양한 편의시설</p>
      <p style={{fontSize:"22px",marginLeft:"30px"}}>종합검진센터(병원), 스크린 골프장, 볼링장, 키즈카페 등</p>

      <p style={{fontSize:"22px" ,fontWeight:"700",paddingTop:"50px"}}>임대 문의</p>
      <p style={{fontSize:"22px" ,fontWeight:"500"}}>(주)신동해홀딩스 사업관리팀</p>
      <p style={{fontSize:"22px" ,fontWeight:"500"}}>Tel. 031-5182-5027</p>
      <p style={{fontSize:"22px" ,fontWeight:"500"}}>Email:dnlee@autohub.co.kr</p>


    </EightPoints>
      
    </div>
  );
}

const AboutMenuPart = styled.div`
  background-color: #f11843;
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

const IntroPart = styled.div`
  padding-top: 50px;
  margin-left: 85px;
`;
const AutohubImage = styled.img`
  height: 350px;
`;

const BuildArea = styled.div`
  padding-top: 50px;
  margin-left: 85px;
`;
const BuildButton = styled.button`
  font-size: 20px;
  font-weight: 700;
  background-color: white;
  cursor: pointer;
  border-radius: 5px;
  width: 200px;
  height: 40px;
  box-shadow: 0 4px #999;
  &:hover {
    background-color: #e3dfdb;
  }
  &:active {
    background-color: #e3dfdb;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;
const Span = styled.span`
  cursor: pointer;
  display: inline-block;
  
  transition: 0.5s;
  &:after {
    content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
  }
&:hover {
  padding-bottom: 25px;
}
&:hover::after {
  opacity: 1;
  right: 0;
}

`;

const Table = styled.table`
  
  border-collapse: collapse;
  border-spacing: 0;
  width: 80%;
  border: 1px solid black;
  font-size: 20px;
  z-index: 9;
`;
const Th = styled.th`
  text-align: left;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 40px;
`;
const Td = styled.td`
  text-align: left;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 30px;
`;
const Tr = styled.tr`
  border-bottom: 1px solid #ddd;
  &:hover {
    background-color: #e3dfdb;
  }
`;
const IntroFacilities = styled.div`
  padding-top: 50px;
  margin-left: 85px;
`;
const Table1 = styled.table`

  border: 1;
  width: 80%;
  border: 1px solid black;
  font-size: 20px;
  
`;
const Td1 =styled.th`
  text-align: center;
  margin: auto;
  
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 40px;
`;
const LocationPart = styled.div`
padding-top: 50px;
  margin-left: 85px;
`;
const EightPoints = styled.div`
    padding-top: 50px;
  margin-left: 85px;
`;  


export default AboutAutohub;
