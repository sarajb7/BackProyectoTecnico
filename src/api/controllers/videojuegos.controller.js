const VideoJuego = require("../models/videojuegos.model");

const getJuegos = async (req, res) => {
  try {
    const juego = await VideoJuego.find();
    console.log(juego);
  
    return res.status(200).json(juego);
    
  } catch (error) {
    return res.json(error);
  }
};
const createJuego = async (req, res) => {
  try {
   // console.log(req.body);
    
    const body = req.body;
    const juego = new VideoJuego(body);
    

  
    const createdJuego = await juego.save();
    // console.log(createdAnuncio);
    return res.json(createdJuego);
    
  } catch (error) {
    return res.json(error);
  }
};
const editJuego = async (req, res) => {
  try {
    
    const { id } = req.params;
    const juegoBody = new VideoJuego(req.body);
    juegoBody._id = id;
    // console.log(req.file.path);
    // if(req.file.path){
    //     videogameBody.image = req.file.path;
    // }
    const updateJuego = await VideoJuego.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updateJuego) {
      return res.status(404).json({ message: "Este videojuego no existe" });
    }
    return res.status(200).json(updateJuego);
  } catch (error) {}
};
const deleteJuego = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteJuego = await VideoJuego.findByIdAndDelete(id);
    if (!deleteJuego) {
      return res.status(404).json({ message: "Este videojuego no existe" });
    }
    return res.status(200).json(deleteJuego);
  } catch (error) {}
};
const getJuegobyID = async (req, res) => {
  try {
    const { id } = req.params;
    const juegoID = await VideoJuego.findOne({ _id: id });
    console.log(juegoID);

    return res.status(200).json(juegoID); 
  } catch {
    return res.json(error);
  }
};

module.exports = {
  getJuegos,
  createJuego,
  editJuego,
  deleteJuego,
  getJuegobyID,
};