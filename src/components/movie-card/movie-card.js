import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;
    console.log(movie.ImagePath)
    return (
      <Card>
       <div>
       <img width="250" height="250" src={movie.ImagePath}/>
       </div>
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Description}</Card.Text>
        <Button onClick={() => onMovieClick(movie)} variant="danger">Open</Button>
      </Card.Body>
    </Card>
    )
    // return <div className="movie-card" onClick={() => { onMovieClick(movie); }}>{movie.Title}</div>;
  }
}
