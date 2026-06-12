const express = require("express");
const router = express.Router();
const {
  listarPets,
  buscarPet,
  cadastrarPet,
  atualizarPet,
  removerPet,
} = require("../controllers/petController");

// GET /pets - Lista todos os pets
router.get("/", listarPets);

// GET /pets/:id - Busca um pet pelo ID
router.get("/:id", buscarPet);

// POST /pets - Cadastra um novo pet
router.post("/", cadastrarPet);

// PUT /pets/:id - Atualiza os dados de um pet
router.put("/:id", atualizarPet);

// DELETE /pets/:id - Remove um pet
router.delete("/:id", removerPet);

module.exports = router;
