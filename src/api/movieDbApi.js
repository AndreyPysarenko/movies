import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '8ae0eb13b175efdd49cca3af4a1ffe3d';

export const fetchGetTrending = async () => {
  const { data } = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return data;
};

export const fetchSearchMovie = async query => {
  const { data } = await axios.get(
    `search/movie?api_key=${API_KEY}&include_adult=false&language=en-US&page=1&query=${query}`
  );
  return data;
};

export const fetchGetMovieDetails = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const fetchGetMovieCredits = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const fetchGetMovieReviews = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return data;
};
