import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap';
import { Link } from 'react-router-dom';



export class DirectorView extends React.Component {

  state = {
    director : {}
  }
  directorName = window.location.href.split("/director/")[1]
  
  componentDidMount(){
    const token = localStorage.getItem("token");
    axios.get(`https://movie-api-v001.herokuapp.com/movies/`, {
      headers: { Authorization: `Bearer ${token}`} 
  })
    .then(response => {
      console.log(response.data)
      const g = response.data.find(x=>x.Director.Name === `${this.directorName.replace("%20", " ")}`).Director
      console.log(g)
      this.setState({
        director: g
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
            <span className="value">{this.state.director.Name}</span>
          </h1>
        </div>
        <div className="genre-description">
          <span className="value">{this.state.director.Bio}</span>
        </div>

        <div className="genre-description">
          <span className="value">{this.state.director.Birth}</span>
        </div>

        <Link to="/movies">  Go Home</Link> 

      </div>
    );
  }
}



export default DirectorView;