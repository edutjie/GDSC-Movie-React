import React from "react";
import classes from "./styles/Hero.module.css";
import { useContext } from "react";
import FavouritesContext from "../store/favourites-context";

const IMG_URL = "https://image.tmdb.org/t/p/w500";
const Hero = ({ movie, display, posterPath }) => {
  const favouriteCtx = useContext(FavouritesContext);
  const itemIsFavourite = favouriteCtx.itemIsFavourite(movie.id);
  const toggleFavouriteStatusHandler = () => {
    if (itemIsFavourite) {
      favouriteCtx.removeFavourite(movie.id);
    } else {
      favouriteCtx.addFavourite({
        id: movie.id,
        title: movie.title,
        poster_path: posterPath,
        release_date: movie.release_date,
        vote_average: movie.vote_average,
        overview: movie.overview,
      });
    }
  };
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
        <h1>{movie.title}</h1>
        <p>Release Date: {movie.release_date}</p>
        <p>⭐ Rating: {movie.vote_average} / 10</p>
        <br />
        <p>{movie.overview}</p>
        <button onClick={toggleFavouriteStatusHandler}>
          {itemIsFavourite ? 'Remove from Watch List' : 'Add to Watch List'}
        </button>
      </div>
    </div>
  );
};

export default Hero;
