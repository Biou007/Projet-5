import aboutImg from "../assets/image_about.png";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import "./About.scss";

function About() {
  return (
    <main className="about_page">
      {/* Banner */}
      <Banner background={aboutImg} />

      {/* Conteneur des Collapses */}
      <section className="collapses_container">
        <Collapse
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        />
        <Collapse
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Collapse
          title="Service"
          content="La qualité du service est au cœur de notre engagements chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
        />
        <Collapse
          title="Sécurité"
          content="La sécurité est la priorité chez Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critère de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </section>
    </main>
  );
}

export default About;
