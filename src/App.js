import React from 'react';
import './App.css';
import AutoButton from './Components/autoBtn'
import FireButton from './Components/fireBtn'
import LifeButton from './Components/lifeBtn'

export default function App() {
  
  return (
    <div className="App">
     <AutoButton />
     <FireButton />
     <LifeButton />
    </div>
  );
}
