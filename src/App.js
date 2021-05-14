
import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import AboutUs from './Components/AboutUs';
import Graph from './Components/Graph';

import CovidSummary from './Components/CovidSummary';

class App extends React.Component {
  
  render() {
    return (
     <>
      <Navigation/>
      <CovidSummary />
      
      </>
    )
  }
}


export default App;
