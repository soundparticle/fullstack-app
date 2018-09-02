
import { getAllArtists  } from '../../services/api';
import { ARTISTS_LOAD } from './reducers';

export const loadArtists = () => dispatch => {
  dispatch({
    type: ARTISTS_LOAD,
    payload: getAllArtists()
  });
};
