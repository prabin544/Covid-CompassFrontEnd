import React from 'react';
import axios from 'axios'
import { Card, Form} from 'react-bootstrap';

class SearchCountry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        summary: this.props.summary,
        country: this.props.country
    };
  }

  formatDate = (date)=>{
    const d= new Date(date);
    const year = d.getFullYear();
    const month = `0${d.getMonth() + 1}`.slice(-2);
    const _date = d.getDate();
    return `${year}-${month}-${_date}`;
  }

  coutryHandler = (e) =>{
    e.preventDefault();
    this.setState({
        country: e.target.value
    })
    const d = new Date()
    const to = this.formatDate(d);
    const from = this.formatDate(d.setDate(d.getDate() - this.state.days));
    this.getCountryReport(e.target.value, from, to )
  }

  daysHandler = (e) =>{
      this.setState({
          country: e.target.value
          
      })
      const d = new Date()
      const to = this.formatDate(d);
      const from = this.formatDate(d.setDate(d.getDate() - e.target.value));
      this.getCountryReport(this.props.country, from, to)
  }

  getCountryReport(countrySlug, from, to) {
    axios.get(`https://api.covid19api.com/country/${countrySlug}/status/confirmed?from=${from}T00:00:00Z&to=${to}T00:00:00Z`).then(response => {
        console.log(response.data);
        const xAxisLabel = response.data.map(d => d.Date)
        const yAxisCoronaCount = response.data.map(d => d.Cases)
        const allSummary = this.props.summary.Countries
        console.log(allSummary)
        const coviddetails = allSummary.find(({ Country }) => Country === countrySlug)
        this.setState({
            coronaCountArray: yAxisCoronaCount,
            totalConfirmedCases: coviddetails.TotalConfirmed,
            totalRecovered: coviddetails.TotalRecovered,
            totalDeaths: coviddetails.TotalDeaths,
            label: xAxisLabel
        })
    });
}

  render() {
    return (
      <Form data-testid="add-form" >
        <Card style={{ width: '18rem' }}>
        <Card.Header>Find cases By Country</Card.Header>
        <Card.Body>
            
            <Form.Group>
            <Form.Label>Country</Form.Label>
            <select value={this.props.country} onChange={this.coutryHandler}>
                <option value=''>Select Country</option>
            {
                this.props.summary.Countries && this.props.summary.Countries.map(country=>
                <option key={country.slug} value={country.slug}>{country.Country}</option>
                )
            }
            </select>
            </Form.Group>
            <Form.Group>
            <Form.Label>Days</Form.Label>
            <select value={this.props.days} onChange={this.daysHandler}>
                <option value='7'>Last 7 days</option>
                <option value='30'>Last 30 days</option>
                <option value='60'>Last 60 days</option>
            </select>
            </Form.Group>
        </Card.Body>
        </Card>
    </Form>
    );
  }
}

export default SearchCountry;
