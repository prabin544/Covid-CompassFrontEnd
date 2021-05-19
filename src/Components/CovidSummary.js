import React from 'react';
import { Card, Container, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react'
// import SearchCountry from './SearchCountry';
import Graph from './Graph';
import NumberFormat from 'react-number-format';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Donation from './Donation'
import SavedCountry from './SavedCountry'
import './CovidSummary.css'

const API_SERVER = process.env.REACT_APP_API;

class CovidSummary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            totalAmt:0,
            days: 7,
            label: [],
            summary: {},
            totalConfirmedCases: 0,
            totalRecovered: 0,
            totalDeaths: 0,
            country: '',
            coronaCountArray: [],
            indexShowing: false,
            savedLocationsArray: [],
        };
    }

    formatDate = (date) => {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = `0${d.getMonth() + 1}`.slice(-2);
        const _date = d.getDate();
        return `${year}-${month}-${_date}`;
    }
    coutryHandler = (e) => {
        this.setState({
            country: e.target.value
        })
        const d = new Date()
        const to = this.formatDate(d);
        const from = this.formatDate(d.setDate(d.getDate() - this.state.days));
        this.getCountryReport(e.target.value, from, to)
    }



    savedCountryHandler = (locationName) => {
        const { user } = this.props.auth0;
        axios.get(`${API_SERVER}/users/${locationName}?user=${user.email}`).then(responseData => {
            console.log(responseData.data);
        })
    }

    handleDeleteLocation = (id) => {
        const { user } = this.props.auth0;
        axios.delete(`${API_SERVER}/users/${id}?user=${user.email}`).then(responseData => {
            this.setState({
                savedLocationsArray: responseData.data,
            })
        })
    }

    toggleHidingData = () => {
        this.setState({
            indexShowing: false,
        })
    }


    toggleShowingData = () => {
        this.setState({
            indexShowing: true,
        })
    }

    saveHandler = (e) => {
        e.preventDefault();
        const savedCountryName = this.state.country;
        const savedCountryConfirmed = this.state.totalConfirmedCases;
        const savedCountryRecovered = this.state.totalRecovered;
        const savedCountryDeaths = this.state.totalDeaths;
        console.log(savedCountryName);
        this.setState({

            country: savedCountryName,
            totalConfirmed: savedCountryConfirmed,
            totalRecovered: savedCountryRecovered,
            totalDeaths: savedCountryDeaths,
        })
        const { user } = this.props.auth0;
        axios.post(`${API_SERVER}/users?user=${user.email}`, { savedCountryName, savedCountryConfirmed, savedCountryRecovered, savedCountryDeaths }
        )
            .then(response => this.setState({
                savedLocationsArray: response.data[0].savedLocations,
            }))
    }

    daysHandler = (e) => {
        this.setState({
            days: e.target.value

        })
        const d = new Date()
        const to = this.formatDate(d);
        const from = this.formatDate(d.setDate(d.getDate() - e.target.value));
        this.getCountryReport(this.state.country, from, to)
    }

    getCountryReport(countrySlug, from, to) {
        axios.get(`https://api.covid19api.com/country/${countrySlug}/status/confirmed?from=${from}T00:00:00Z&to=${to}T00:00:00Z`).then(response => {
            console.log(response.data);
            const xAxisLabel = response.data.map(d => d.Date)
            const yAxisCoronaCount = response.data.map(d => d.Cases)
            const allSummary = this.state.summary.Countries
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

    getAllReport() {
        axios.get('https://api.covid19api.com/summary').then(response => {
            console.log(response.data);
            this.setState({
                summary: response.data,
                totalConfirmedCases: response.data.Global.TotalConfirmed,
                totalRecovered: response.data.Global.TotalRecovered,
                totalDeaths: response.data.Global.TotalDeaths,
            })
        });
    }

    getTotalAmt() {
        axios.get(`${API_SERVER}/amt`).then(response => {
            console.log(response.data);
            this.setState({
                totalAmt:response.data,
                })
        });
        
    }

    fetchUserData = () => {
        const { user } = this.props.auth0;
        axios.get(`${API_SERVER}/users/${user.email}`)
        .then(serverResponse => {
          console.log(serverResponse.data[0].savedLocations);
          const savedLocations = serverResponse.data[0].savedLocations
          this.setState({
            savedLocationsArray: savedLocations
          })
        });
      }
    
    setTotalAmt = (totalAmt) => {
    console.log(totalAmt);
    this.setState({
        totalAmt: totalAmt
    })
    }

    componentDidMount = async () => {
        this.getAllReport();
        this.fetchUserData();
        this.getTotalAmt();
        // const { user } = this.props.auth0;
        // const userData = await axios.get(`http://localhost:3001/users/${user.email}`
        // )
        // console.log('found user data', userData)
        // this.setState({
        //     savedLocationsArray: userData.data[0].savedLocations,
        // })
    }

    render() {
        console.log(this.state.savedLocationsArray)
        return (
            <>
                <Jumbotron fluid>
                    <Container>
                        <Row>
                            <Col sm={10}><h1 className='WWC'>{this.state.country === '' ? 'Covid-Compass' : this.state.country}</h1></Col>
                            <Col sm={2}>
                                💰<NumberFormat className='numbers' value={this.state.totalAmt} displayType={'text'} thousandSeparator={true} />
                                <Donation updatetotalAmt={this.setTotalAmt} variant="secondary">Donate</Donation>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <Container fluid>
                    <Row>
                        <Col md={3} style={{ marginTop: 30 }}>
                            <Form data-testid="add-form" >
                                <Card border="dark">
                                    <Card.Header className='header'>Find Cases By Country</Card.Header>
                                    <Card.Body>
                                        <Form.Group>
                                            <Form.Label>Country</Form.Label>
                                            <select value={this.state.country} onChange={this.coutryHandler}>
                                                <option value=''>Select Country</option>
                                                {
                                                    this.state.summary.Countries && this.state.summary.Countries.map(country =>
                                                        <option key={country.slug} value={country.slug}>{country.Country}</option>
                                                    )
                                                }
                                            </select>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Days</Form.Label>
                                            <select value={this.state.days} onChange={this.daysHandler}>
                                                <option value='7'>Last 7 days</option>
                                                <option value='30'>Last 30 days</option>
                                                <option value='60'>Last 60 days</option>
                                            </select>
                                        </Form.Group>
                                        <button onClick={this.saveHandler}>Save country</button>
                                    </Card.Body>
                                </Card>
                            </Form>
                        </Col>
                        <Col md={6}>
                            <Graph
                                yAxis={this.state.coronaCountArray}
                                label={this.state.label}
                            />
                        </Col>
                        <Col md={3} style={{ textAlign: 'center' }}>
                            <Card border="dark" style={{ marginBottom: 10 }}>
                                <Card.Header className='header' >Confirmed</Card.Header>
                                <Card.Body>
                                    <Card.Title > <NumberFormat className='numbers' value={this.state.totalConfirmedCases} displayType={'text'} thousandSeparator={true} />  </Card.Title>
                                </Card.Body>
                            </Card>
                            <Card border="dark" style={{ marginBottom: 10 }}>
                                <Card.Header className='header'>Total Recovered</Card.Header>
                                <Card.Body>
                                    <Card.Title> <NumberFormat className='numbers' value={this.state.totalRecovered} displayType={'text'} thousandSeparator={true} /> </Card.Title>
                                </Card.Body>
                            </Card>
                            <Card border="dark" style={{ marginBottom: 10 }}>
                                <Card.Header className='header'>Total Deaths</Card.Header>
                                <Card.Body>
                                    <Card.Title><NumberFormat className='numbers' value={this.state.totalDeaths} displayType={'text'} thousandSeparator={true} /> </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <SavedCountry savedLocationsArray={this.state.savedLocationsArray} handleDeleteLocation={this.handleDeleteLocation}/>
            </>
        );
    }
}

export default withAuth0(CovidSummary);
