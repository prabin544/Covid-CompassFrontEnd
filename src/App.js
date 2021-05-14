
import React from 'react';
import './App.css';
import IsLoadingAndError from './Components/IsLoadingAndError';
import Navigation from './Components/Navigation';
<<<<<<< HEAD
import { withAuth0 } from '@auth0/auth0-react';
import AboutUs from './Components/AboutUs';
import CovidSummary from './Components/CovidSummary';
=======
import AboutUs from './Components/AboutUs';
import Graph from './Components/Graph';
>>>>>>> 03a18c9936f253415978de6bbaa7406d16828f5f

import CovidSummary from './Components/CovidSummary';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
  
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
    <Router>
      <Navigation/>
        <IsLoadingAndError>
          <Switch>
          <Route exact path="/">
            {isAuthenticated ? <CovidSummary /> : <AboutUs /> }
          </Route >
        </Switch>
        </IsLoadingAndError>
    </Router>
    )
  }
}


export default withAuth0(App);
