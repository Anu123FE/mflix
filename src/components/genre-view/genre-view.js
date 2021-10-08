import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap';
import { Link } from 'react-router-dom';



export class GenreView extends React.Component {

  state = {
    genre : {}
  }
   genreName = window.location.href.split("/genre/")[1]
  
  componentDidMount(){
    const token = localStorage.getItem("token");
    axios.get(`https://movie-api-v001.herokuapp.com/movies/`, {
      headers: { Authorization: `Bearer ${token}`} 
  })
    .then(response => {
      const g = response.data.find(x=>x.Genre.Name === `${this.genreName}`).Genre
      this.setState({
        genre: g
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    const { movie, onBackClick } = this.props;

    return (
      <div className="genre-view">

        <div className="genre-name">
          <h1>
            <span className="value">{this.state.genre.Name}</span>
          </h1>
        </div>
        <div className="genre-description">
          <span className="value">{this.state.genre.Description}</span>
        </div>

        <Link to="/movies">  Go Home</Link> 

      </div>
    );
  }
}



export default GenreView;