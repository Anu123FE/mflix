import React from 'react'
import { Link } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";


export default function HeaderNav() {
    return ( <Nav variant="pills" className="justify-content-end" defaultActiveKey="/home">
    <Nav.Item>
      <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="#register"> <Link to="register">Register</Link></Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link href="#home"><Link to="/">Log in</Link></Nav.Link>
    </Nav.Item>
    </Nav>);
   } 

