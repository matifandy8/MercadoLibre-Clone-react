import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MessageBox from "./MessageBox";
import { addToCart } from "./actions/cartActions";
import Header from "./Header";

function Cart(props) {
  const productId = props.match.params.id;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId));
    }
  }, [dispatch, productId]);

  return (
    <div className="cart">
      <Header />
      {cartItems.length === 0 ? (
        <MessageBox>
          El carrito esta Vacio. <Link to="/">Ir a la Tienda</Link>
        </MessageBox>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.product}>
              <div className="row">
                <div>
                  <img src={item.image} alt={item.name} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
