// import { Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Movies from "./components/movies";
import WatchList from "./pages/watch-list";
import { getMovieRequest } from "./api";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovieRequest(searchValue, setMovies);
  }, [searchValue]);
  console.log(movies);

  return (
    <Layout setSearchValue={setSearchValue} searchValue={searchValue}>
      <Routes>
        <Route exact path="/" element={<Movies data={movies} />} />
        <Route path="/watch-list" element={<WatchList />} />
      </Routes>
    </Layout>
  );
};

export default App;
