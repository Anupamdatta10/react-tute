import React from "react";
import "../App.css";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
class Signup extends React.Component {
  constructor() {
    console.log("constructer");
    super();
    this.state = {
      user: [],
      fname: "",
      lname: "",
      email: "",
      phno: "",
      password: "",
      address1: "",
    };
  }
  userdisplay = async () => {
    var x = await axios.get("api/v1/to_do/users/create");

    this.setState({
      user: x.data,
    });
  };
  Adduser = async (e) => {
    e.preventDefault();
    console.log("add user");
    // var x = await axios({
    //   method: "post",
    //   url: "api/v1/to_do/users/create",
    //   data: {
    //     f_name: this.state.fname,
    //     l_name: this.state.lname,
    //     email: this.state.email,
    //     password: this.state.password,
    //     ph_no: this.state.ph,
    //     address1: this.state.address,
    //   },
    // });
    console.log(this.state.fname);
  };
  finput = (e) => {
    this.setState({ fname: e.target.value });
    console.log(this.state.fname);
  };
  linput = (e) => {
    this.setState({ lname: e.target.value });
    console.log(this.state.lname);
  };
  emailinput = (e) => {
    this.setState({ email: e.target.value });
    console.log(this.state.email);
  };
  passinput = (e) => {
    this.setState({ password: e.target.value });
    console.log(this.state.password);
  };
  phinput = (e) => {
    this.setState({ ph: e.target.value });
    console.log(this.state.ph);
  };
  addinput = (e) => {
    this.setState({ address: e.target.value });
    console.log(this.state.address);
  };

  oneSingeFunc=(event)=>{
    event.preventDefault();
    console.log(event.target.name)
    console.log("=====",event.target.value);
    this.setState({[event.target.name]:event.target.value})
  }
  render() {
    return (
      <Container>
        <div className="shadow-lg p-3 mb-5 bg-body rounded">
          <center>
            <h3>Signup</h3>
          </center>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicFname">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fname"
                    placeholder="Enter First Name"
                    onKeyUp={(e) => this.oneSingeFunc(e)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicLname">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Last Name"
                   // onKeyUp={(e) => this.oneSingeFunc(e)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                   // onKeyUp={(e) => this.emailinput(e)}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPhno">
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter Phone number"
                   // onKeyUp={(e) => this.phinput(e)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    //onKeyUp={(e) => this.passinput(e)}
                  />
                </Form.Group>
              </Col>
              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="xyz street"
                  //onKeyUp={(e) => this.addinput(e)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={(e) => this.Adduser(e)}
               //onClick={(e)=>{this.oneSingeFunc(e)}}
              >
                Submit
              </Button>
            </Row>
          </Form>
        </div>
      </Container>
    );
  }
}
export default Signup;
