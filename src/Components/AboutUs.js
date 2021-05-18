import React from 'react';
import { Container, CardDeck,  Row, Card } from 'react-bootstrap';
import './AboutUs.css'
class AboutUs extends React.Component {
  render() {
    return (
      <>
        <Container fluid>
            <h1>Team: OPTIONS</h1>
            <Row>
          <CardDeck>
              <Card className="backCard" border="dark">
                  <Card.Img src="https://avatars.githubusercontent.com/u/75649765?v=4"/>
                <Card.Body>
                  <Card.Title>Michael Hendricks</Card.Title>
                  <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiu</Card.Text>
                </Card.Body>
              </Card>
              <Card className="backCard" border="dark">
                  <Card.Img src="https://avatars.githubusercontent.com/u/42320486?v=4" />
                <Card.Body>
                  <Card.Title>Prabin Singh</Card.Title>
                  <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiu</Card.Text>
                </Card.Body>
              </Card>
              <Card className="backCard" border="dark">
                  <Card.Img src="https://avatars.githubusercontent.com/u/74191805?v=4" />
                <Card.Body>
                  <Card.Title>Louis Lassegue</Card.Title>
                  <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiu</Card.Text>
                </Card.Body>
              </Card>
          </CardDeck>
          </Row>
        </Container>
      </>
    )
  }
}

export default AboutUs;
