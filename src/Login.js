import { Link } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, password).then((auth) => {
      if (auth) {
        history.push("/");
      }
    });
  };

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
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
            />
            <button
              type="submit"
              onClick={signIn}
              className="login__singInButton"
            >
              Ingresa
            </button>
            <button onClick={register} className="login__registerButton">
              Crear cuenta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
