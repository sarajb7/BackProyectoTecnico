const express = require("express");
const {getJuegos, createJuego, editJuego, deleteJuego, getJuegobyID} = require("../controllers/videojuegos.controller");

const router = express.Router();

router.get("/", getJuegos);
router.post("/", createJuego);
router.put("/:id", editJuego);
router.delete("/:id", deleteJuego);
router.get("/:id", getJuegobyID);

module.exports = router;
