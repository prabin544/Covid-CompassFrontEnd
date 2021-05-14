import React from 'react';
import { Container, CardDeck, Image, Row, Col, Card } from 'react-bootstrap';

class AboutUs extends React.Component {
  render() {
    return (
      <>
        <Container>
          <CardDeck>
            <h1>Team: OPTIONS</h1>
            <Row>
              <Card>
                <Col xs={6} md={4}>
                  <Image src="https://via.placeholder.com/150x150" thumbnail />
                </Col>
                <Card.Body>
                  <Card.Title>Michael Hendricks</Card.Title>
                  <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiu</Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Col xs={6} md={4}>
                  <Image src="https://via.placeholder.com/150x150" thumbnail />
                </Col>
                <Card.Body>
                  <Card.Title>Prabin Singh</Card.Title>
                  <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiu</Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Col xs={6} md={4}>
                  <Image src="https://via.placeholder.com/150x150" thumbnail />
                </Col>
                <Card.Body>
                  <Card.Title>Louis Lassegue</Card.Title>
                  <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiu</Card.Text>
                </Card.Body>
              </Card>
            </Row>
          </CardDeck>
        </Container>
      </>
    )
  }
}

export default AboutUs;
