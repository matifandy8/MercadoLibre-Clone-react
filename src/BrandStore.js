import React from "react";
import "./BrandStore.css";
import Product from "./Product";

function BrandStore() {
  return (
    <div className="brandStore">
      <div className="brandStore__top">
        <img
          className="brandStore__img"
          src="https://http2.mlstatic.com/storage/official-stores-images/lenovo/background201709180200.jpg"
        />
        <img
          className="brandStore__brandimg"
          src="https://http2.mlstatic.com/D_Q_NP_897210-MLA26014325691_092017-T.webp"
        />
      </div>
      <div className="brandStore__row">
        <Product />
      </div>
    </div>
  );
}

export default BrandStore;
