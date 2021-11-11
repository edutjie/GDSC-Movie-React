import React from "react";
import classes from "./styles/Movie.module.css";

const IMG_URL = "https://image.tmdb.org/t/p/w500";
const Movie = ({
  movie,
  title,
  overview,
  poster_path,
  setPosterPath,
  setDisplay,
  setMovie,
}) => {
  const changeHero = () => {
    setMovie(movie);
    setPosterPath(poster_path);
    setDisplay("block");
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
