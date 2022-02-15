import React from "react";
import "../App.css";
import axios from "axios";

import InputGroup from "react-bootstrap/InputGroup";


import Signup from "./signup";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl
} from "react-bootstrap";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLoginClick = () => {
    const userData = {
      username: this.state.username,
      password: this.state.password
    };
    console.log("Login " + userData.username + " " + userData.password);
  };
  render() {
    return (
      <Container>
        <div className="shadow-lg p-3 mb-5 bg-transparent rounded">
          <Form>
            <Row >
              
            <center><h1>Login</h1></center>
                
                <Form.Group controlId="usernameId">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="emailAddress"
                    placeholder="Enter email"
                    value={this.state.username}
                    onChange={this.onChange}
                  />
                  <FormControl.Feedback type="invalid"></FormControl.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group controlId="passwordId">
                  <Form.Label>Your password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>
                </Row>
                <p className="mt-2">
                  Don't have account? <Link to="/signup">Signup</Link>
                </p>
                <center><Button color="primary" onClick={this.onLoginClick}>Login</Button></center>
                

              
            
          </Form>
        </div>
      </Container>
    );
  }
}

export default Login;