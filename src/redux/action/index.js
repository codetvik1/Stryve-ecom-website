// For Add Item to Cart
export const addCart = (product) =>{
    return {
        type:"ADDITEM",
        payload:product
    }
}

// For Delete Item to Cart
export const delCart = (product) =>{
    return {
        type:"DELITEM",
        payload:product
    }
}

// Add these action types
export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";

// Add these action creators
export const addWishlist = (product) => {
  return {
    type: ADD_TO_WISHLIST,
    payload: product,
  };
};

export const removeFromWishlist = (product) => {
  return {
    type: REMOVE_FROM_WISHLIST,
    payload: product,
  };
};