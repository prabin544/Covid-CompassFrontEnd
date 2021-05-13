
import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Graph from './Components/Graph';


class App extends React.Component {
  render() {
    return (
     <>
      <Navigation />
      <Graph />
      </>
    )
  }
}


export default App;
