import React from 'react';
import { Container, CardDeck, Image, Row, Col, Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import './AboutUs.css'
import louis from '../assets/img/louis.jpg'
import michael from '../assets/img/Michael.jpg'
import prabin from '../assets/img/prabin.jpg'
import { MdEmail } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import background from '../assets/img/background.jpg'

class AboutUs extends React.Component {
  render() {
    return (
      <>
        <Container >
          <CardDeck>
            <h1 style={{ margin:'auto' }}>Team: OPTIONS</h1>
            <Row style={{ margin:'auto' }}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={louis} />
                <Card.Body>
                  <Card.Title>Louis Lassegue</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <Button variant="secondary" size="lg" block><MdEmail /></Button>
                  <Button variant="secondary" size="lg" block><AiFillGithub /></Button>
                  <Button variant="secondary" size="lg" block><FaLinkedin /></Button>
                </ListGroup>
              </Card>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={michael} />
                <Card.Body>
                  <Card.Title>Michael Hendricks </Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <Button variant="secondary" size="lg" block><MdEmail /></Button>
                  <Button variant="secondary" size="lg" block><AiFillGithub /></Button>
                  <Button variant="secondary" size="lg" block><FaLinkedin /></Button>
                </ListGroup>
              </Card>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={prabin} />
                <Card.Body>
                  <Card.Title>Prabin Singh</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <Button variant="secondary" size="lg" block><MdEmail /></Button>
                  <Button variant="secondary" size="lg" block><AiFillGithub /></Button>
                  <Button variant="secondary" size="lg" block><FaLinkedin /></Button>
                </ListGroup>
              </Card>
            </Row>
          </CardDeck>
        </Container>
      </>
    )
  }
}

export default AboutUs;
