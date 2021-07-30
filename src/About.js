import React from 'react';

function About () {
    return (
        <div className ="About"> 
        <div className ="AboutList">
            <ul>
                <li className ="FourList">회사소개</li>
                <li className ="FourList">이용약관</li>
                <li className ="FourList">개인정보처리방침</li>
                <li className ="FourList">마케팅</li>
            </ul>
        </div>
        <div className="OtherInformation">
            <h3 className ="CompanyNumber">사업자등록번호</h3>
            <p className ="CompanyNumberTwo">454-88-00618</p>
            <h3 className ="Private">개인정보바책임자</h3>
            <p className ="PrivateManager">이동녕</p>
        </div>
            <h3 className ="AddressTwo">주소</h3>
            <p className="AddressOne">경기도 용인시 기흥구 중부대로 242(영덕동 21-1)</p>
            
            
        </div>
    );
};

export default About;