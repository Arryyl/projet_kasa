import "./Footer.scss";
import React from "react";
import logo from '../../assets/logo-footer.png';

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="logo" className='logo_footer' />
      <div>© 2020 Kasa. All rights reserved</div>
    </footer>
  );
};