import { put, get, del } from './request';

const URL = 'http://localhost:3000/DiscogsApi';
const FAVORITES_URL = `${URL}/favorites`;

const getFavoriteUrl = artist_id => `${FAVORITES_URL}/artists/${artist_id}.json`;

export const addFavorite = ({ id, name, profile, images }) => {
  const url = getFavoriteUrl(id);
  return put(url, {
    id,
    name,
    profile,
    images,
  });
};

export const getFavorites = () => {
  return get(`${FAVORITES_URL}.json`)
    .then(res => {
      return Object.keys(res)
        .map(key => res[key]);
    });
};

export const getFavorite = id => {
  const url = getFavoriteUrl(id);
  return get(url);
};

export const removeFavorite = id => {
  const url = getFavoriteUrl(id);
  return del(url);
};