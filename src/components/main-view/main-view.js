import React from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import {  Container } from "react-bootstrap";
import "./main-view.css";
import { Link } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import axios from "axios";

import { connect } from 'react-redux';
import { setMovies } from '../../actions/actions';

class MainView extends React.Component {
  state = {
    movies: []
  }

  componentWillMount(){
    fetch("https://movie-api-v001.herokuapp.com/movies")
    .then(response=>response.json())
    .then(response=>{
      this.props.setMovies([...response]);
    })
    .catch(err=>console.log(err))
  }

  // getMovies(token) {
  //   axios.get("https://movie-api-v001.herokuapp.com/movies", {
  //     headers: { Authorization: `Bearer ${token}`}
  //   })
  //   .then(response => {
  //     // Assign the result to the state
  //     // this.setState({
  //     //   movies: response.data
  //     // });
  //    
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }

  setRegistered(register){
    this.setState({
      register
    })
  }

  setLoggedIn(loggedIn){
    this.setState({
      loggedIn
    })
  }

  setMovieSelected(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
   
  }



  render() {
    console.log(this.props)
    const { movies} = this.props;
    const {selectedMovie} =  this.state;

    return (
      <Container>

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

      <div className="main-view">
        <div className="cardGroup">
        {selectedMovie
          ? <MovieView movie={selectedMovie} OnClickBack={newSelectedMovie => { this.setMovieSelected(newSelectedMovie); }}/>
          : movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} onMovieClick={(movie) => { this.setMovieSelected(movie) }}/>
           
          ))
        }
        </div>
      </div>
      </Container>
    );

  }
}

let mapStateToProps = state => {
  console.log(state)
  return { movies: state.movies }
}

export default connect(mapStateToProps, { setMovies } )(MainView);
