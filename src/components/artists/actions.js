
import { getFavorites, postFavorite  } from '../../services/favoritesApi';
import { FAVORITES_LOAD, FAVORITES_ADD } from './reducers';

export const loadFavorites = () => dispatch => {
  dispatch({
    type: FAVORITES_LOAD,
    payload: getFavorites()
  });
};

export const addFavorite = (album) => dispatch => {
  dispatch({
    type: FAVORITES_ADD,
    payload: postFavorite(album)
  });
};
