import mongoose from "mongoose";
import Artwork from "./models/Artwork.js";
const MONGO_URL = "mongodb://127.0.0.1:27017/artgallery";

const artworks = [
    {
        title: "La pensant",
        estil: "Oli sobre tela",
        description: "Descripció del primer quadre",
        image: "IMG-20250929-WA0006.jpg",
        year: 2020,
    },
    {
        title: "Jornada",
        estil: "Oli sobre tela",
        description: "Descripció del segon quadre",
        image: "IMG-20250929-WA0007.jpg",
        year: 2021,
    },
    {
        title: "Teresa",
        estil: "Oli sobre tela",
        description: "Un altre exemple",
        image: "IMG-20250929-WA0008.jpg",
        year: 2022,
    },
    {
        title: "La peixetera",
        estil: "Oli sobre tela",
        description: "Descripció de l’obra 4",
        image: "IMG-20250929-WA0009.jpg",
        year: 2022,
    },
    {
        title: "Calma",
        estil: "Oli sobre tela",
        description: "Una obra abstracta",
        image: "IMG-20250929-WA0010.jpg",
        year: 2023,
    },
    {
        title: "Quadre 6",
        estil: "Oli sobre tela",
        description: "Inspiració natural",
        image: "IMG-20250929-WA0011.jpg",
        year: 2023,
    },
    {
        title: "Gal·la",
        estil: "Oli sobre tela",
        description: "Quadre final de prova",
        image: "IMG-20250929-WA0012.jpg",
        year: 2024,
    }
]

mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log("✅ Connectat a MongoDB");

    // Neteja col·lecció
    await Artwork.deleteMany({});
    console.log("🗑️ Col·lecció netejada");

    // Inserta dades
    await Artwork.insertMany(artworks);
    console.log("✅ 7 quadres inserits!");

    mongoose.connection.close();
  })
  .catch((err) => console.error(err));