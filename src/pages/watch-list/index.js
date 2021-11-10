import React from "react";
import Movie from "../../components/movies/Movie";
import classes from "./styles/WatchList.module.css";

const WatchList = ({ watchList }) => {
  return (
    <>
      <div className={classes.movies} id="movies">
        <h1>Movies</h1>
        <div className={classes.moviesitem}>
          {watchList.length > 0 &&
            watchList.map((movie) => <Movie key={movie.id} {...movie} />)}
        </div>
      </div>
    </>
  );
};

export default WatchList;
