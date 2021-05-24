import React from 'react';
import { Container, CardDeck, Card, Col } from 'react-bootstrap';
import './AboutUs.css'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

class AboutUs extends React.Component {
  render() {
    // all of this code didn't make you think "let's make a component for a single person and then render 3 of them here"?
    return (
      <>
        <Container fluid="md">
          <h1 className="teamName">Team: OPTIONS</h1>
          <CardDeck className="aboutCardDeck">
            <Card className="backCard" border="dark" >
              <Col md={6}>
                <Card.Img src="https://avatars.githubusercontent.com/u/75649765?v=4" />
              </Col>
              <Card.Body>
                <Card.Title>Michael Hendricks</Card.Title>
                <Card.Text>
                My name is Michael Hendricks and I am a software developer from living in Portland, Oregon. My previous experience in the Navy and as a bartender help me bring a unique skillset.
                I got software development not knowing what my ideal environment for this would be, but I have realized that accessibility is what I want to move towards.
                I think there are a lot of things in the world that some people can’t do simply because the tools designed for them. I think I can help use software development to help redesign the world so that everyone can do everything.
                </Card.Text>
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
                <Card.Text>
                  Hi, My name is Prabin Singh, Full Stack Software Developer and DevOps Engineer. I am from Keller, TX and Computer Science graduate from Southern Methodist University.
                  Currently I am working as DevOps Engineer at one of the fortune 500 company. As Cloud computing background, the ultimate goal for me to start web developer journey was to better serve Application Development team with their issues and concerns for which I had to know coding.
                  But shortly I relaized it has opened doors for me in Tech industry with new and exiciting career. I would like to work for a company where I can embed my past experience and implement new technologies I have learned.
                </Card.Text>
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
                <Card.Text>
                  Hello, I am Louis Lassegue, a Full-Stack Software Developer. After 15 years in a retail environment specializing in inventory and logistics. I’m transitioning to a career in software development.
                  I’m currently working to master the skill of coding in order to have the ability to work in multiple environments. Preferably, I would like to work for a company that focuses on providing solutions to everyday problems.
                  Additionally, it is important that the organization prides itself on creating an environment of inclusion and that encourages divergent thinking for solutions and ideas.
                </Card.Text>
                <h5><a href="https://github.com/mrloulass" atl="GitHubLink" style={{ color: "black" }}><FaGithubSquare /> </a></h5>
                <h5><a href="https://www.linkedin.com/in/louis-lassegue-4269531bb/" atl="linkedinLink" style={{ color: "black" }}><FaLinkedin /></a></h5>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </>
    )
  }
}

export default AboutUs;
