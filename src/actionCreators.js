const addToCart = product => {
  return {
    type: 'ADD_TO_CART',
    //product: product
    product
  }
};

const removeFromCart = product => {
  return {
    type: 'REMOVE_FROM_CART',
    //product: product
    product
  }
};

export { addToCart, removeFromCart };