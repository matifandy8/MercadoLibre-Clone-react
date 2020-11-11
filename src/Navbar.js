import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <nav className="main-nav">
        <div className="main-nav__logo">
          <a className="main-nav__logo-link">Company Name</a>
        </div>
        <ul className="main-nav__menu">
          <li className="main-nav__menu-item">
            <a className="main-nav__menu-item-link">Categories</a>
          </li>
          <li className="main-nav__menu-item">
            <a className="main-nav__menu-item-link">Products</a>
          </li>
          <li className="main-nav__menu-item">
            <a className="main-nav__menu-item-link">Vender</a>
          </li>
          <li className="main-nav__menu-item">
            <a className="main-nav__menu-item-link">Mi Carrito</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
