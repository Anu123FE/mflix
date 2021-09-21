import logo from './logo.svg';
import './App.css';
import MainView from './components/main-view/main-view';
import Container from "react-bootstrap/Container";
import { useState } from 'react';
import Register from './components/register-view/register';
import Login from './components/login-view/login';
import { BrowserRouter, Route } from 'react-router-dom';




function App() {
  return (
    <BrowserRouter>
     <Route exact={true} path="/">
       <Login></Login>
     </Route>
     <Route exact={true} path="/register">
       <Register></Register>
     </Route>
    </BrowserRouter>
   
    
       );
}

export default App;
