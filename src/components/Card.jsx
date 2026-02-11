import { Link } from "react-router-dom";
import "./Card.scss";

function Card({ id, title, cover }) {
  return (
    <Link to={`/logement/${id}`} className="card">
      <article>
        <img src={cover} alt={title} />
        <h3>{title}</h3>
      </article>
    </Link>
  );
}

export default Card;
