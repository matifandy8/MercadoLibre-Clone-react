import React, { useState } from "react";
import "./Navbar.css";
import MenuIcon from "@material-ui/icons/Menu";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <nav className="main-nav">
        <div className="main-nav__logo">
          <a className="main-nav__logo-link">Company Name</a>
        </div>
        <ul
          className="main-nav__menu"
          style={{ transform: open ? "translateX(0px)" : "translateX(-500px)" }}
        >
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
        <MenuIcon
          onClick={() => setOpen(!open)}
          className="burger"
          fontSize="large"
        />
      </nav>
    </div>
  );
}

export default Navbar;
