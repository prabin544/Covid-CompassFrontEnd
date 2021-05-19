import React from 'react';
import { Container, CardDeck, Row, Card, Col } from 'react-bootstrap';
import './AboutUs.css'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

class AboutUs extends React.Component {
  render() {
    return (
      <>
        <Container fluid="md">
          <h1 className="teamName">Team: OPTIONS</h1>
          <CardDeck className="aboutCardDeck">
            <Row>
              <Card className="backCard" border="dark" >
                <Col md={6}>
                  <Card.Img src="https://avatars.githubusercontent.com/u/75649765?v=4" />
                </Col>
                <Card.Body>
                  <Card.Title>Michael Hendricks</Card.Title>
                  <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiu</Card.Text>
                  <h5><a href="https://github.com/mhendricks96" atl="GitHubLink" style={{ color: "black" }}><FaGithubSquare /> </a></h5>
                  <h5><a href="https://www.linkedin.com/in/michael3hendricks/" atl="linkedinLink" style={{ color: "black" }}><FaLinkedin /></a></h5>
                </Card.Body>
              </Card>
              <Card className="backCard" border="dark" >
                <Col md={6}>
                  <Card.Img className="cardAboutImg" src="https://avatars.githubusercontent.com/u/42320486?v=4" />
                </Col>
                <Card.Body>
                  <Card.Title>Prabin Singh</Card.Title>
                  <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiu</Card.Text>
                  <h5><a href="https://github.com/prabin544" atl="GitHubLink" style={{ color: "black" }}><FaGithubSquare /> </a></h5>
                  <h5><a href="link" atl="linkedinLink" style={{ color: "black" }}><FaLinkedin /></a></h5>
                </Card.Body>
              </Card>
              <Card className="backCard" border="dark" >
                <Col md={6}>
                  <Card.Img className="cardAboutImg" src="https://avatars.githubusercontent.com/u/74191805?v=4" />
                </Col>
                <Card.Body>
                  <Card.Title>Louis Lassegue</Card.Title>
                  <Card.Text>Hello, I am Louis Lassegue, a Full-Stack Software Developer. After 15 years in a retail environment specializing in inventory and logistics. I’m transitioning to a career in software development.
                  I decided to go into software development for a few reasons. I wanted a career that would stand the test of time. Software engineers often work in a team environment that I enjoy working in. Having continuous challenges on a daily basis keeps me engaged.
                  I’m currently working to master the skill of coding in order to have the ability to work in multiple environments. Preferably, I would like to work for a company that focuses on providing solutions to everyday problems. Additionally, it is important that the organization prides itself on creating an environment of inclusion and that encourages divergent thinking for solutions and ideas.
                  </Card.Text>
                  <h5><a href="https://github.com/mrloulass" atl="GitHubLink" style={{ color: "black" }}><FaGithubSquare /> </a></h5>
                  <h5><a href="https://www.linkedin.com/in/louis-lassegue-4269531bb/" atl="linkedinLink" style={{ color: "black" }}><FaLinkedin /></a></h5>
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
