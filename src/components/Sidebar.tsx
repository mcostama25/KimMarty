import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <>
      {/* Botó hamburguesa */}
      <div className={`hamburger ${open ? "open" : ""}`} onClick={toggleMenu}>
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </div>

      {/* Sidebar full height */}
      <div className={`sidebar ${open ? "open" : ""}`}>
        <Link to="/biography" onClick={() => setOpen(false)}>L'autor</Link>
        <Link to="/" onClick={() => setOpen(false)}>Galeria</Link>
        <Link to="/shop" onClick={() => setOpen(false)}>Botiga</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contacte</Link>
      </div>
    </>
  );
};

export default Sidebar;
