import React from 'react';
import Movie from './components/movie/Movie';
import MovieTop from './components/movieTop/MovieTop';
import Casting from './components/casting/Casting';
const Movies = () => {
  return (
    <div>
      <MovieTop />
      <Movie />
      <Casting />
    </div>
  );
};

export default Movies;
