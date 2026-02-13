import { useParams } from "react-router-dom"; // pour récupérer l'id de l'URL
import Slideshow from "../components/Slideshow"; // chemin correct pour ton projet
import logements from "../data/logements.json"; // ton vrai fichier JSON

function Logement() {
  const { id } = useParams();
  const logement = logements.find((log) => log.id === id);

  return (
    <div className="logement-page">
      <Slideshow pictures={logement.pictures} />
    </div>
  );
}

export default Logement;
