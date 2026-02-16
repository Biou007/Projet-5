import { useParams } from "react-router-dom";
import starActive from "../assets/star-active.svg";
import starInactive from "../assets/star-inactive.svg";
import Collapse from "../components/Collapse";
import Slideshow from "../components/Slideshow";
import logements from "../data/logements.json";
import "./Logement.scss";

function Logement() {
  const { id } = useParams();

  const logement = logements.find((log) => log.id === id);

  // Vérification simple (au cas où)
  if (!logement) return <p>Logement introuvable</p>;

  const totalStars = 5;
  const rating = Number(logement.rating);

  return (
    <div className="logement-page">
      <Slideshow pictures={logement.pictures} />

      <div className="logement-info">
        <div className="logement-info-left">
          <h1 className="logement-title">{logement.title}</h1>
          <p className="logement-location">{logement.location}</p>

          <div className="logement-tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="logement-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="logement-info-right">
          <div className="logement-host">
            <p className="logement-host-name">{logement.host.name}</p>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="logement-host-picture"
            />
          </div>

          <div className="logement-rating">
            {[...Array(totalStars)].map((_, i) => (
              <span
                key={i}
                className={i < rating ? "star filled" : "star empty"}
              >
                <img
                  src={i < rating ? starActive : starInactive}
                  alt="étoile"
                  className="logement-star"
                />
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="logement-collapses">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Équipements"
          content={
            <ul className="equipments-list">
              {logement.equipments.map((eq, i) => (
                <li key={i}>{eq}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default Logement;
