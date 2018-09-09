import { put, get, del } from './request';

const URL = 'https://localhost:27017/disco-dogs';
const FAVORITES_URL = `${URL}/favorites`;

const getFavoriteUrl = id => `${FAVORITES_URL}/id-${id}.json`;

export const addFavorite = ({ id, title, year, images }) => {
  const url = getFavoriteUrl(id);
  return put(url, {
    id,
    title,
    year,
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
