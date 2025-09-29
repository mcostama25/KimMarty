import { Link } from "react-router-dom";

interface ArtworkCardProps {
  id: number;
  title: string;
  image: string;
}

const ArtworkCard = ({ id, title, image }: ArtworkCardProps) => {
  return (
    <div className="artwork-card">
      <Link to={`/artwork/${id}`}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </Link>
    </div>
  );
};

export default ArtworkCard;
