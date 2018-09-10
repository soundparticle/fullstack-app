import { albums, ALBUMS_LOAD, ALBUM_ADD } from './reducers';

describe('Album reducers', () => {

  it('Returns an empty array', () => {
    const state = albums(undefined, {});
    expect(state).toEqual([]);
  });

  it('Loads Albums', () => {
    const state = albums(undefined, { type: ALBUMS_LOAD, payload: [{ title: 'album' }] });
    expect(state).toEqual([{ title: 'album' }]);
  });

  it('Adds an Album', () => {
    const state = albums([{ title: 'album1' }], { type: ALBUM_ADD, payload: { title: 'album2' } });
    expect(state).toEqual([{ title: 'album1' }, { title: 'album2' }]);
  });
});