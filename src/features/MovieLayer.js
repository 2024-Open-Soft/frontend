import React, { useRef } from 'react';
import Button from '@mui/material/Button';
import MovieCard from './MovieCard';
import './MovieLayer.css';
// MovieLayer.js



const MovieLayer = ({ title, movies }) => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -200, // Adjust the scroll amount as needed
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 200, // Adjust the scroll amount as needed
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="movie-layer">
      <h2 className='title'>{title}</h2>
      
      <div className="movie-list" ref={containerRef}>
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <MovieCard key={movie.id} movie={movie} />
          </div>
        ))}
      </div>
      <Button className="scroll-button left" onClick={scrollLeft}>{ 
      <img src="https://cdn-icons-png.flaticon.com/512/5111/5111424.png" 
      alt="Left arrow" 
      style={{ width: '24px', height: '24px' }}/>}</Button>
      <Button className="scroll-button right" onClick={scrollRight}>{ 
      <img src="https://cdn-icons-png.flaticon.com/512/5111/5111412.png" 
      alt="Right arrow" 
      style={{ width: '24px', height: '24px' }}/>}</Button>
    </div>
  );
};

export default MovieLayer;
