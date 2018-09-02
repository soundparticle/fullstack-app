import { artists, } from './reducers';

describe('Artist Reducers', () => {

  it('Returns an empty array for default state', () => {
    const state = artists(undefined, {});
    expect(state).toEqual([]);
  });
});