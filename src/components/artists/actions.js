
import { getAlbums, postAlbum  } from '../../services/favoritesApi';
import { ALBUMS_LOAD, ALBUM_ADD } from './reducers';

export const loadAlbums = () => dispatch => {
  dispatch({
    type: ALBUMS_LOAD,
    payload: getAlbums()
  });
};

export const addAlbum = (album) => dispatch => {
  dispatch({
    type: ALBUM_ADD,
    payload: postAlbum(album)
  });
};
