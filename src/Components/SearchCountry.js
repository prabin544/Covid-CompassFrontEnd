import React from 'react';

import { Card, Form, Button } from 'react-bootstrap';

class SearchCountry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        summary: this.props.summary
    };
  }

    render() {

    return (
      <Form data-testid="add-form" >
        <Card style={{ width: '18rem' }}>
          <Card.Header>Add Item</Card.Header>
          <Card.Body>
            <select>
              {
                this.state.summary.Countries && this.state.summary.Countries.map(country=>
                  <option key={country.slug} value={country.slug}>{country.Country}</option>
                )
              }
            </select>
            <Form.Group>
              <Form.Label>Item</Form.Label>
              <Form.Control type="text" placeholder="To Do Item" data-testid="add-form-name" name="name"  />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Description" data-testid="add-form-description" name="description"  />
            </Form.Group>
            <Button variant="primary" type="submit">Add Item</Button>
          </Card.Body>
        </Card>
      </Form>
    );
  }
}

export default SearchCountry;