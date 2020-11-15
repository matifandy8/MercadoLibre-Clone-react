import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
      <div className="header__top">
        <Link to="/">
          <img
            className="header__logo"
            src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.10.4/mercadolibre/logo__large_plus.png"
            alt=""
          />
        </Link>
        <div className="header__search">
          <input
            type="text"
            className="header__searchInput"
            placeholder="Buscar productos, marcas y más..."
          />
          <SearchIcon className="header__searchIcon" />
        </div>
        <span>Todo para la temporada de verano acá</span>
      </div>
      <div className="header__bottom">
        {/* Address */}
        <div className="header__address">
          <div className="header__address-icon">
            <RoomOutlinedIcon />
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Enviar a</span>
            <span className="header__optionLineTwo">Uruguay(UY)</span>
          </div>
        </div>
        {/* Nav */}
        <div className="header__bottom-nav">
          <span>
            <Link to="/products" className="header__link">
              Categorias
            </Link>
          </span>
          <span>Historial</span>
          <span>Tiendas oficiales</span>
          <span>Ofertas de la semana</span>
          <span>Vender</span>
          <span>Ayuda</span>
        </div>
        <Link to="/login" className="header__link-log">
          <span>Crea tu cuenta</span>
        </Link>
        <Link to="/login" className="header__link-log">
          <span>Ingresa</span>
        </Link>
        <Link to="/" className="header__link-log">
          <span>Mis compras</span>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
