import React from "react";
import WatchList from "../../pages/watch-list";
import classes from "./styles/Hero.module.css";

const IMG_URL = "https://image.tmdb.org/t/p/w500";
const Hero = ({
  title,
  releaseDate,
  voteAverage,
  overview,
  posterPath,
  display,
  addWatchList,
  movie,
}) => {
  return (
    <div
      className={classes.hero}
      id="hero"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(0, 0, 0)), url('" +
          IMG_URL +
          posterPath +
          "')",
        display: display,
      }}
    >
      <div className={classes.herotitle} id="hero-title">
        <h1>{title}</h1>
        <p>Release Date: {releaseDate}</p>
        <p>⭐ Rating: {voteAverage} / 10</p>
        <br />
        <p>{overview}</p>
        <button onClick={() => addWatchList(movie)}>Add to Watch List</button>
      </div>
    </div>
  );
};

export default Hero;
