import React, { useState } from "react";
import Hero from "./Hero";
import Movie from "./Movie";
import classes from "./styles/Movies.module.css";
import { useHorizontalScroll } from "./hooks/useHorizontalScroll";

const Movies = ({ data, addWatchList }) => {
  const [title, setTitle] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [voteAverage, setVoteAverage] = useState("");
  const [overview, setOverview] = useState("");
  const [posterPath, setPosterPath] = useState("");
  const [display, setDisplay] = useState("none");
  const [movie, setMovie] = useState({});
  return (
    <>
      <Hero
        title={title}
        releaseDate={releaseDate}
        voteAverage={voteAverage}
        overview={overview}
        posterPath={posterPath}
        display={display}
        addWatchList={addWatchList}
        movie={movie}
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
                  setTitle={setTitle}
                  setReleaseDate={setReleaseDate}
                  setVoteAverage={setVoteAverage}
                  setOverview={setOverview}
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
                setTitle={setTitle}
                setReleaseDate={setReleaseDate}
                setVoteAverage={setVoteAverage}
                setOverview={setOverview}
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
