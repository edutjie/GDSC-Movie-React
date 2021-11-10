import React from "react";
import classes from "./styles/Movie.module.css";
import { Link } from "react-router-dom";

const IMG_URL = "https://image.tmdb.org/t/p/w500";
const Movie = ({
  movie,
  title,
  overview,
  vote_average,
  poster_path,
  release_date,
  setTitle,
  setReleaseDate,
  setVoteAverage,
  setOverview,
  setPosterPath,
  setDisplay,
  setMovie,
}) => {
  const changeHero = () => {
    setTitle(title);
    setReleaseDate(release_date);
    setVoteAverage(vote_average);
    setOverview(overview);
    setPosterPath(poster_path);
    setDisplay("block");
    setMovie(movie);
  };
  return (
    <div className={classes.thumbnail} id="thumbnail2">
      <a href="#hero" onClick={changeHero}>
        <div class={classes.thumbnailimg}>
          <img src={IMG_URL + poster_path} alt={title} />
          <h3>{title}</h3>
          <p>{overview.split(".").slice(0, 1)} ...</p>
        </div>
      </a>
    </div>
  );
};

export default Movie;
