import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Artwork {
  _id: string;
  title: string;
  image: string;
}

function Gallery() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [layout, setLayout] = useState<{ rows: number; cols: number }[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/artworks")
      .then(res => res.json())
      .then(data => {
        setArtworks(data);

        // Crear layout aleatori
        const newLayout = data.map(() => ({
          rows: Math.floor(Math.random() * 2) + 1, // 1 o 2 files
          cols: Math.floor(Math.random() * 2) + 1, // 1 o 2 columnes
        }));
        setLayout(newLayout);
      });
  }, []);

  return (
    <div
      className="gallery"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gridAutoRows: "200px",
        gap: "10px",
      }}
    >
      {artworks.map((art, index) => (
        <Link
          key={art._id}
          to={`/artwork/${art._id}`}
          style={{
            gridRowEnd: `span ${layout[index]?.rows || 1}`,
            gridColumnEnd: `span ${layout[index]?.cols || 1}`,
            overflow: "hidden",
            display: "block",
            borderRadius: "10px",
          }}
        >
          <img
            src={`http://localhost:4000/imatges/${art.image}`}
            alt={art.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </Link>
      ))}
    </div>
  );
}

export default Gallery;

