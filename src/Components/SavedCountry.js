import React from 'react';
import {  Button } from 'react-bootstrap';
import { Container, Accordion, Card, Jumbotron } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react'
import './SavedCountry.css'
import NumberFormat from 'react-number-format';
import axios from 'axios';

const API_SERVER = process.env.REACT_APP_API;

class SavedCountry extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            savedLocationsArray: [],
        };
    }

    fetchUserData = () => {
        const { user } = this.props.auth0;
        const email = user.email;
        axios.get(`${API_SERVER}/users/${email}`)
        .then(serverResponse => {
          console.log(serverResponse.data[0].savedLocations);
          const savedLocations = serverResponse.data[0].savedLocations
          this.setState({
            savedLocationsArray: savedLocations
          })
        });
      }
    
    
    handleDeleteLocation = (id) => {
        const { user } = this.props.auth0;
        axios.delete(`${API_SERVER}/users/${id}?user=${user.email}`).then(responseData => {
            this.setState({
                savedLocationsArray: responseData.data,
            })
        })
    }

    componentDidMount = async () => {
        this.fetchUserData();
    
        }

  

  render() {
    console.log(this.state.savedLocationsArray)
    return (
        <>
        <Jumbotron fluid>
        
        </Jumbotron>
        <Container >
            <h1>Saved Countries</h1>
                {
                    this.state.savedLocationsArray.map((location, _id) =>
                    // It's weird to use one accordion per item, rather than a single accordion that wraps all the cards.
                    <Accordion >
                        <Card >
                            <Card.Header className="acc-Card">
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                {location.locationName}
                                </Accordion.Toggle>
                                <Button  id='acc' variant="danger" onClick={() => this.handleDeleteLocation(location._id)} >Delete Country</Button>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <p>Total Confirmed Cases: <NumberFormat className='numbers' value={location.locationCases} displayType={'text'} thousandSeparator={true} /></p>
                                    <p>Total Recovered Cases: <NumberFormat className='numbers' value={location.locationRecovered} displayType={'text'} thousandSeparator={true} /></p>
                                    <p>Total Death Cases: <NumberFormat className='numbers' value={location.locationDeaths} displayType={'text'} thousandSeparator={true} /></p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    )
                }
        </Container>
        
        </>
    );
  }
}

export default withAuth0(SavedCountry);
