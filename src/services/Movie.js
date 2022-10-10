import axios from "axios";

const baseURL = "https://api.themoviedb.org/3";
const apiParams = "&api_key=e9c9aacbb58cd3ece735576bfb88d650";
const headers = {
  "Content-Type": "application/json",
};

const getMoviesByPopularity = async () => {
  return axios.get(`${baseURL}/movie/popular?page=1${apiParams}`, {
    headers: headers,
  });
};
const getMoviesByTopRated = async () => {
  return axios.get(`${baseURL}/movie/top_rated?page=1${apiParams}`, {
    headers: headers,
  });
};
const getMoviesUpComing = async () => {
  return axios.get(`${baseURL}/movie/upcoming?page=1${apiParams}`, {
    headers: headers,
  });
};

const getMovieDetails = async (movieId) => {
  return axios.get(`${baseURL}/movie/${movieId}?${apiParams}`, {
    headers: headers,
  });
};

const searchMovieByKeyword = async (movieName) => {
  return axios.get(`${baseURL}/search/movie?query=${movieName}${apiParams}`, {
    headers: headers,
  });
};

export { baseURL, getMoviesByPopularity, getMoviesByTopRated, getMoviesUpComing, getMovieDetails, searchMovieByKeyword };
