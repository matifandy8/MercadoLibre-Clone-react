import { Link } from "@material-ui/core";
import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="header__top">
        <Link to="/">
          <img
            className="header__logo"
            src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.10.4/mercadolibre/logo__large_plus.png"
            alt=""
          />
        </Link>
      </div>
      <div className="login__main">
        <div className="login__top"></div>
        <div className="login__form"></div>
      </div>
    </div>
  );
}

export default Login;
