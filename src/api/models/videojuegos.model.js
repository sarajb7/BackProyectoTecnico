const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const comentarioSchema = new Schema({
  user: {type:Schema.Types.ObjectId,ref:"user"}, 
  comentario: { type: String, required: true },
  fecha: { type: Date, default: Date.now }
});

const videoJuegoSchema = new Schema(
  {
    nombre: { type: String, require: true },
    imagen: [{ type: String, default: "" }],
    categoria: { type: String, default:""},
    comentarios: [comentarioSchema],
  },
  {
    collection: "VideoJuegos",
  }
);

const VideoJuego = mongoose.model("VideoJuegos", videoJuegoSchema);
module.exports = VideoJuego;