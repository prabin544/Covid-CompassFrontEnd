
import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Graph from './Components/Graph';
import CovidSummary from './Components/CovidSummary';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //       totalConfirmedCases: 0,
  //       totalRecovered: 0,
  //       totalDeaths: 0,
  //       country: ''
  //   };
  // }

  // getReport() {
  //   axios.get('https://api.covid19api.com/summary').then(response => {
  //     console.log(response.data);
  //     this.setState({
  //       totalConfirmedCases: response.data.Global.TotalConfirmed,
  //       totalRecovered: response.data.Global.TotalRecovered,
  //       totalDeaths: response.data.Global.TotalDeaths,
  //     })
  //   });
  // }

  // componentDidMount() {
  //   this.getReport();
  // }
  render() {
    return (
     <>
      <Navigation/>
      {/* <CovidSummary 
        totalConfirmedCases={this.state.totalConfirmedCases}
        totalRecovered={this.state.totalRecovered}
        totalDeaths={this.state.totalDeaths}
        country={this.state.country}
      /> */}
      <CovidSummary />
      
      </>
    )
  }
}


export default App;
