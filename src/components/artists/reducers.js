export const ALBUMS_LOAD = 'ALBUMS_LOAD';
// export const ARTIST_ADD = 'ARTIST_ADD';


export const getAlbums = state => state.albums;
// export const getImagesByArtist = state => state.images;

export function albums(state = [], { type, payload }) {
  switch(type) {
    case ALBUMS_LOAD: 
      return payload;
    
    default:
      return state;
  }
}