// import { Route, Switch } from "react-router-dom";
import React, { useState, useEffect, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Movies from "./components/movies";
import WatchList from "./pages/watch-list";
import { getMovieRequest } from "./api";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    getMovieRequest(searchValue, setMovies);
  }, [searchValue]);

  useEffect(() => {
    const movieList = JSON.parse(
      localStorage.getItem("react-movie-app-favorite")
    );

    setWatchList(movieList);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favorite", JSON.stringify(items));
  };

  const addWatchList = (movie) => {
    const newWatchList = [...watchList, movie];
    setWatchList(newWatchList);
    saveToLocalStorage(newWatchList);
  };

  const removeWatchList = (movie) => {
    const newWatchList = watchList.filter((watch) => watch.id !== movie.id);
    setWatchList(newWatchList);
    saveToLocalStorage(newWatchList);
  };

  return (
    <Layout setSearchValue={setSearchValue} searchValue={searchValue}>
      <Routes>
        <Route
          exact
          path="/"
          element={<Movies data={movies} addWatchList={addWatchList} />}
        />
        <Route
          path="/watch-list"
          element={
            <WatchList
              watchList={watchList}
              removeWatchList={removeWatchList}
            />
          }
        />
      </Routes>
    </Layout>
  );
};

export default App;
