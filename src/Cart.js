import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MessageBox from "./MessageBox";
import { addToCart, removeFromCart } from "./actions/cartActions";
import Header from "./Header";
import "./Cart.css";
import Footer from "./Footer";

function Cart(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cart">
      <Header />
      <div className="cart__container">
        {cartItems.length === 0 ? (
          <MessageBox>
            El carrito esta Vacio. <Link to="/">Ir a la Tienda</Link>
          </MessageBox>
        ) : (
          <ul className="cart__item">
            {cartItems.map((item) => (
              <li key={item.product}>
                <div className="row">
                  <div>
                    <img
                      className="cart__item-image"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <div>
                    <Link
                      to={`/product/${item.product}`}
                      style={{ textDecoration: "none" }}
                    >
                      {item.name}
                    </Link>
                  </div>
                  <select
                    value={item.qty}
                    onChange={(e) =>
                      dispatch(addToCart(item.product), Number(e.target.value))
                    }
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                  </select>
                  <div>${item.price}</div>
                  <button
                    type="button"
                    onClick={() => removeFromCartHandler(item.product)}
                  >
                    Borrar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="cart__subtotal">
          <h2>
            Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
            {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
          </h2>
          <button type="button">Comprar Productos</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
