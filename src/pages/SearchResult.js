import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function SearchResult() {
  const history = useHistory();
  const HomeClick = () => history.push("./");

  const BuyClick = () => history.push("./Buy");
  const SellClick = () => history.push("./Sell");
  const ManagedClick = () => history.push("./Managed");
  const CCenterClick = () => history.push("./CCenter");
  const JoinClick = () => history.push("./Join");
  const LoginClick = () => history.push("./Login");

  const SearchClick = () => history.push("./SearchResult.js");
  const HyundaiClick = () => history.push("./Hyundai");
  const KiaClick = () => history.push("./Kia");
  const BenzClick = () => history.push("./Benz");
  const BmwClick = () => history.push("./Bmw");
  const GenesisClick = () => history.push("./Genesis");

  return (
    <div>
      <Menu>
        <AutohubLogo
          src="/images/AUTOHUB Logo.png"
          alt="오토허브 로고"
          onClick={HomeClick}
        />

        <div style={{ display: "flex", width: "100%" }}>
          <HeaderList>
            <LeftsideMenuList button type="button" onClick={BuyClick}>
              살때
            </LeftsideMenuList>
            <LeftsideMenuList button type="button" onClick={SellClick}>
              팔때
            </LeftsideMenuList>
            <LeftsideMenuList button type="button" onClick={ManagedClick}>
              직영차
            </LeftsideMenuList>
            <LeftsideMenuList button type="button" onClick={CCenterClick}>
              고객센터
            </LeftsideMenuList>
          </HeaderList>

          <Rightside>
            <RightsideMenuList button type="button" onClick={LoginClick}>
              로그인
            </RightsideMenuList>

            <RightsideMenuList button type="button" onClick={JoinClick}>
              회원가입
            </RightsideMenuList>
          </Rightside>
        </div>
      </Menu>

      <div className="InputPart">
        <div className="Input" style={{ padding: "15px 20px" }}>
          <SearchInput type="text"></SearchInput>
          <FaSearch
            style={{
              width: "30px",
              height: "30px",
              position: "relative",
              left: "40px",

              bottom: "73px",
              color: "#f11843",
              cursor: "pointer",
            }}
          />
        </div>
      </div>

      <h2>회원가입 파트</h2>
      <p>아직 진행준입니다.</p>
    </div>
  );
}

const Menu = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
  margin-top: -10px;
  padding-right: 0px;
  background: #f11843;
  height: 80px;
  width: 100%;
`;

const AutohubLogo = styled.img`
  width: 150px;
  height: 40px;
  margin-left: 80px;
  cursor: pointer;
`;

const HeaderList = styled.div`
  display: flex;
  width: 50%;
`;

const LeftsideMenuList = styled.div`
  list-style: none;
  margin-left: 40px;

  color: white;

  font-weight: 900;
  font-size: 15px;
  cursor: pointer;
`;

const Rightside = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-end;
  padding-right: 100px;
`;

const RightsideMenuList = styled.div`
  color: white;
  font-weight: 900;
  font-size: 15px;
  cursor: pointer;
  margin-left: -10px;
  padding-right: 30px;
`;

const SearchInput = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 30px;
  border: solid #f11843 2px;
  font-size: 25px;
  padding-left: 30px;
  outline-width: 0;
  margin-left: 430px;
  position: relative;
  bottom: 80px;
  left: 90px;
`;
const Buttons = styled.div`
  display: flex;
  margin-bottom: 40px;
  padding-left: 160px;
`;
const Button = styled.button`
  margin-top: -45px;
  margin-left: 12px;
  width: 108px;
  height: 40px;

  border-radius: 30px;
  font-size: 12px;
  font-weight: 700;
  color: #f11843;
  background-color: white;
  transition-duration: 0.2s;
  border: 1px solid #f11843;
  cursor: pointer;
  &:hover {
    background-color: #66180ef6;
    color: white;
  }
`;

export default SearchResult;
