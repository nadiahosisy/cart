import {
  CLEAR_CART,
  REMOVE,
  INCRESE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "../src/actions";

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }
  if (action.type === REMOVE) {
    const newCart = new Map(state.cart);
    return { ...state };
  }
  throw new Error(`no matching action type: ${action.type}`);
};

export default reducer;
