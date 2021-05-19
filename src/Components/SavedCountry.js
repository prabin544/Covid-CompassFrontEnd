import React from 'react';
import {  Button } from 'react-bootstrap';
import { Container, Accordion, Card } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react'

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
                                    <p>Cases:{location.locationCases}</p>
                                    <p>Cases:{location.locationRecovered}</p>
                                    <p>Cases:{location.locationDeaths}</p>
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