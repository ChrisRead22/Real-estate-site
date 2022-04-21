import React, {useState} from 'react';
import Complex from './components/Complex';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import { InfoData } from './data/InfoData';
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalStyles';
import InfoSection from './components/InfoSection';


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
   <InfoSection {...InfoData} />
   </>
  );
}

export default App;
