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
    user: {}
  }

  componentDidMount(){
    axios.get(`https://movie-api-v001.herokuapp.com/user/${localStorage.getItem("user")}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}
    })
    .then(response=>{
        console.log(response.data)
      this.setState({
        user: response.data
      });
    })
    .catch(err=>console.log(err))
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

Username: <input type="text" value={this.state.user.Username}></input>
<br></br>
Email: <input type="text" value={this.state.user.Email}></input>
<br></br>
Birthday: <input type="text" value={this.state.user.Birthday}></input>
<br></br>
<input type="button" value="Edit"></input>
          
 </form> 
        
 </Container>
</div>
    );

  }
}

export default EditProfileView;
