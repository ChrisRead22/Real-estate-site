import React, {useState} from 'react';
import Complex from './components/Complex';
import Navbar from './components/Navbar';
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalStyles';


function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
   <>
   <GlobalStyle />
   <Navbar toggle={toggle}/>
   <Dropdown isOpen={isOpen} toggle={toggle}/>
   <Complex slides={SliderData}/>
   </>
  );
}

export default App;
