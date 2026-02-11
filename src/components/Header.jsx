import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header_content">
        <img src={logo} alt="Logo Kasa" className="header_logo" />
        <nav className="header_nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            A Propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
