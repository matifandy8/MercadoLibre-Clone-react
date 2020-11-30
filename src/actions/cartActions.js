import Axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstants";

export const addToCart = (productId) => async (dispatch, getState) => {
  const { data } = await Axios.get(
    `http://localhost:1984/products/${productId}`
  );
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      product: data._id,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};