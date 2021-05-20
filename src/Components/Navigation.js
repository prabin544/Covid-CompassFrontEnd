import React from 'react';
import './Navigation.css';
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import LoginButton from "./LoginButton"
import { withAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton'

class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showLink: false
    };
  }

    
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
      <Navbar className="Nav" collapseOnSelect expand="lg" bg="" variant="dark">
        <Navbar.Brand href="#home">Covid-Compass</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {isAuthenticated ?
          <>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
              <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
              <Nav.Link as={Link} to="/covidpage" >Covid Tracker</Nav.Link>
              <Nav.Link as={Link} to="/saved" >Saved Country</Nav.Link>
              </Nav>
              <Nav><LogoutButton /></Nav>
            </Navbar.Collapse>
          </> :
            <Nav className='ml-auto'><LoginButton /></Nav>
        }
      </Navbar>
      </>
    );
  }
}

export default withAuth0(Navigation);
