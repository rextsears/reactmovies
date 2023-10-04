import React from "react";
import { useParams } from "react-router-dom";

function ActorDetailPage() {
  // Get the actorName route parameter
  const { actorName } = useParams();

  // Find the actor in the movies array
  const actorMovies = movies.filter((movie) => movie.cast.includes(actorName));

  return (
    <div className="actor-detail">
      <h2>Actor Details</h2>
      <h3>Name: {actorName}</h3>
      <h4>Movies:</h4>
      <ul>
        {actorMovies.map((movie, index) => (
          <li key={index}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ActorDetailPage;
