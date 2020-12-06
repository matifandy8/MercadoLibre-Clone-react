import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <ul className="footer__info">
        <li>Trabaja con nosotros</li>
        <li>Terminos y condiciones</li>
        <li>Ayuda</li>
      </ul>
      <div className="footer__copyright">Copyright ©2020 Matias Fandiño.</div>
    </div>
  );
}

export default Footer;
