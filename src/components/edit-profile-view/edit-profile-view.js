import React from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import Login from "../login-view/login";
import Register from "../register-view/register";
import { Row, Container, Col, CardGroup } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import axios from "axios";

class EditProfileView extends React.Component {
   state = {
    user: "",
    Username: "",
    Email: "",
    Birthday: "",
    Password: ""
  }

  setInput(evt){
    const {name, value} = evt.target;
    this.setState({
      [name]: value
    })
  }

  componentDidMount(){
    axios.get(`https://movie-api-v001.herokuapp.com/user/${localStorage.getItem("user")}`, {
        headers: { 'Access-Control-Allow-Origin': "*", Authorization: `Bearer ${localStorage.getItem("token")}`}
    })
    .then(response=>{
        console.log(response.data)
      this.setState({
        Username: response.data.Username,
        Email: response.data.Email,
        Password: response.data.Password,
        Birthday: response.data.Birthday,
        Password: response.data.Password
      });
    })
    .catch(err=>console.log(err))
  }

   handleSubmit = (e) => {
    e.preventDefault();
 
    axios.put("https://movie-api-v001.herokuapp.com/users/"+localStorage.getItem("user"), {
      Username: this.state.Username,
      Password: this.state.Password,
      Email: this.state.Email,
      Birthday: this.state.Birthday,
    }, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}
    })
    .then(response => {
      const data = response.data;
      console.log(data)
      })
    .catch(e => {
      console.log('Error during update!')
    });
  };

  deregister = () => {
    axios.delete("https://movie-api-v001.herokuapp.com/users/"+localStorage.getItem("user"))
    .then(response => {
     if(response.status === 2000) alert("Deleted!")
      })
    .catch(e => {
      console.log('Error during update!')
    });
  }

  render() {
    

    return (
<div>

<Container>
        <Nav variant="pills" className="justify-content-end" defaultActiveKey="/home">
     
        <Nav variant="pills" className="justify-content-end" defaultActiveKey="/home">
        <Nav.Item>
                <Nav.Link href="#profile"><Link to="/movies">Movies</Link></Nav.Link>
          </Nav.Item>
        <Nav.Item>
                <Nav.Link href="#profile"><Link to="/view-profile">View Profile</Link></Nav.Link>
           </Nav.Item>
           <Nav.Item>
                <Nav.Link href="#profile"><Link to="/">Edit Profile</Link></Nav.Link>
           </Nav.Item>
           <Nav.Item>
                 <Nav.Link eventKey="#logout"> <Link onClick={this.onLoggedOut} to="/">Log out</Link></Nav.Link>
            </Nav.Item>
         </Nav>
         </Nav>
         <form>

Username: <input name="Username" type="text" value={this.state.Username} onChange={e => this.setInput(e)}></input>
<br></br>
Email: <input name="Email" type="text" value={this.state.Email} onChange={e => this.setInput(e)}></input>
<br></br>
Password: <input name="Password" type="password" value={this.state.Password} onChange={e => this.setInput(e)}></input>
<br></br>
Birthday: <input name="Birthday" type="text" value={this.state.Birthday} onChange={e => this.setInput(e)}></input>
<br></br>
<input type="button" value="Edit" onClick={this.handleSubmit}></input>
          
 </form> 
        
        <br></br>
        <input type="button" value="De-register" onClick={this.deregister}></input>
 </Container>
</div>
    );

  }
}

export default EditProfileView;
