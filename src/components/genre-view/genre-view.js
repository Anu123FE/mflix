import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";

export class GenreView extends React.Component {
  url = 'http://localhost:3001/';
  state = {
    genre : {},
    movies: []
  }
   genreName = window.location.href.split("/genre/")[1]
  
  componentDidMount(){
    const token = localStorage.getItem("token");
    axios.get(`https://movie-api-v001.herokuapp.com/movies/`, {
      headers: { Authorization: `Bearer ${token}`} 
  })
    .then(response => {
      const g = response.data.find(x=>x.Genre.Name === `${this.genreName}`).Genre
      const m = response.data.filter(x=>x.Genre.Name === `${this.genreName}`)
      this.setState({
        genre: g,
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
            <span className="value">{this.state.genre.Name}</span>
          </h1>
        </div>
        <div className="genre-description">
          <span className="value">{this.state.genre.Description}</span>
        </div>
        <br></br>
        <h3> Movies </h3>
        <hr />
        <div>
        {
            this.state.movies.map((x)=>{
              const image = window.location.href.split("/")[0] + "/" + x.ImagePath;
              return (
               
                <Card>
                <div>
                <img alt={x.Title} width="250" height="250" src={image}/>
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



export default GenreView;