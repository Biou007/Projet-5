import homeImg from "../assets/image_home.png";
import Banner from "../components/Banner";
import Card from "../components/Card";
import logements from "../data/logements.json";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Banner title="Chez vous, partout et ailleurs" background={homeImg} />
      <div className="cards-container">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
