import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import GalleryPage from "./pages/GalleryPage";
import Biography from "./pages/Biography";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import ArtworkDetail from "./pages/ArtworkDetail";
import "./css/styles.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Routes>
            <Route path="/" element={<GalleryPage />} />
            <Route path="/biography" element={<Biography />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/artwork/:id" element={<ArtworkDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
