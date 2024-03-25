// WatchlistPage.js
import React from 'react';
import MovieLayer from './MovieLayer'; 
import movies from './movies'; 
import './WatchlistPage.css'; // Import CSS file for styling

const WatchlistPage = () => {
  return (
    <div className="watchlist-page">
      <MovieLayer title="Watchlist" movies={movies} />
      <MovieLayer title="History" movies={movies} />
      <MovieLayer title="Recommended" movies={movies} />
    </div>
  );
};

export default WatchlistPage;
