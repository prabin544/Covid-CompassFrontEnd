import React from 'react';
import {  Button } from 'react-bootstrap';
import { Container, Accordion, Card } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react'
import './SavedCountry.css'
import NumberFormat from 'react-number-format';

class SavedCountry extends React.Component {
  
  handleDelete = (id) => {
    console.log(id)
    this.props.handleDeleteLocation(id);
    
  }
  

  render() {
    console.log(this.props)
    return (
      
        <Container>
            <h1>Saved Locations</h1>
                {
                    this.props.savedLocationsArray.map((location, _id) =>
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                {location.locationName}
                                </Accordion.Toggle>
                                <Button  onClick={() => this.handleDelete(location._id)} >Delete Item</Button>
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
    );
  }
}

export default withAuth0(SavedCountry);