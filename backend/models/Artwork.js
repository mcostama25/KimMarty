import mongoose from "mongoose";

const artworkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  estil: String,
  description: String,
  image: { type: String, required: true },
  year: Number,
});

// Creem el model "Artwork" basat en aquest esquema
export default mongoose.model("Artwork", artworkSchema);
