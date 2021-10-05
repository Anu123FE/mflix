import axios from "axios";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export class MovieCard1 extends React.Component {
  removeFav = (id) => {
    const token = localStorage.getItem("token");
    axios.delete(`https://movie-api-v001.herokuapp.com/users/${localStorage.getItem("user")}/movies/${id}`, {
      headers: { Authorization: `Bearer ${token}`} 
  })
    .then(response => {
      console.log(response)
      if (response.status === 200) alert("deleted")
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    const { movie } = this.props;
   
    console.log(movie.ImagePath)
    return (
      <Card>
       <div>
       <img width="250" height="250" src={movie.ImagePath}/>
       </div>
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Description}</Card.Text>
        <Button onClick={() => this.removeFav(movie._id)} variant="danger">Removed to favorites</Button>
      </Card.Body>
    </Card>
    )
    // return <div className="movie-card" onClick={() => { onMovieClick(movie); }}>{movie.Title}</div>;
  }
}
