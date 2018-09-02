import { get } from './request';

const API_KEY = 'b7cc8c95730e9470df723ebf08a792d5';
const API_QUERY = `user_key=${API_KEY}`;
const BASE_URL = 'http://api.onemusicapi.com';
const EVERYTHING_URL = `${BASE_URL}/?${API_QUERY}`;

const getUrl = url => {
  const json = window.localStorage.getItem(url);
  if(json) {
    const response = JSON.parse(json);
    return Promise.resolve(response);
  }

  return get(url)
    .then(response => {
      window.localStorage.setItem(url, JSON.stringify(response));
      return response;
    });
};

export function search({ search }, { page }) {
  const searchTerm = `&s=${search}`;
  const paging = `&page=${page}`;

  return get(`${EVERYTHING_URL}${searchTerm}${paging}`);
}

export function getArtist(id) {
  if(id) {
    return getUrl(`${EVERYTHING_URL}&=${id}`);
  }
  else {
    return getUrl(EVERYTHING_URL);
  }
}

