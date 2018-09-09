import { get } from './request';
const API_TOKEN = 'tPZuXrWQEtezKKbBXfVXNHeDDdDUIGtiOlGtErTv';
const API_QUERY = `token=${API_TOKEN}`;
const BASE_URL = 'https://api.discogs.com';
const EVERYTHING_URL = `${BASE_URL}/database/search?${API_QUERY}`;

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
  const searchTerm = `&artist=${search}`;
  const paging = `&page=${page}`;

  return get(`${EVERYTHING_URL}${searchTerm}${paging}`);
}

export function getAlbums(id) {
  if(id) {
    return getUrl(`${BASE_URL}/releases/${id}?${API_QUERY}`);
  }
  else {
    return getUrl(EVERYTHING_URL);
  }
}