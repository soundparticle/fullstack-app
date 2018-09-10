jest.mock('../../services/favoritesApi', () => ({
  getAlbums: jest.fn(),
  postAlbum: jest.fn()
}));

import { loadAlbums, addAlbum } from './actions';
import { ALBUMS_LOAD, ALBUM_ADD } from './reducers';
import { getAlbums, postAlbum } from '../../services/favoritesApi';

describe('Album Actions', () => {
  
  it('Loads Albums', async() => {
    const dispatch = jest.fn();
    const getState = jest.fn();
    await loadAlbums()(dispatch, getState);
    expect(dispatch).toBeCalledWith({ type: ALBUMS_LOAD, payload: getAlbums() });
  });

  it('Adds Album', async() => {
    const dispatch = jest.fn();
    const getState = jest.fn();
    await addAlbum({ title: 'album' })(dispatch, getState);
    expect(dispatch).toBeCalledWith({ type: ALBUM_ADD, payload: postAlbum({ title: 'album' }) });
  });
});