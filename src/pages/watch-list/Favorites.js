import React, { useState } from "react";
import Hero from "../../components/movies/Hero";
import Movie from "../../components/movies/Movie";
import classes from "../../components/movies/styles/Movies.module.css";

const Movies = ({ data, addFavoriteMovie }) => {
  const [movie, setMovie] = useState({});
  const [posterPath, setPosterPath] = useState("");
  const [display, setDisplay] = useState("none");
  return (
    <>
      <Hero
        movie={movie}
        posterPath={posterPath}
        display={display}
        addFavoriteMovie={addFavoriteMovie}
      />
      <div className={classes.movies} id="movies">
        <div className={classes.moviesitem}>
          {data.length > 0 &&
            data.map((movie) => (
              <Movie
                key={movie.id}
                {...movie}
                movie={movie}
                setMovie={setMovie}
                setPosterPath={setPosterPath}
                setDisplay={setDisplay}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Movies;
