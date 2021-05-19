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
      amt: '',
      totalAmt:'',
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

  getAmt = (e) => {
    console.log(e.target.value)
    this.setState({amt: e.target.value});
  }

  getTotalAmt() {
    axios.get('http://localhost:3001/amt').then(response => {
        console.log(response.data);
        this.setState({
            totalAmt:response.data,
            })
        this.props.updatetotalAmt(this.state.totalAmt)
    });
    
  }

  handleCreateTotalAmt = (e) => {
    e.preventDefault();
    console.log('amt', this.state.amt);
    // make the request to the server with the info the user typed in
    axios.post('http://localhost:3001/amt', {
      amt: this.state.amt
    }).then( response => {
      console.log(response.data);
      console.log(this.state.amt);
      this.getTotalAmt()
      this.handleClose();
    });
  }

  

  render() {
    const { user } = this.props.auth0;
    return(
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Donate
        </Button>

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
                <Col sm={4} className="amtBtn" >
                    <Button variant="primary" size="lg"  onClick={this.getAmt} value='30' active style={{ flex: 1, marginBottom: 5 }} className='numbers'>$30</Button>
                    <Button variant="primary" size="lg" onClick={this.getAmt} value='50' active style={{ flex: 1, marginBottom: 5 }} className='numbers'>$50</Button>
                    <Button variant="primary" size="lg" onClick={this.getAmt} value='100' active style={{ flex: 1 }} className='numbers'>$100</Button>
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
                <form onSubmit={this.handleCreateTotalAmt} >
                  <button type="submit" className="myButton">Submit</button>
                </form>
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