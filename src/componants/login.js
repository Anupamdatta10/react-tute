import React from "react";
import "../App.css";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
class Login extends React.Component {
  constructor() {
    console.log("constructer");
    super();
    this.state = {
      user: [],
      fname: "",
    };
  }
//   userdisplay = async () => {
//     var x = await axios.get("api/v1/to_do/users/create");

//     this.setState({
//       user: x.data,
//     });
//   };
//   Adduser = async () => {
//     console.log("add user");
//     var x = await axios({
//       method: "post",
//       url: "api/v1/to_do/users/create",
//       data: {
//         f_name: this.state.fname,
//         l_name: this.state.lname,
//         email: this.state.email,
//         password: this.state.password,
//         ph_no: this.state.ph,
//         address: this.state.address,
//       },
//     });
//   };
clickme=()=>{
  console.log('kkkk')
}
  render() {
    return (
      <Container mx-4>
        <div className="shadow-lg p-3 mb-5 bg-body rounded">
          <center>
            <h3>LOGIN</h3>
          </center>
          <Form action="">
            <Row>
             
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
            
             </Row>
             <Row> 
              
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Row>
              Don't have an account? <span>SignUp</span>
                    <center><Button variant="primary" type="submit">
                        Submit
                    </Button></center>
          </Form>
        </div>
      </Container>
    );
  }
}
export default Login;
