import React, { useRef, useEffect } from "react";
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
          <AboutList button type="button" onClick={AboutClick}>
            단지소개
          </AboutList>
          <AboutList button type="button" onClick={FloorClick}>
            층별안내
          </AboutList>
          <AboutList>단지사진</AboutList>
          <AboutList>특별 프로모션</AboutList>
          <AboutList button type="button" onClick={ContactClick}>
            오시는길
          </AboutList>
        </AboutListUl>
      </AboutMenuPart>

      <FloorTable>
        <h2 style={{marginLeft:"90px"}}>층별가이드</h2>
        <HR></HR>
        <Comment>
          "아래의 각 층 <Comment1>클릭</Comment1>시 상세안내로 이동할 수
          있습니다."
        </Comment>

        <div>
          <AutohubBuilding src="/images/Autohub_BuldingFloor.png" />
        </div>

        {/* <Table>
  <Tr>
    <Th>A동</Th>
    <Th>B동</Th>
    <Th>C동</Th>
  </Tr>

  </Table> */}
        <InfoTable style={{ }}>
          
            
            
            <Table1 style={{width:"260px",marginRight:"100px" }}>
              <Tr1>
                <Th1 style={{  }}>C동</Th1>
              </Tr1>
              <Tr1>
                
                <Th2>
                <span style={{marginRight:"50px"}}>4F</span>
                  <span style={{paddingRight:"80px"}}> 자동차 경매장</span>
                </Th2>
              </Tr1>
              <Tr1>
                {/* <Th2 style={{ width: "80px" }}>3F</Th2> */}
                <Th2>
                <span style={{marginRight:"65px", position:"relative",top:"10px" }}>3F</span>
                  <span style={{paddingRight:"90px"}} >
                    세차 / 광택 <br />
                  </span>
                    <span>타이어 /휠 복원</span>
                </Th2>
              </Tr1>
              <Tr1>
                {/* <Th2 style={{ width: "80px" }}>2F</Th2> */}
                <Th2>
                <span style={{marginRight:"50px"}}>2F</span>
                  <span style={{paddingRight:"80px"}}> 차량 정비</span>
                </Th2>
              </Tr1>
              <Tr1>
                {/* <Th2 style={{ width: "80px" }}>1F</Th2> */}
                <Th2>
                <span>1F</span>
                  <span>
                    성능점검장
                    <br />
                  </span>
                </Th2>
              </Tr1>
              <Tr1>
                {/* <Th2 style={{ width: "80px" }}>B1F</Th2> */}
                <Th2>
                <span>B1F</span>
                  <span>
                    자동차 용품 전문점
                    <br />
                  </span>
                </Th2>
              </Tr1>
              <Tr1>
                {/* <Th2 style={{ width: "80px" }}>B2F</Th2> */}
                <Th2>
                <span>B2F</span>
                  <span>
                    엔카 포도존
                    <br />
                  </span>
                </Th2>
              </Tr1>
              <Tr1>
                {/* <Th2 style={{ width: "80px" }}>B3F</Th2> */}
                <Th2>
                <span>B3F</span>
                  <span>
                    차량 전시장
                    <br />
                  </span>
                </Th2>
              </Tr1>
            </Table1>
          
            <Table1 style={{ width:"250px",marginRight:"100px"}}>
              <Tr1>
                <Th1 style={{  }}>B동</Th1>
              </Tr1>
              <Tr1>
                
                <Th2>
                <span style={{marginRight:"50px"}}>4F</span>
                  <span style={{paddingRight:"80px"}}> 고객 주차장</span>
                </Th2>
              </Tr1>
              <Tr1>
                <Th2>
                <span style={{ marginRight:"50px"}}>3F</span>
                  <span style={{paddingRight:"90px"}}>고객 주차장 </span>
                </Th2>
              </Tr1>
              <Tr1>
                <Th2>
                <span style={{marginRight:"50px"}}>2F</span>
                  <span style={{paddingRight:"80px"}}> 고객 주차장</span>
                </Th2>
              </Tr1>
              <Tr1>
                <Th2>
                <span style={{marginRight:"50px"}}>1F</span>
                  <span style={{paddingRight:"80px"}}> 고객 주차장</span>
                </Th2>
              </Tr1>
              <Tr1>
                
                <Th2>
                <span style={{marginRight:"50px"}}>B1F</span>
                  <span style={{paddingRight:"80px"}}> 차량 전시장</span>
                </Th2>
              </Tr1>
              <Tr1>
               
                <Th2>
                <span style={{marginRight:"50px"}}>B2F</span>
                  <span style={{paddingRight:"80px"}}> 차량 전시장</span>
                  
                </Th2>
              </Tr1>
              <Tr1>
                
                <Th2>
                <span style={{marginRight:"50px"}}>B3F</span>
                  <span style={{paddingRight:"80px"}}> 차량 전시장</span>
                </Th2>
              </Tr1>
            </Table1>
        
         
            
            
            <Table1 style={{ width:"530px",marginRight:"60px"}}>
              <Tr1>
                <Th1 style={{  }}>A동</Th1>
              </Tr1>
              <Tr1>
                
                <Th2>
                <span style={{marginRight:"50px"}}>4F</span>
                  <span style={{paddingRight:"80px"}}> 고객 주차장</span>
                </Th2>
              </Tr1>
              <Tr1>
                <Th2>
                <span style={{ marginRight:"50px"}}>3F</span>
                  <span style={{paddingRight:"90px"}}>고객 주차장 </span>
                </Th2>
              </Tr1>
              <Tr1>
                <Th2>
                <span style={{marginRight:"50px"}}>2F</span>
                  <span style={{paddingRight:"80px"}}> 고객 주차장</span>
                </Th2>
              </Tr1>
              <Tr1>
                <Th2>
                <span style={{marginRight:"50px"}}>1F</span>
                  <span style={{paddingRight:"80px"}}> 고객 주차장</span>
                </Th2>
              </Tr1>
              <Tr1>
                
                <Th2>
                <span style={{marginRight:"50px"}}>B1F</span>
                  <span style={{paddingRight:"80px"}}> 차량 전시장</span>
                </Th2>
              </Tr1>
              <Tr1>
               
                <Th2>
                <span style={{marginRight:"50px"}}>B2F</span>
                  <span style={{paddingRight:"80px"}}> 차량 전시장</span>
                  
                </Th2>
              </Tr1>
              <Tr1>
                
                <Th2>
                <span style={{marginRight:"50px"}}>B3F</span>
                  <span style={{paddingRight:"80px"}}> 차량 전시장</span>
                </Th2>
              </Tr1>
            </Table1>
          
        </InfoTable>
      </FloorTable>

      {/* <InfoTable>
<Table1>
  <Tr1>
    <Th1 style={{width:"80px"}}>4F</Th1>
    <Th1> <label for="label4F">볼링장,골프장,<br/><br/> 키즈카페,헬스장</label></Th1>
    <Input type="checkbox" id="label4F" />
    <div>

    </div>
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
  <HiddenImage src="/images/Autohub.Main1.png"/>
</InfoTable> */}
    </div>
  );
}

const AboutMenuPart = styled.div``;
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
  
`;
const HR = styled.hr`
  width: 90%;
  justify-content: center;
  display: flex;
 
  align-items: center;
  
`;
const Comment = styled.span`
  font-size: 20px;
  font-weight: 700;
  font-family: inherit;
  display: flex;
 margin-left: 90px;
 justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
const Comment1 = styled.span`
  font-size: 20px;
  color: #f11843;
`;

const AutohubBuilding = styled.img`
  width: 80%;
  height: 200px;
  margin-top: 50px;
  margin-left: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoTable = styled.div`
  
  margin-left: 30px;
  
  /* flex-wrap: initial; */
  display: flex;
  flex-grow: 0;
  justify-content: center;
  align-items: center;
 

  
`;
const CTable = styled.div`

  
`;
const BTable = styled.div`

`;
const ATable = styled.div`

`;

const Table1 = styled.table`
  /* margin-left: auto;
  margin-right: auto; */
  border-collapse: separate;
  border-spacing: 0 0 15px 15px;
  
  table-layout: fixed;
  
`;
const Tr1 = styled.tr`

`;
const Th1 = styled.th`
  border-top: 3px solid #444444;
  border-bottom: 1px solid #444444;
  height: 30px;

  cursor: pointer;
  padding: 10px;
  &:hover {
    background-color: #e8e8e8;
  }
`;
const Th2 = styled.th`
  border-bottom: 1px solid #444444;
  text-align: center;
  height: 30px;
  width: 400px;
  cursor: pointer;
  padding: 10px;
  &:hover {
    background-color: #e8e8e8;
  }
`;

const Input = styled.input`
  display: none;
  &:input:checked ~ .HiddenImage {
    padding: 10px 0;
    height: auto;
    opacity: 1;
  }
`;

const HiddenImage = styled.img`
  height: 0;
  padding: 0;
  overflow: hidden;
  opacity: 0;
  transition: 0.8s;
`;
export default Floor;
