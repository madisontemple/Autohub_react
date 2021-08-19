import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import Search from './icon/search-solid.svg';
import Arrow from './icon/arrow-alt-circle.svg';


// function CarButton({ car }) {
//   return <button>{car}</button>
// }
function Main({ name, picture }) {
  return (
    <div>
      <img src={picture} alt={name} />
    </div>
  )
}

// Main.propTypes = {
//     name: PropTypes.string.isRequired,
//     picture: PropTypes.string.isRequired
// };

function App()  {


    
    return (
      

        <React.Fragment>
      
      

        <Header>
          <AutohubLogo src="/images/AUTOHUB Logo.png" alt="오토허브 로고"　/>
        <HeaderList>
          
           
            <LeftsideMenuList>살때</LeftsideMenuList>
            <LeftsideMenuList>팔때</LeftsideMenuList>
            <LeftsideMenuList>직영차</LeftsideMenuList>
            <LeftsideMenuList>고객센터</LeftsideMenuList>
            
           

           <Rightside>

          
            <RightsideMenuList>회원가입</RightsideMenuList>
            <RightsideMenuList>로그인</RightsideMenuList>
          
          </Rightside> 
        
        </HeaderList>
        
        <LeftSide>
          <LeftsideImage
            src="/images/Autohub.HeadersLeft.png"
            alt="이렇게 똑똑한 중고차검색은 처음일꺼야."
          />

       </LeftSide> 
      
          <SearchSide>

          <SearchComment>
            지금 바로 키워드로 검색해보세요! 무엇이든 찾아드립니다.
          </SearchComment>
          <SearchInput></SearchInput>
          <SearchIcon src={Search} alt="search" />

        <Buttons>
        

          <Button>현대</Button>
          <Button>기아</Button>
          <Button>벤츠</Button>
          <Button>BMW</Button>
          <Button>아우디</Button>
        </Buttons>
        </SearchSide>  
        </Header>

        <MainContents>
         <MainCommentPart>
          <MainComment>인기있는 4대의 자동차</MainComment> 

         </MainCommentPart> 
          <MainContentsImages>

            <MainImage>
            <ServiceLink href="https://blog.naver.com/ats00673" target="blank">
            <MainImage1 src="/images/Autohub.Main1.png" alt="main1" />  

            </ServiceLink>

            </MainImage>

           <OtherImagesArea>
          <OtherImages src="/images/Autohub.Main2.png" alt="main2" />
          <OtherImages src="/images/Autohub.Main3.png" alt="main3" />
          <OtherImages src="/images/Autohub.Main4.png" alt="main4" />
          <OtherImages src="/images/Autohub.Main5.png" alt="main5" />

            {/* {MainCars.map(model => (
              <Main 
              key={model.id} 
              name={model.name} 
              picture={model.image} />

          ))}   */}

          </OtherImagesArea>  

          </MainContentsImages>
         </MainContents> 

        <FinsetPart>
          <FinsetImage src="/images/FinsetImage.png" alt="FinsetN Image" />
        </FinsetPart>
        <FaqPart>
          <FaqLogo>FAQ</FaqLogo>
        <FaqListPart>
        <ul>

          <FaqList>차량 구매시 필요설는 무엇인가요?</FaqList>
          <FaqList>차량 구매 시 카드로 구매가 가능한가요?</FaqList>
          <FaqList>대차구매(차량및교환)가 가능한가요?</FaqList>
        </ul>
        </FaqListPart>
        </FaqPart>
        
        {/* <CustomerCenter>고객센터</CustomerCenter> */}
        {/* <PhoneBox /> */}
        {/* <PhoneNumber>1588-1414</PhoneNumber> */}
        {/* <OfficeDay>
          연중무휴
          <br />
          09:00 ~ 18:00
        </OfficeDay> */}
        {/* <LocationBox></LocationBox>
        <LocationGuide>위치안내</LocationGuide>
        <Arrow1>➔</Arrow1>
        <OneOnOne></OneOnOne>
        <OneOnOneText>1:1 문의</OneOnOneText>
        <Arrow2>➔</Arrow2> */}

        {/* <Footer>
          <ul>
            <AboutCompanyList>회사소개</AboutCompanyList>
            <AboutCompanyList>이용약관</AboutCompanyList>
            <AboutCompanyList>개인정보처리방침</AboutCompanyList>
            <AboutCompanyList>마케팅</AboutCompanyList>
          </ul>

          <CompanyInfo1>
            사업자등록번호 <strong>454-88-00618</strong> 개인정보책임자{' '}
            <strong> 이동녕 </strong>
            <br />
          </CompanyInfo1>
          <CompanyInfo2>
            주소 <strong>경기도 용인시 기흥구 중부대로 242(영덕동 21-1)</strong>{' '}
            <br />
          </CompanyInfo2>
          <CompanyInfo3>
            Tell<strong> 1811-9393 </strong> Fax{' '}
            <strong>031) 5182-5009 </strong> Email{' '}
            <strong>admin@nsautohub.com</strong>
            <br />{' '}
          </CompanyInfo3>

          <Copyrights>Copyrights © AUTOHUB. All rights reserved.</Copyrights>
        </Footer>  */}
      
      </React.Fragment>
      
    )
}


const MainCars = [
    
    {
        id: 1,
        name: "Main2",
        image:
            "/images/Autohub.Main2.png"
    },
    {
        id: 2,
        name: "Main3",
        image:
            "/images/Autohub.Main3.png"
    },
    {   
        id: 3,
        name: "Main4",
        image:
            "/images/Autohub.Main4.png"
    },
    {
        id: 4, 
        name: "Main5",
        image:
            "/images/Autohub.Main5.png"
    },
]


const Header = styled.div`
    
    width: 100%;
    height: 320px;
    background: #F11843;
    
`;

const AutohubLogo = styled.img`
    width: 150px;
    height: 40px;
    padding-top: 15px;
    padding-left: 80px;
    font-weight: 700;
    cursor: pointer;
    float: left;
    position: relative;
`;

const HeaderList = styled.div`


`;

const LeftsideMenuList = styled.li`
    position: relative;
    list-style: none;
    float: left;
    color: white;
    padding-top: 27px;
    padding-right: -5px;
    padding-left: 60px;
    font-weight: 900;
    font-size: 15px;
    cursor: pointer;
    
`;

const Rightside =styled.div`

`;

const RightsideMenuList = styled.li`    
   
    
    list-style: none;
    float: right;
    padding-top: 27px;
    padding-right: 130px;
    margin-left: -80px;
    color: white;
    font-weight: 900;
    font-size: 15px;
    cursor: pointer; 
    
`;

const LeftSide = styled.div`
  
`;
const LeftsideImage = styled.img`
    width: 580px;
    
    padding-top: 80px;
    margin-left: -540px;
`;

const SearchSide = styled.div`

`;
const SearchComment = styled.div `
    
    margin-top: -190px;
    margin-right: 400px;
    color: white;
    font-weight: 700;
    font-size: 15px;
    float: right;

`;
const SearchArea = styled.div`

`;
const SearchInput = styled.input `
    float: right;
    margin-top: -150px;
    margin-right: 120px;
    margin-bottom: -30px;
    padding-bottom: -10px;
    width    : 600px;
    height   : 50px;
    border-radius: 30px;
    border   : none;
    font-size: 25px;
    outline  : 0;
    padding  : 0.5em;
    padding-left: 20px;
`;

const SearchIcon = styled.img `
    
    float: right;
    margin-top: -135px;
    margin-right: 150px;
    width: 40px;
    height: 45px;
    cursor: pointer;

`
const Buttons = styled.div`
    margin-top: 0px;
    padding-top: 0px;
    padding-right: 140px;

`;
const Button = styled.button `
    
    float: right;
    margin-left: 15px;
    margin-top: -39px;
    
    width: 108px;
    height: 40px;
    border-radius: 30px;
    font-size: 12px;
    font-weight: 700;
    color: white;
    background-color: #F11843;
    transition-duration: 0.2s;
    border: 1px solid white;
    cursor: pointer;
&:hover {
    background-color: #66180ef6;
    color: white;
}
`;

// const Button2 = styled.button `
//     
//     top: 340px;
//     right: 510px;
//     width: 108px;
//     height: 40px;
//     border-radius: 30px;
//     font-size: 15px;
//     font-weight: 700;
//     color: white;
//     background-color: #F11843;
//     transition-duration: 0.2s;
//     border: 1px solid white;
//     cursor: pointer;
// &:hover {
//     background-color: #66180ef6;
//     color: white;
// }
// `;

// const Button3 = styled.button `
//     position: absolute;
//     top: 340px;
//     right: 380px;
//     width: 108px;
//     height: 40px;
//     border-radius: 30px;
//     font-size: 15px;
//     font-weight: 700;
//     color: white;
//     background-color: #F11843;
//     transition-duration: 0.2s;
//     border: 1px solid white;
//     cursor: pointer;
// &:hover {
//     background-color: #66180ef6;
//     color: white;
// }
// `;
// const Button4 = styled.button `
//     position: absolute;
//     top: 340px;
//     right: 250px;
//     width: 108px;
//     height: 40px;
//     border-radius: 30px;
//     font-size: 15px;
//     font-weight: 700;
//     color: white;
//     background-color: #F11843;
//     transition-duration: 0.2s;
//     border: 1px solid white;
//     cursor: pointer;
// &:hover {
//     background-color: #66180ef6;
//     color: white;
// }
// `;
// const Button5 = styled.button `
//     position: absolute;
//     top: 340px;
//     right: 120px;
//     width: 108px;
//     height: 40px;
//     border-radius: 30px;
//     font-size: 15px;
//     font-weight: 700;
//     color: white;
//     background-color: #F11843;
//     transition-duration: 0.2s;
//     border: 1px solid white;
//     cursor: pointer;
// &:hover {
//     background-color: #66180ef6;
//     color: white;
// }
// `;
const MainContents = styled.div`
    
`;
const MainCommentPart = styled.div`

`;
const MainComment = styled.div`
    padding-top: 100px;
    padding-left: 90px;
    font-weight: 700;
    font-size: 25px;
`;

const MainContentsImages = styled.div`

`;
const ServiceLink = styled.a`
  border-radius: 30px;
`;
const MainImage = styled.div`
  border-radius: 30px;
`;
const MainImage1 = styled.img`
    
    padding-left: 90px;
    padding-top: 30px;
    height: 630px;
    width: 600px;
    border-radius: 30px;
    cursor: pointer;
`;
const OtherImagesArea = styled.div`
    
`;

const OtherImages = styled.img`
   
    top: 600px;
    left: 730px;
    height: 300px;
    width: 300px;
    border-radius: 30px;
    cursor: pointer;
`;
const MainImages3 = styled.img`
    position: absolute;
    top: 930px;
    left: 730px;
    height: 300px;
    width: 300px;
    border-radius: 30px;
    cursor: pointer;
`;
// // const MainImages4 = styled.img`
// //     position: absolute;
// //     top: 600px;
// //     left: 1050px;
// //     height: 300px;
// //     width: 300px;
// //     border-radius: 30px;
// //     cursor: pointer;
// // `;
// // const MainImages5 = styled.img`
// //     position: absolute;
// //     top: 930px;
// //     left: 1050px;
// //     height: 300px;
// //     width: 300px;
// //     border-radius: 30px;
// //     cursor: pointer;
// // `;
const FinsetPart = styled.div`
    
`;
const FinsetImage = styled.img`
    width: 1250px;
    height: 300px;
    cursor: pointer;
    padding-left: 90px;
    
   
`;
const FaqPart = styled.div`
    position: absolute;
`;
const FaqLogo = styled.p`
    padding-top: 1700px;
    padding-left: 100px;
    font-weight: 800;
    font-size: 30px;
`;
const FaqListPart = styled.div `

`;

const FaqList = styled.li`
    list-style: none;
    text-decoration: underline;
    
    text-underline-offset: 20px;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    margin-top: 40px;
    

`;
// const Faq1 = styled.p`
//     cursor: pointer;
//     text-underline-offset: 20px;
//     text-decoration: underline; 
//     font-weight: 700;
//     font-size: 20px;
//     padding-left: 100px;
    
// `;
// const Faq2 = styled.p`
//     cursor: pointer;
//     text-underline-offset: 20px;
//     text-decoration: underline; 
//     font-weight: 700;
//     font-size: 20px;
//     padding-top: 20px;
//     padding-left: 100px;

// `;
// const Faq3 = styled.p`
//     cursor: pointer;
//     text-underline-offset: 20px;
//     text-decoration: underline; 
//     font-weight: 700;
//     font-size: 20px;
//     padding-top: 20px;
//     padding-left: 100px;

// `;
// const  CustomerCenter = styled.p`
    
//     font-size: 25px;
//     font-weight: 800;
//     left: 700px;
//     top: 1710px;
// `;
// const PhoneBox = styled.div`
    
//     left: 700px;
//     top: 1800px;
//     width: 285px;
//     height: 162px;
//     border: 1px solid gray;
//     border-radius: 10px;
//     cursor: text;
// `;
// const PhoneNumber = styled.h3`
   
//     left: 720px;
//     top: 1790px;
//     color: red;
//     font-size: 30px;
// `;
// const OfficeDay = styled.h3`
   
//     left: 725px;
//     top: 1890px;
//     font-size: 15px;
//     color: 	#808080;    
// `;
// const LocationBox = styled.div`
   
//     left: 1000px;
//     top: 1800px;
//     width: 285px;
//     height: 71px;
//     border: 1px solid gray;
//     border-radius: 10px;
//     cursor: text;
// `;
// const LocationGuide = styled.div`
   
//     left: 1020px;
//     top: 1827px;
//     font-size: 16px;
//     font-weight: 800;
//     color: 	#808080;
// `;
// const Arrow1 = styled.button `
    
//     top: 1812px;
//     right: 170px;
//     width: 48px;
//     height: 48px;
//     border-radius: 50px;
//     border: 1px solid #F11843;
//     background-color: white;
//     color: #F11843;
//     cursor: pointer;
// &:hover {
//     background-color: #F11843;
//     color: white;
// }
// `;
// const OneOnOne = styled.div`
   
//     left: 1000px;
//     top: 1890px;
//     width: 285px;
//     height: 71px;
//     border: 1px solid gray;
//     border-radius: 10px;
//     cursor: text;
// `;
// const OneOnOneText = styled.div`
    
//     left: 1020px;
//     top: 1917px;
//     font-size: 16px;
//     font-weight: 800;
//     color: 	#808080;
// `;
// const Arrow2 = styled.button `
    
//     top: 1900px;
//     right: 170px;
//     width: 48px;
//     height: 48px;
//     border-radius: 50px;
//     border: 1px solid #F11843;
//     background-color: white;
//     color: #F11843;
//     cursor: pointer;
// &:hover {
//     background-color: #F11843;
//     color: white;
// }
// `;
// const Footer = styled.div`
//     width: 100%;
//     height: 300px;
//     background: #F7F7F7;
    
//     top: 2000px;
// `;
// const  AboutCompanyList= styled.li`
//     margin-top: 60px;
//     list-style: none;
//     float: left;
//     color: #808080;
//     padding-top: 25px;
//     padding-right: -5px;
//     padding-left: 60px;
//     font-weight: 900;
//     font-size: 12px;
//     cursor: pointer;
// `;
// const CompanyInfo1 = styled.p`
    
//     bottom: 90px;
//     left: 100px;
//     font-size: 12px;
//     font-weight: 800;
//     color: 	#808080;
//     word-spacing: 5px;
// `;
// const CompanyInfo2 = styled.p`
    
//     bottom: 70px;
//     left: 100px;
//     font-size: 12px;
//     font-weight: 800;
//     color: 	#808080;
//     word-spacing: 5px;
// `;
// const CompanyInfo3 = styled.p`
    
//     bottom: 50px;
//     left: 100px;
//     font-size: 12px;
//     font-weight: 800;
//     color: 	#808080;
//     word-spacing: 3px;
// `;
// const Copyrights = styled.p`
    
//     font-size: 12px;
//     bottom: 30px;
//     left: 100px;
//     color: 	#808080;
// `;

export default App;

