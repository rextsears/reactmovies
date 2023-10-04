import React, { useState } from "react";
import "/public/styles.css"; // Update the filename to index.css
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link // Import Link
} from "react-router-dom"; // Import Navigate for redirects
import LoginPage from "./LoginPage";
import MoviesListPage from "./MoviesListPage";
import MovieDetailPage from "./MovieDetailPage";
import ActorListPage from "./ActorListPage";
import ActorDetailPage from "./ActorDetailPage"; // Import ActorDetailPage
import NavBar from "./NavBar";
import { movies } from "./data";

function App() {
  const [user, setUser] = useState(null);

  // Function to update user state when logged in
  const handleLogin = (username) => {
    setUser(username);
  };

  return (
    <Router>
      <div className="App">
        {user && <NavBar user={user} />}

        {/* Use <Routes> to define your routing configuration */}
        <Routes>
          {/* Use <Route> to define individual routes */}
          <Route
            path="/"
            element={
              <>
                {user ? (
                  <MoviesListPage />
                ) : (
                  <>
                    <LoginPage onLogin={handleLogin} />
                  </>
                )}
              </>
            }
          />
          <Route path="/movies/:movieName" element={<MovieDetailPage />} />
          <Route path="/actors" element={<ActorListPage />} />

          {/* Add the route for ActorDetailPage */}
          <Route path="/actors/:actorName" element={<ActorDetailPage />} />

          {/* Redirect to the home page if no matching route is found */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
