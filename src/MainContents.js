import React from 'react';
import './MainContents.css';

function MainContents ()  {
    

        return (
            <div className="MainContents">
            <div className="Fourcars">
                <h3 className="FourPopularCars">인기있는 4대의 자동차</h3>
            </div>

            <figure className="Images">
            
            <img src="/images/Autohub.Main1.png" className="MainImage" alt="MainImage"></img>

            
            
            <img src="/images/Autohub.Main2.png" className="FirstImage" alt="FirstImage"></img>

            
            
            <img src="/images/Autohub.Main3.png" className="SecondImage" alt="SecondImage"></img>

            
            
            <img src="/images/Autohub.Main4.png" className="ThirdImage" alt="ThirdImage"></img>

            
            
            <img src="/images/Autohub.Main5.png" className="FourthImage" alt="FourthImage"></img>

            

        


            </figure>

          


            </div>
        );
    
};

export default MainContents;