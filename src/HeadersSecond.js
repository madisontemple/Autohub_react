import React from 'react';
import './HeadersSecond.css';
import { AiOutlineSearch } from 'react-icons/ai';

function  HeadersLeft () {
    

        return (
            <div className="HeadersSecond">
            <div className="leftImage">
            <img src='/images/Autohub.HeadersLeft.png' alt='leftImage'/>
            </div>

            <div className="rightArea">
            <h3 className="searchComment">지금 바로 키워드로 검색해보세요! 무엇이든 찾아드립니다.</h3>

            </div>
            <div className="searchInput">
            <input className="searchArea" />
            <AiOutlineSearch className="SearchIcon" size={45}  />
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"></svg> 

            </div>

            
            <div className="buttons">
            
            <button>현대</button>
            <button>기아</button>
            <button>벤츠</button>
            <button>BMW</button>
            <button>아우디</button>
            
            </div>


            </div>
        );
    
};

export default HeadersLeft;