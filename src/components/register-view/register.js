import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col, Container } from 'react-bootstrap';
import HeaderNav from '../header/headerNav';
import axios from 'axios';
import { useHistory } from 'react-router';

export function Register(props) {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ birthday, setBirthday ] = useState("");
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password, email, birthday);
        axios.post("https://movie-api-v001.herokuapp.com/users/register", {
          Username: username,
          Password: password,
          Email: email,
          Birthday: birthday,
        })
        .then(response => {
          const data = response.data;
          console.log(data)
          history.push("/")
          })
        .catch(e => {
          console.log('Error during registration!')
        });
      };

        return (
          <Container>
               <HeaderNav></HeaderNav>
       <Form>
         <Row>
           <Col>
      <Form.Group className="mb-3" controlId="formGroupUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </Form.Group>
      </Col>
      </Row>
      <Row>
        <Col>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </Form.Group>
      </Col>
      </Row>
      <Row>
        <Col>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </Form.Group>
      </Col>
      </Row>
      <Row>
        <Col>
      <Form.Group className="mb-3" controlId="formGroupBirthday">
        <Form.Label>Birthday</Form.Label>
        <Form.Control type="date" value={birthday} onChange={e => setBirthday(e.target.value)} />
      </Form.Group>
      </Col>
      </Row>
      <Row>
        <Col>
      <Button variant="danger" type="submit" onClick={handleSubmit}>Register</Button>
      </Col>
      </Row>
    </Form> 
    </Container>
    );

}
 
export default Register;