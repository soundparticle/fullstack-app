import { post, get, /*del*/ } from './request';

const URL = '/api';
const FAVORITES_URL = `${URL}/favorites`;

const getFavoriteUrl = FAVORITES_URL;

export const postFavorite = album => {
  const url = getFavoriteUrl;
  console.log('**** album', album);
  return post(url, album);
};

export const getFavorites = () => {
  return get(`${FAVORITES_URL}`)
    .then(res => {
      return Object.keys(res)
        .map(key => res[key]);
    });
};

// export const getFavorite = id => {
//   const url = getFavoriteUrl(id);
//   console.log('**** url', url);
//   return get(url);
// };

// export const removeFavorite = id => {
//   const url = getFavoriteUrl(id);
//   return del(url);
// };
