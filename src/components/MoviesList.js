import React from "react";
import { Link } from "react-router-dom";

export default function MovieList({ movies }) {
  console.log(movies);
  const renderMovies = Object.keys(movies).map((movieID) => {
    return (
      <Link key={movieID} to={`/movies/${movieID}`}>
        {movies[movieID].title}
      </Link>
    );
  });
  console.log(renderMovies);
  return <div>{renderMovies}</div>;
}
