const API_KEY = '59106e174e5800a0537739a6d2a5791b';
const BASE_URL = 'https://api.themoviedb.org/3';

const params = new URLSearchParams({
  api_key: API_KEY,
});

export const fetchMoviesList = () => {
  const url = `${BASE_URL}/trending/movie/day?${params}`;
  return fetch(url)
    .then(r => r.json())
    .then(res => res.results)
    .catch(error => console.log(error));
};

export const fetchMovieDetails = id => {
  const url = `${BASE_URL}/movie/${id}?${params}`;

  return fetch(url)
    .then(r => r.json())
    .then(res => res)
    .catch(error => console.log(error));
};

export const fetchCast = id => {
  const url = `${BASE_URL}/movie/${id}/credits?${params}`;

  return fetch(url)
    .then(r => r.json())
    .then(res => res)
    .catch(error => console.log(error));
};

export const fetchReviews = id => {
  const url = `${BASE_URL}/movie/${id}/reviews?${params}`;

  return fetch(url)
    .then(r => r.json())
    .then(res => res)
    .catch(error => console.log(error));
};

export const fetchMoviesOnSearch = query => {
  const url = `${BASE_URL}/search/movie?query=${query}&${params}`;

  return fetch(url)
    .then(r => r.json())
    .then(res => res)
    .catch(error => console.log(error));
};

export const setImageURL = path => {
  const url = `https://image.tmdb.org/t/p/w500/${path}`;
  return url;
};
