import React from 'react';
import './App.css';
import AutoButton from './Components/autoBtn'
import FireButton from './Components/fireBtn'
import LifeButton from './Components/lifeBtn'

export default function App() {

  const handleAutoClick = () =>{
    console.log('im here')
  }

  const handleFireClick = () =>{
    console.log('im here')
  }

  const handleLifeClick = () =>{
    console.log('im here')
  }
  
  return (
    <div className="App">
     <AutoButton handleClick={handleAutoClick}/>
     <FireButton handleFireClick={handleFireClick} />
     <LifeButton handleLifeClick={handleLifeClick}/>
    </div>
  );
}
