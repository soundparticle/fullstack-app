export const ARTISTS_LOAD = 'ARTISTS_LOAD';
export const ARTIST_ADD = 'ARTIST_ADD';


export const getAlbums = state => state.albums;
export const getImagesByAlbum = state => state.images;

export function albums(state = [], { type, payload }) {
  switch (type) {
    case ARTISTS_LOAD: 
      return payload;
    
    default:
      return state;
  }
}