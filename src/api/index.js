const API_KEY = "api_key=d89f7b73bbeda5fbfabb118ebb31a69c";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL =
  BASE_URL +
  "/discover/movie?sort_by=popularity.desc&" +
  API_KEY +
  "&sort_by=popularity.desc";
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const SEARCH_URL = BASE_URL + "/search/movie?" + API_KEY + "&query=";

export const getMovieRequest = async (searchValue, setMovies) => {
  const responseDef = await fetch(API_URL);
  const responseDefJson = await responseDef.json();

  const url = SEARCH_URL + searchValue;
  const response = await fetch(url);
  const responseJson = await response.json();
  // test
  console.log(responseJson);

  if (searchValue) {
    if (responseJson.results) {
      setMovies(responseJson.results);
    }
  } else {
    setMovies(responseDefJson.results);
  }
};
