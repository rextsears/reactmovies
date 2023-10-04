import React from "react";
import { Link } from "react-router-dom"; // Import Link
import { movies } from "./data"; // Import the movies array
import ActorCard from "./ActorCard";

function ActorsListPage() {
  // Create a Set to store unique actor names
  const uniqueActors = new Set();

  // Iterate through the movies and add actors' names to the Set
  movies.forEach((movie) => {
    movie.cast.forEach((actor) => {
      uniqueActors.add(actor);
    });
  });

  // Convert the Set back to an array
  const uniqueActorsArray = Array.from(uniqueActors);

  return (
    <div className="actors-list">
      <h2>Actors List</h2>
      <div className="actor-cards">
        {uniqueActorsArray.map((actor, index) => (
          // Use Link to create clickable links to ActorDetailPage
          <Link key={index} to={`/actors/${actor}`}>
            <ActorCard name={actor} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ActorsListPage;
