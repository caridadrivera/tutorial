import React from 'react';
import './App.css';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AutoButton from './Components/autoBtn';
import FireButton from './Components/fireBtn';
import LifeButton from './Components/lifeBtn';
import mainAutoPage from './Components/mainAutoPage'

export default function App() {
  const history = useHistory();

  const handleAutoClick = () =>{
      
  }

  const handleFireClick = () =>{
    console.log('im here');
  }

  const handleLifeClick = () =>{
    console.log('im here');
  }
  
  return (
    
      <div className="App">
        <AutoButton handleClick={handleAutoClick}/>
        <FireButton handleFireClick={handleFireClick} />
        <LifeButton handleLifeClick={handleLifeClick}/>
      </div>
    
    
  );
}
