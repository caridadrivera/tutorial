import React from 'react';
import './App.css';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AutoButton from './Components/autoBtn';
import FireButton from './Components/fireBtn';
import LifeButton from './Components/lifeBtn';
import MainPage from './Components/mainPage';
import MainAutoPage from './Components/mainAutoPage';


export default function App() {
 
  
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path='/auto' component={MainAutoPage}/>
        <Route path='/' component={MainPage}/>
        
        </Switch>
       
      </div>
   </Router> 
    
  );
}
