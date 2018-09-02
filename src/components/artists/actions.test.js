jest.mock('../../services/api', () => ({
  getAllArtists: jest.fn(),
  // postAlbum: jest.fn()
}));

import { loadArtists } from './actions';
import { ARTISTS_LOAD } from './reducers';
import { getAllArtists } from '../../services/api';

describe('Album Actions', () => {
  
  it('Loads Albums', async() => {
    const dispatch = jest.fn();
    const getState = jest.fn();
    await loadArtists()(dispatch, getState);
    expect(dispatch).toBeCalledWith({ type: ARTISTS_LOAD, payload: getAllArtists() });
  });
});