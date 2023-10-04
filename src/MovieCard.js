import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <div
        className="movie-poster"
        style={{
          backgroundImage: `url(${movie.poster})`
        }}
      />
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p>Release Date: {movie.releaseDate}</p>
      </div>
    </div>
  );
}

export default MovieCard;
