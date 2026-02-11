import "./Footer.scss";
import logo from "../assets/Logo_white.png";

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo Kasa" className="footer_logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
