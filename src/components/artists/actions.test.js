jest.mock('../../services/favoritesApi', () => ({
  getAlbums: jest.fn(),
  postAlbum: jest.fn()
}));

import { loadAlbums } from './actions';
import { ALBUMS_LOAD } from './reducers';
import { getAlbums } from '../../services/favoritesApi';

describe('Album Actions', () => {
  
  it('Loads Albums', async() => {
    const dispatch = jest.fn();
    const getState = jest.fn();
    await loadAlbums()(dispatch, getState);
    expect(dispatch).toBeCalledWith({ type: ALBUMS_LOAD, payload: getAlbums() });
  });
});