import firma from "../assets/firma.png";

const Header = () => {
  return (
    <div className="header">
      <img src={firma} alt="Artist" className="artist-img" />
      <div className="artist-info">
        <h2>J. Martí</h2>
        <p>
          Galeria d'art de la família Martí Ribera.
        </p>
      </div>
    </div>
  );
};

export default Header;
