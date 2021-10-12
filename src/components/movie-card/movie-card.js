import axios from "axios";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export class MovieCard extends React.Component {
  addToFav = (id) => {
 
    const token = localStorage.getItem("token");
    axios.post(`https://movie-api-v001.herokuapp.com/users/${localStorage.getItem("user")}/movies/${id}`, {}, {
      headers: { Authorization: `Bearer ${token}`} 
  })
    .then(response => {
      console.log(response)
      if (response.status === 200) alert("added")
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    const { movie, onMovieClick } = this.props;
   
    console.log(movie.ImagePath)
    return (
      <Card>
       <div>
       <img alt={movie.Title} width="250" height="250" src={movie.ImagePath}/>
       </div>
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Description}</Card.Text>
        <Button onClick={() => onMovieClick(movie)} variant="danger">Open</Button>
        <Button onClick={() => this.addToFav(movie._id)} variant="danger">Add to favorites</Button>
      </Card.Body>
    </Card>
    )
    // return <div className="movie-card" onClick={() => { onMovieClick(movie); }}>{movie.Title}</div>;
  }
}
