
import React from 'react';
import './App.css';
import IsLoadingAndError from './Components/IsLoadingAndError';
import Navigation from './Components/Navigation';
import { withAuth0 } from '@auth0/auth0-react';
import AboutUs from './Components/AboutUs';
import CovidSummary from './Components/CovidSummary';
// import SavedCities from './Components/SavedCities.js'
import Donation from './Components/Donation';
import SavedCountry from './Components/SavedCountry';

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
          <Route exact path="/aboutus"><AboutUs /></Route >
          <Route exact path="/covidpage"><CovidSummary /></Route >
          <Route exact path="/donate"><Donation /></Route >
          <Route exact path="/saved"><SavedCountry /></Route >
        </Switch>
        </IsLoadingAndError>
    </Router>
    )
  }
}


export default withAuth0(App);
