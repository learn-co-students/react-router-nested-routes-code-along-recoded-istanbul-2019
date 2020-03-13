// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MovieList';
import MovieShow from '../components/MovieShow';

// const MoviesPage = ({ match, movies }) => {
//   const renderMovies = Object.keys(movies).map(movieID => 
//     <Link key={movieID} to= {`/movies/${movieID}`}>
//       {movies[movieID].title}
//     </Link>);

//   return (
//     <div>
//       {renderMovies}
//     </div>
//   )
// }

const MoviesPage = ({ match, movies }) => (
  <div>
    <MoviesList movies={movies} />
    <Route exact path={match.url} render={() => <h3>Choose a movie from the list above</h3>}/>
    <Route path={`${match.url}/:movieId`} render={routerProps => {<MovieShow {...routerProps} movies={movies} />}} />
  </div>
)

export default MoviesPage
