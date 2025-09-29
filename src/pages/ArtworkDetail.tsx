import { useParams } from "react-router-dom";

const artworks = [
  { id: 1, title: "Quadre 1", image: "..\assets\images\IMG-20250929-WA0006.jpg", description: "Descripció del Quadre 1." },
  { id: 2, title: "Quadre 2", image: "..\assets\images\IMG-20250929-WA0007.jpg", description: "Descripció del Quadre 2." },
  { id: 3, title: "Quadre 3", image: "..\assets\images\IMG-20250929-WA0008.jpg", description: "Descripció del Quadre 3." },
  { id: 2, title: "Quadre 2", image: "..\assets\images\IMG-20250929-WA0009.jpg", description: "Descripció del Quadre 2." },
  { id: 3, title: "Quadre 3", image: "..\assets\images\IMG-20250929-WA0010.jpg", description: "Descripció del Quadre 3." },
  { id: 3, title: "Quadre 3", image: "..\assets\images\IMG-20250929-WA0011.jpg", description: "Descripció del Quadre 3." },
  { id: 3, title: "Quadre 3", image: "..\assets\images\IMG-20250929-WA0012.jpg", description: "Descripció del Quadre 3." },
];

const ArtworkDetail = () => {
  const { id } = useParams();
  const artwork = artworks.find((a) => a.id === Number(id));

  if (!artwork) return <p>Obra no trobada</p>;

  return (
    <div className="page">
      <h1>{artwork.title}</h1>
      <img src={artwork.image} alt={artwork.title} className="artwork-detail-img"/>
      <p>{artwork.description}</p>
    </div>
  );
};

export default ArtworkDetail;
