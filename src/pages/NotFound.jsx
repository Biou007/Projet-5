import { Link } from "react-router-dom";
import "./NotFound.scss";

function NotFound() {
  return (
    <main className="notfound">
      <h1 className="notfound_title">404</h1>

      <p className="notfound_text">
        Oups! La page que vous demandez n'existe pas.
      </p>

      <Link to="/" className="notfound_link">
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
}

export default NotFound;
