import React, { useState } from "react";
import MovieGrid from "./MovieGrid";

function MoviesListPage({ onLogin }) {
  return (
    <div className="movies-list">
      <h2>Movies</h2>
      <MovieGrid /> {/* Render the MovieGrid component */}
    </div>
  );
}

export default MoviesListPage;
