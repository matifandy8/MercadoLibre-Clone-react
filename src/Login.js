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
        <div className="login__form">
          <h2>Hola! Ingresa tu e-mail y Contraseña</h2>
          <form>
            <input type="text" placeholder="E-mail" />
            <input type="password" placeholder="Contraseña" />
            <button type="submit" className="login__singInButton">
              Ingresa
            </button>
            <button className="login__registerButton">Crear cuenta</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
