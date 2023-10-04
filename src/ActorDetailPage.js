import React from "react";
import { useParams } from "react-router-dom";
import { movies } from "./data";

function ActorDetailPage() {
  // Get the actorName parameter from the URL using useParams
  const { actorName } = useParams();

  // Find the actor object from the movies data
  const actor = movies.find((movie) =>
    movie.cast.some((actor) => actor === actorName)
  );

  if (!actor) {
    return <div>Actor not found</div>;
  }

  return (
    <div className="actor-detail-page">
      <h2>{actorName}</h2>
      <h3>Movies:</h3>
      <ul>
        {movies
          .filter((movie) => movie.cast.includes(actorName))
          .map((movie) => (
            <li key={movie.title}>{movie.title}</li>
          ))}
      </ul>
    </div>
  );
}

export default ActorDetailPage;
