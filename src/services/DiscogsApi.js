import { get } from './request';
const API_TOKEN = 'tPZuXrWQEtezKKbBXfVXNHeDDdDUIGtiOlGtErTv';
const API_QUERY = `token=${API_TOKEN}`;
const BASE_URL = 'https://api.discogs.com';
const EVERYTHING_URL = `/${BASE_URL}/database/search?${API_QUERY}`;

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

export function getArtists(artist_id) {
  if(artist_id) {
    return getUrl(`${EVERYTHING_URL}/artists/${artist_id}`);
  }
  else {
    return getUrl(EVERYTHING_URL);
  }
}