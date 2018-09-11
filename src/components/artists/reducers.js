export const FAVORITES_LOAD = 'FAVORITES_LOAD';
export const FAVORITE_ADD = 'FAVORITE_ADD';


export const getFavorites = state => state.favorites;

export function favorites(state = [], { type, payload }) {
  switch(type) {
    case FAVORITES_LOAD: 
      return payload;
    case FAVORITE_ADD:
      return [...state, payload];
    default:
      return state;
  }
}
