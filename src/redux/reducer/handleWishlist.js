import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../action';

const wishlist = [];

const handleWishlist = (state = wishlist, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      // Check if product already exists in wishlist
      const exists = state.find((x) => x.id === action.payload.id);
      if (exists) {
        return state;
      }
      return [...state, action.payload];

    case REMOVE_FROM_WISHLIST:
      return state.filter((x) => x.id !== action.payload.id);

    default:
      return state;
  }
};

export default handleWishlist; 