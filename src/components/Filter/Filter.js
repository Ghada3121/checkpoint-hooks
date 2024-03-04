import React from "react";
//import { NavDropdown } from "react-bootstrap";
import MovieList from "../MovieList/MovieList";
//import ReactStars from "react-rating-stars-component";


const Filter = ({ ratingChange, searchInput, movieData}) => {
  

  var filtredMovie = movieData.filter(
    (movie, index) =>
      movie.title.toLowerCase().includes(searchInput.toLowerCase()) &&
      movie.rating >= ratingChange
  );
  return (
    <div>
      <MovieList filtredMovie={filtredMovie} />
    </div>
  );
};

export default Filter;
