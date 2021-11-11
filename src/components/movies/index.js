import React, { useState } from "react";
import Hero from "./Hero";
import Movie from "./Movie";
import classes from "./styles/Movies.module.css";
import { useHorizontalScroll } from "./hooks/useHorizontalScroll";

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
      <div className={classes.trending} id="trending">
        <h1>Trending</h1>
        <div
          className={classes.trendingitem}
          ref={useHorizontalScroll()}
          style={{ overflow: "auto" }}
        >
          {data.slice(0, 10).length > 0 &&
            data
              .slice(0, 10)
              .map((movie) => (
                <Movie
                  className={classes.trendingimg}
                  key={movie.id}
                  {...movie}
                  movie={movie}
                  setPosterPath={setPosterPath}
                  setDisplay={setDisplay}
                  setMovie={setMovie}
                />
              ))}
        </div>
      </div>
      <div className={classes.movies} id="movies">
        <h1>Movies</h1>
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
