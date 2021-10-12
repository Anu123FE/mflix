import React from "react";
import { MovieCard1 } from "../movie-card1/movie-card1";
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import axios from "axios";

class ProfileView extends React.Component {
  state = {
    user: {},
    fav: []
  }

  componentDidMount(){
    axios.get(`https://movie-api-v001.herokuapp.com/user/${localStorage.getItem("user")}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}
    })
    .then(response=>{
        console.log(response.data)
        axios.get(`https://movie-api-v001.herokuapp.com/movies`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}
    }).then(response1 => {
      const u = [];
      console.log(response1.data)
      response.data.FavoriteMovies.forEach(y=>{
        const m = response1.data.find(x=>x._id === y)
        u.push(m)
        console.log(u)
        this.setState({
          fav: [...u]
        })
      })
      
    }).catch(err=>console.log(err))

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
                <Nav.Link href="#profile"><Link to="/edit-profile">Edit Profile</Link></Nav.Link>
           </Nav.Item>
           <Nav.Item>
                 <Nav.Link eventKey="#logout"> <Link onClick={this.onLoggedOut} to="/">Log out</Link></Nav.Link>
            </Nav.Item>
         </Nav>
         </Nav>
         <h1>{this.state.user.Username}</h1>
         <h1>{this.state.user.Email}</h1>
         <h1>{this.state.user.Birthday}</h1>
         <br></br>
         <h1>Favorite movies</h1>
         {this.state.fav.map((movie, index) => (
            <MovieCard1 key={index} movie={movie} onMovieClick={(movie) => { this.setMovieSelected(movie) }}/>
         )
         )}
         
         </Container>
</div>
    );

  }
}

export default ProfileView;
