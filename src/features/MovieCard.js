// MovieCard.js
import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
    </div>
  );
};

export default MovieCard;
