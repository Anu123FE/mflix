import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export class MovieView extends React.Component {
  render() {
    const { movie, OnClickBack } = this.props;
    const url=`https://en.wikipedia.org/wiki/${movie.Genre.Name}_(genre)`;
    const directorUrl=`https://en.wikipedia.org/wiki/${movie.Director.Name}_(director)`;
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
                          <span className="value"><a href={url}>{movie.Genre.Name}</a></span>
                       </div>
                    </Col>
                 </Row>

                 <Row>
                     <Col>
                           <div className="movie-director">
                           <span className="label">Director: </span>
                           <span className="value"><a href={directorUrl}>{movie.Director.Name}</a></span>
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
