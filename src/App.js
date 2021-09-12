import logo from './logo.svg';
import './App.css';
import MainView from './components/main-view/main-view';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useState } from 'react';
import Register from './components/register-view/register';
import Login from './components/login-view/login';




function App() {

  const [menuItem, setmenuItem] = useState("");

  function  HeaderNav(props) {
    return ( <Nav variant="pills" className="justify-content-end" defaultActiveKey="/home">
    <Nav.Item>
      <Nav.Link href="#home">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="#register" onClick={()=>{
        setmenuItem("register")
      }}>Register</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="#login" onClick={()=>{
        setmenuItem("login")
      }}>Login</Nav.Link>
    </Nav.Item>
    </Nav>);
   } 

if (menuItem == "register")
{
  return (
    <Container>   
      <HeaderNav></HeaderNav>
      <Register />
    </Container> 
       );
}
else if (menuItem == "login")
{
  return (
    <Container>   
      <HeaderNav></HeaderNav>
      <Login />
    </Container> 
       );
}
  
else {
  return (
    <Container>
      <HeaderNav></HeaderNav>   
      <MainView />
      </Container> 
    
       );
}
  

}

export default App;
