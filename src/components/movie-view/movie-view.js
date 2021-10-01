import React from "react";
import { Row, Col, Container } from "react-bootstrap";


export class MovieView extends React.Component {
  render() {
    const { movie, OnClickBack } = this.props;
    console.log(movie)
    return (
      <Container>
      <div className="movie-view">
        <Row>
          <Col xs={12} md={6}>
        <div className="movie-poster">
          <img src={movie.ImagePath}/>
          </div>
        </Col>
        </Row>
        <Row>
          <Col>
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movie.Title}</span>
        </div>
        </Col>
        </Row>
         <Row>
           <Col>
        <div className="movie-genre">
          <span className="label">Genre: </span>
          <span className="value">{movie.Genre.Name}</span>
        </div>
        </Col>
        </Row>

        <Row>
          <Col>
        <div className="movie-director">
          <span className="label">Director: </span>
          <span className="value">{movie.Director.Name}</span>
        </div>
        </Col>
        </Row>
        <Row>
          <Col>
        <div className="movie-description">
          <span className="label">Description: </span>
          <span className="value">{movie.Description}</span>
        </div>
        </Col>
        </Row>
        <Row>
          <Col>
        <button onClick={() => { OnClickBack(null); }}>Back</button>
        </Col>
      </Row>
      </div>
      </Container>
    );
  }
}
