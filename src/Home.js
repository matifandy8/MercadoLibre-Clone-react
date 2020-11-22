import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__slider">
        <img src="https://http2.mlstatic.com/optimize/o:f_webp/resources/exhibitors/MLU-envios-gratis/c215a310-1adb-11eb-89df-6f1b33c1157b-home-slider_desktop.jpg" />
      </div>
      <h1>Las mejores tiendas te esperan</h1>
      <div className="home__stores">
        <Link className="home__link" to="/BrandStore">
          <div className="home__brand">
            <div className="home__brand__top">
              <img src="https://cdn.gizmogiga.com/files/uploads/2020/09/Lenovo-Legion-5-82B1000AUS.jpg" />
              <img src="https://http2.mlstatic.com/D_Q_NP_897210-MLA26014325691_092017-AE.webp" />
              <h2>Lenovo</h2>
            </div>
            <div className="home__brand__bottom">
              <img src="https://http2.mlstatic.com/D_Q_NP_758886-MLU42155384479_062020-R.webp" />
              <img src="https://http2.mlstatic.com/D_Q_NP_852863-MLU42958152306_072020-R.webp" />
              <img src="https://http2.mlstatic.com/D_Q_NP_647905-MLU42184073149_062020-R.webp" />
              <a>Ver tienda</a>
            </div>
          </div>
        </Link>
        <Link className="home__link" to="/BrandStore">
          <div className="home__brand">
            <div className="home__brand__top">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRRsEfJbghtQ7J0bWwciO7c-cP0GuQ__V-Q&usqp=CAU" />
              <img src="https://http2.mlstatic.com/D_Q_NP_984708-MLA25722192765_072017-AE.webp" />
              <h2>LG</h2>
            </div>
            <div className="home__brand__bottom">
              <img src="https://http2.mlstatic.com/D_Q_NP_731440-MLU43804398582_102020-R.webp" />
              <img src="https://http2.mlstatic.com/D_Q_NP_942060-MLU43332641010_092020-R.webp" />
              <img src="https://http2.mlstatic.com/D_Q_NP_805485-MLU43332678778_092020-R.webp" />
              <a>Ver tienda</a>
            </div>
          </div>
        </Link>
        <Link className="home__link" to="/BrandStore">
          <div className="home__brand">
            <div className="home__brand__top">
              <img src="https://cnet3.cbsistatic.com/img/wjk_9y4HlQLXMLE_rP_dEtNtH6Y=/2020/10/22/81171232-01df-4253-ad61-894acb59b2a0/huawei-mate-40-pro-product-hoyle-3.jpg" />
              <img src="https://http2.mlstatic.com/D_Q_NP_929266-MLA28000008340_082018-AE.webp" />
              <h2>Huawei</h2>
            </div>
            <div className="home__brand__bottom">
              <img src="https://http2.mlstatic.com/D_Q_NP_685862-MLU43774567954_102020-R.webp" />
              <img src="https://http2.mlstatic.com/D_Q_NP_891849-MLU43774647734_102020-R.webp" />
              <img src="https://http2.mlstatic.com/D_Q_NP_610669-MLU43774606116_102020-R.webp" />
              <a>Ver tienda</a>
            </div>
          </div>
        </Link>
        <Link className="home__link" to="/BrandStore">
          <div className="home__brand">
            <div className="home__brand__top">
              <img src="https://images.samsung.com/in/smartphones/galaxy-s20/images/kv/galaxy-s20_highlights_kv_00.jpg" />
              <img src="https://http2.mlstatic.com/D_Q_NP_883789-MLA29271165898_012019-AE.webp" />
              <h2>Samsung</h2>
            </div>
            <div className="home__brand__bottom">
              <img src="https://http2.mlstatic.com/D_Q_NP_738063-MLU42064562481_062020-R.webp" />
              <img src="https://http2.mlstatic.com/D_Q_NP_929358-MLU42539627075_072020-R.webp" />
              <img src="https://http2.mlstatic.com/D_Q_NP_843654-MLU41303931684_042020-R.webp" />
              <a>Ver tienda</a>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
