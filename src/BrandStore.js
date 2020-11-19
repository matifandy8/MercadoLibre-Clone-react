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
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          image="https://http2.mlstatic.com/D_NQ_NP_758886-MLU42155384479_062020-W.webp"
        />
        <Product
          id="49538094"
          title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
          price={239.0}
          image="https://http2.mlstatic.com/D_NQ_NP_852863-MLU42958152306_072020-W.webp"
        />
        <Product
          id="4903850"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          price={199.99}
          image="https://http2.mlstatic.com/D_NQ_NP_647905-MLU42184073149_062020-W.webp"
        />
      </div>
      <div className="brandStore__row">
        <Product
          id="4903850"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          price={199.99}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product
          id="23445930"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
        <Product
          id="3254354345"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
      </div>
      <div className="brandStore__row"></div>
    </div>
  );
}

export default BrandStore;
