import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Artwork from "./models/Artwork.js";
import path from "path";

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Connexió MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/artgallery", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connectat a MongoDB"))
.catch(err => console.error("❌ Error de connexió:", err));

// --- RUTES --- //

// Llista totes les obres
app.get("/api/artworks", async (req, res) => {
  try {
    const artworks = await Artwork.find();
    res.json(artworks);
  } catch (err) {
    res.status(500).json({ error: "Error obtenint obres" });
  }
});

// Obtenir una obra per ID
app.get("/api/artworks/:id", async (req, res) => {
  try {
    const artwork = await Artwork.findById(req.params.id);
    if (!artwork) return res.status(404).json({ error: "Obra no trobada" });
    res.json(artwork);
  } catch (err) {
    res.status(500).json({ error: "Error obtenint l’obra" });
  }
});

// Afegir una obra nova (opcional, per proves)
app.post("/api/artworks", async (req, res) => {
  try {
    const newArtwork = new Artwork(req.body);
    await newArtwork.save();
    res.status(201).json(newArtwork);
  } catch (err) {
    res.status(400).json({ error: "Error afegint obra" });
  }
});

// Servir imatges (si decideixes fer-ho pel backend)
app.use("/imatges", express.static(path.join(path.resolve(), "imatges")));

// Arrencar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor escoltant a http://localhost:${PORT}`);
});
