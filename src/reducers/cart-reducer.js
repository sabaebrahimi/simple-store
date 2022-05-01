const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_CART_ITEM":
      return state.concat(action.cartItem);
    case "REMOVE_CART_ITEM":
        return state.filter(item => item.id != action.cartItemId);
    case "REMOVE_ALL_ITEMS": 
        return [];
    case "RETURN_CART_ITEMS":
      return state;
    default:
      return state;
  }
};

export default cartReducer;
