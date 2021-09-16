import React from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import Login from "../login-view/login";
import Register from "../register-view/register";
import { Row, Container, Col } from "react-bootstrap";


class MainView extends React.Component {
  state = {
    movies: []
  }
  constructor() {
    super();
  }

  componentDidMount(){
    fetch("https://movie-api-v001.herokuapp.com/movies")
    .then(response=>response.json())
    .then(response=>{
      this.setState({
        movies: response
      });
    })
    .catch(err=>console.log(err))
  }

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

  render() {
    
    const { movies, selectedMovie, register, loggedIn } = this.state;
    console.log(this.state)
    if(!register) { 
      return (<Register onRegistration={register => this.setRegistered(register)}></Register>)
    }

    if(!loggedIn) {
      return (<Login onLoggedIn={loggedIn => this.setLoggedIn(loggedIn)}></Login>)
    }

    return (
      <Container>
      <div className="main-view">
        {selectedMovie
          ? <Row>
            <Col>
          <MovieView movie={selectedMovie} OnClickBack={newSelectedMovie => { this.setMovieSelected(newSelectedMovie); }}/>
          </Col>
          </Row>
          : movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} onMovieClick={(movie) => { this.setMovieSelected(movie) }}/>
          ))
        }
      </div>
      </Container>
    );

  }
}

export default MainView;
