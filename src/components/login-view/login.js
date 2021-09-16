import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Row, Col} from 'react-bootstrap';

export function Login(props) {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(username, password);
      props.onLoggedIn(username);
    };

        return (
          <Container> 
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