import React, { useContext } from "react";
import classes from "./styles/MainNavigation.module.css";
import { Link } from "react-router-dom";
import FavouritesContext from "../store/favourites-context";

const MainNavigation = (props) => {
  const favouriteCtx = useContext(FavouritesContext);
  return (
    <div className={classes.navbar}>
      <a href="javascript:window.location.reload(true)">
        <p>
          e<span>Flix</span>
        </p>
      </a>
      <ul className={classes.navmenu}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#trending">Trending</a>
        </li>
        <li>
          <a href="#movies">Movies</a>
        </li>
        <li>
          <Link to="/watch-list">
            Watch List{" "}
            <span className={classes.badge}>
              {favouriteCtx.totalFavourites}
            </span>
          </Link>
        </li>
        <li>
          <form action="submit" id="form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Search"
              id="search"
              value={props.searchValue}
              onChange={(event) => {
                props.setSearchValue(event.target.value);
              }}
            />
          </form>
        </li>
      </ul>
    </div>
  );
};

export default MainNavigation;
