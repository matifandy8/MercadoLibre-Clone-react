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
          image="https://http2.mlstatic.com/D_NQ_NP_653855-MLU42819496963_072020-W.webp"
        />
        <Product
          id="23445930"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          image="https://http2.mlstatic.com/D_NQ_NP_850084-MLU42183823481_062020-W.webp"
        />
        <Product
          id="3254354345"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          image="https://http2.mlstatic.com/D_NQ_NP_789366-MLU42138628966_062020-W.webp"
        />
      </div>
      <div className="brandStore__row"></div>
    </div>
  );
}

export default BrandStore;
