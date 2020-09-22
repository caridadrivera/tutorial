import React from 'react';
import './App.css';
import AutoButton from './Components/autoBtn'
import FireButton from './Components/fireBtn'
import LifeButton from './Components/lifeBtn'

export default function App() {

  const handleClick = () =>{
    console.log('im here')
  }
  
  return (
    <div className="App">
     <AutoButton handleClick={handleClick}/>
     <FireButton />
     <LifeButton />
    </div>
  );
}
