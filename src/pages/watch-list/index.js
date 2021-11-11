import React, { useContext } from "react";
import classes from "./styles/WatchList.module.css";
import FavouritesContext from "../../components/store/favourites-context";
import Favorites from "./Favorites";

const WatchList = () => {
  const favouriteCtx = useContext(FavouritesContext);
  let content;
  if (favouriteCtx.totalFavourites === 0) {
    content = <p>You got no Watch List. Start adding some?</p>;
  } else {
    content = <Favorites data={favouriteCtx.favourites} />;
  }
  return (
    <>
      <div className={classes.movies} id="movies">
        <h1>Watch List</h1>
        {content}
      </div>
    </>
  );
};

export default WatchList;
