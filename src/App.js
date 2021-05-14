
import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import AboutUs from './Components/AboutUs';
import Graph from './Components/Graph';

class App extends React.Component {
  render() {
    return (
     <>
      <Navigation />

      <AboutUs />

      <Graph />

      </>
    )
  }
}


export default App;
