import React from 'react';

function Faq () {
    return (
        <div className="FaqArea">
        <h2 className="FAQ">FAQ</h2>
        <h2 className="CustomerCenter">고객센터</h2>

        <h3 className="FirstFaq"><u>차량 구매시 필요서루는 무엇인가요?</u></h3>
        <h3 className="SecondFaq"><u>차량 구매 시 카드로 구매가 가능한가요?</u></h3>
        <h3 className="ThirdFaq"><u>대차구매(차량맞교환)가 가능한가요?</u></h3>

       <div className="PhoneBox">
           <h3 className="PhoneNumber">1811-9393</h3>
           <h3 className="OfficeDay">연중무휴 </h3>
           <h3 className="OfficeHour">09:00 ~ 18:00</h3>
       </div>

       <div className="LocationBox">
            <h3 className="Location">위치안내</h3>
       </div>
       <div className="ManToManBox">
           <h3 className="ManToMan">1:1문의</h3>
       </div>

        </div>

    )
}

export default Faq;