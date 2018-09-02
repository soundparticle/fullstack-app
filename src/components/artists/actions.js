
import { getAllArtists  } from '../../services/api';
import { ARTISTS_LOAD } from './reducers';

export const loadAlbums = () => dispatch => {
  dispatch({
    type: ARTISTS_LOAD,
    payload: getAllArtists()
  });
};
