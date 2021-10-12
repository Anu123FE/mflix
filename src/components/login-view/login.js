import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Row, Col} from 'react-bootstrap';
import HeaderNav from '../header/headerNav';
import axios from 'axios';
import { useHistory } from 'react-router';

export function Login(props) {
  const history = useHistory();
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(username, password);
      axios.post("https://movie-api-v001.herokuapp.com/login", {
        Username: username,
        Password: password
      })
      .then(response => {
        const data = response.data;
        console.log(data)
        localStorage.setItem("token", data.token)
        localStorage.setItem("user", data.user.Username)
        history.push("/movies")
      })
      .catch(e => {
        console.log('no such user')
      });
    };

        return (
          <Container> 
              <HeaderNav></HeaderNav>
            <Form>
              <Row className="justify-content-md-center">
                <Col md={8}>
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} />
              </Form.Group>
              </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col md={8}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} />
              </Form.Group>
              </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col md={8}>
              <Button variant="danger" type="submit" onClick={handleSubmit}>Submit</Button>
              </Col>
              </Row>
            </Form>
            </Container>

          );
}
 
export default Login;