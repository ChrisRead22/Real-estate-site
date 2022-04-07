import React from 'react';
import Complex from './components/Complex';
import Navbar from './components/Navbar';
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalStyles';


function App() {
  return (
   <>
   <GlobalStyle />
   <Navbar />
   <Dropdown />
   <Complex slides={SliderData}/>
   </>
  );
}

export default App;
