import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = (state, action) => {
  if (action.type === "REPLACE_PRODUCTS") {
    return {
      ...state,
      products: action.products
    };
  } else if (action.type === "ADD_TO_CART") {
    return {
      ...state,
      cart: state.cart.concat(action.product)
    };
  } else if (action.type === "REMOVE_FROM_CART") {
    return {
      ...state,
      cart: state.cart.filter(product => product.id !== action.product.id)
    };
  }

  return state;
};

const logger = store => next => action => {
  console.group(action.type);
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd(action.type);
  return result;
};

export default createStore(reducer, { cart: [], products: [] }, applyMiddleware(logger, thunk));