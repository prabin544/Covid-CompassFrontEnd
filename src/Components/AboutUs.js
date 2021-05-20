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
                  <Card.Text>My name is Michael Hendricks and I am a software developer from living in Portland, Oregon. My previous experience in the Navy and as a bartender help me bring a unique skillset. 
                    I got software development not knowing what my ideal environment for this would be, but I have realized that accessibility is what I want to move towards. 
                    I think there are a lot of things in the world that some people can’t do simply because the tools designed for them. I think I can help use software development
to help redesign the world so that everyone can do everything.</Card.Text>
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
                  I’m currently working to master the skill of coding in order to have the ability to work in multiple environments. Preferably, I would like to work for a company that focuses on providing solutions to everyday problems. 
                  Additionally, it is important that the organization prides itself on creating an environment of inclusion and that encourages divergent thinking for solutions and ideas.
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
