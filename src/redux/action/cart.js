import { addToCart, removeFromCart, updateQuantity } from "../reducer/cart"; // Import your cartSlice

export const addTocart = (data) => async (dispatch, getState) => {
  dispatch(addToCart(data)); // Dispatch the generated action creator

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cart));
  return data;
}; 

export const removeProductFromCart = (productId) => (dispatch, getState) => {
  dispatch(removeFromCart(productId)); // Dispatch the generated action creator

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cart));
};

export const modifyProductQuantity =
  (productId, newQuantity) => (dispatch, getState) => {
    dispatch(updateQuantity({ productId, newQuantity })); // Dispatch the generated action creator

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cart));
  };
