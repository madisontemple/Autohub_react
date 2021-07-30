import React from 'react';
import './Headers.css';
import Headers from './Headers';
import HeadersSecond from './HeadersSecond';
import './HeadersSecond.css';
import MainContents from './MainContents';
import './MainContents.css';
import Finset from './Finset';
import './Finset.css';
import Faq from './Faq';
import './Faq.css';
import About from './About';
import './About.css';

// import styled from 'styled-components';





function App()  {
  
  

    return (
      
      <div>
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"></meta>
      <Headers />
      <HeadersSecond />
      
      <MainContents />
      <Finset />
      <Faq />
      <About />


      </div>
      
      
  
    )
  
}

export default App;
