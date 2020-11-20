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
          id="1"
          title="Notebook Lenovo Thinkbook 13s I5/13,3/16gb/256gb- Oficial"
          price={1600}
          image="https://http2.mlstatic.com/D_NQ_NP_758886-MLU42155384479_062020-W.webp"
        />
        <Product
          id="2"
          title="Tablet Lenovo 10 Tb-x505l Lte/ Ram 2gb/ Rom 16gb"
          price={270}
          image="https://http2.mlstatic.com/D_NQ_NP_852863-MLU42958152306_072020-W.webp"
        />
        <Product
          id="3"
          title="Monitor Lenovo Thinkvision S22e "
          price={150}
          image="https://http2.mlstatic.com/D_NQ_NP_647905-MLU42184073149_062020-W.webp"
        />
      </div>
      <div className="brandStore__row">
        <Product
          id="4"
          title="Aio Lenovo A540-24arr Ryzen3/8gb/1tb/24 - Nueva"
          price={999}
          image="https://http2.mlstatic.com/D_NQ_NP_653855-MLU42819496963_072020-W.webp"
        />
        <Product
          id="23445930"
          title="Pc Lenovo Thinkcentre M720s Sff I5/12gb Ram/256gb Ssd"
          price={1200}
          image="https://http2.mlstatic.com/D_NQ_NP_850084-MLU42183823481_062020-W.webp"
        />
        <Product
          id="5"
          title="Lenovo Chromebook 100e 11,6 - Oficial"
          price={470}
          image="https://http2.mlstatic.com/D_NQ_NP_789366-MLU42138628966_062020-W.webp"
        />
      </div>
      <div className="brandStore__row"></div>
    </div>
  );
}

export default BrandStore;
