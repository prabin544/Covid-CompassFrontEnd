import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import { Button, Row, Col, Container, Form, Card } from 'react-bootstrap';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import './Donation.css'

class Donation extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      books: [],
      name: '',
      status:'',
      show: false
    }
  }
 
  handleClose = () => {
    this.setState({
      ...this.state,
      show: false,
       })
  }

  handleShow = () => {
    this.setState({
      ...this.state,
      show: true,
    })
  }

  handleNameInput = (e) => {
    this.setState({name: e.target.value});
  }
  handleDescriptionInput = (e) => {
    this.setState({description: e.target.value});
  }
  handleStatusInput = (e) => {
    this.setState({status: e.target.value});
  }
  handleFormSubmit = (e) => {
    e.preventDefault();
    this.fetchUserData();
  }
  fetchUserData = () => {

    axios.get(`${process.env.REACT_APP_BACKEND_URL}/users`/this.props.email)
    .then(serverResponse => {
      console.log(serverResponse.data);
      this.setState({
        books: serverResponse.data[0].books
      })
    });
  }

  handleCreateBook = (e) => {
    e.preventDefault();
    console.log('name', this.state.name, 'description', this.state.description, 'status', this.state.status, 'email', this.props.email);
    // make the request to the server with the info the user typed in
    axios.post('http://localhost:3001/books', {
      email: this.props.email,
      description: this.state.description,
      status: this.state.status,
      name: this.state.name
    }).then( response => {
      console.log(response.data);
      console.log(this.state);
      this.props.updatebooks(response.data)
      this.handleClose();
    });
  }

  render() {
    const { user } = this.props.auth0;
<<<<<<< HEAD
    console.log(this.props.auth0);
=======
    console.log(user);
>>>>>>> louis-11
    return(
      <>
        <button className="button" onClick={this.handleShow}>Donate</button>
        {/* <Button variant="primary" onClick={this.handleShow}>
          Donate
        </Button> */}
      
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Great! {user.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Container>
            <Row>
                <Col sm={8}>
                <Container>
                  <Row>
                    <Col >
                      <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={user.picture} alt={user.name} style={{display:'flex'}}/>
                      </Card>
                    </Col>
                  </Row>
                </Container>
                </Col>
                <Col sm={4} className="amtBtn">
                    <Button variant="primary" size="lg" active style={{ flex: 1, marginBottom: 5 }} className='numbers'>$30</Button>
                    <Button variant="primary" size="lg" active style={{ flex: 1, marginBottom: 5 }} className='numbers'>$50</Button>
                    <Button variant="primary" size="lg" active style={{ flex: 1 }} className='numbers'>$100</Button>
                </Col>
            </Row>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Email Me A Receipt" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Give Anonymously" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Add Me To Email List" />
            </Form.Group>
                <button type="submit" className="myButton">Submit</button>
          </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal> 
      </>
    )
  }
}

export default withAuth0(Donation);
