import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";


export class DirectorView extends React.Component {
  url = 'http://localhost:3001/';
  state = {
    director : {},
    movies: []
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
      const m = response.data.filter(x=>x.Director.Name === `${this.directorName.replace("%20", " ")}`)
      console.log(g)
      this.setState({
        director: g,
        movies: m
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {

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

        <h3> Movies </h3>
        <hr />
        <div>
        {
            this.state.movies.map((x)=>{
              const image = window.location.href.split("/")[0] + "/" + x.ImagePath;
              return (
                <Card>
                <div>
                <img alt={x.Title} width="250" height="250" src={image} />
                </div>
               <Card.Body>
                 <Card.Title>{x.Title}</Card.Title>
                 <Card.Text>{x.Description}</Card.Text>
               </Card.Body>
             </Card>

                )
            })
        }   
       </div>

        <Link to="/movies">  Go Home</Link> 

      </div>
    );
  }
}



export default DirectorView;