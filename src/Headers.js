import React from 'react';
import './Headers.css';
import styled from 'styled-components';

const Header = styled.div`
  background-color: #F11843;
  height: 100px;
  
  
  
`;
const HeaderLogo = styled.h2`
  font-size: 30px;
  width: 200px;
  color:white;
  font-weight: 700;
  float: left;
  padding-top: 25px;
  padding-left: 70px;    
      `;

  const LeftsideMenu = styled.div`
  list-style: none;
  float: left;
  color: white;
  font-weight: 700;
  font-size: 15px;
  padding: 17px 15px;
  cursor: pointer;

  transition-duration: 0.2s;
    border: none;
  
    &:hover {
      background-color: #66180ef6;
  color: white;
  border-radius: 30px;
    }
  `;
  
  const RightsideMenu = styled.li `
  position: relative;
top: 3px;
left: 600px;
padding: 17px 15px;

color: white;
font-weight: 700;
font-size: 15px;
cursor: pointer;
float: left;

list-style: none;

transition-duration: 0.2s;
    border: none;

    &:hover {
      background-color: #66180ef6;
  color: white;
  border-radius: 30px;
    }
  
  `;

function Headers() {
    
 


        return (
          
            <header><Header>


             <div className="header-logo"><h2><HeaderLogo>AUTOHUB</HeaderLogo></h2></div>
            
            <div className="leftside">
             <ul>
            
              <li><LeftsideMenu>살때</LeftsideMenu></li>
              <li><LeftsideMenu>팔때</LeftsideMenu></li>
              <li><LeftsideMenu>직영차</LeftsideMenu></li>
              <li><LeftsideMenu>고객센터</LeftsideMenu></li>
            
             </ul>
            </div>
    
            
            <div className="rightside">
            <ul className="rightsideUl">
            <RightsideMenu>

            <li className="rightsideMenu">로그인</li>
            <li className="rightsideMenu">회원가입</li>
            </RightsideMenu>
            </ul>
            </div>
            </Header>

    
            </header>

          
            
        );
        
    
}




export default Headers;