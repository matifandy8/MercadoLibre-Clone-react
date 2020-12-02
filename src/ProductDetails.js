import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import { detailsProduct } from "./actions/productActions";

function ProductDetails(props) {
  const productDetails = useSelector((state) => state.productDetails);
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };

  return (
    <div>
      <Header />
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="productDetails">
          <div className="productDetails__top">
            <img
              className="productDetails__img"
              src="https://http2.mlstatic.com/storage/official-stores-images/lenovo/background201709180200.jpg"
            />
            <img
              className="productDetails__brandimg"
              src="https://http2.mlstatic.com/D_Q_NP_897210-MLA26014325691_092017-T.webp"
            />
          </div>
          <div className="productDetails__info">
            <img src={product.image} />
            <div className="productDetails__price">
              <h1>{product.name}</h1>
              <strong>${product.price}</strong>
              <select value={qty} onChange={(e) => setQty(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
              <button
                onClick={addToCartHandler}
                className="productDetails__button"
              >
                Comprar ahora
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
