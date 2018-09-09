
import { getAlbums  } from '../../services/favoritesApi';
import { ALBUMS_LOAD } from './reducers';

export const loadAlbums = () => dispatch => {
  dispatch({
    type: ALBUMS_LOAD,
    payload: getAlbums()
  });
};
