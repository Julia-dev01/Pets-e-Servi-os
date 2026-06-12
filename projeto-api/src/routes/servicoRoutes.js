const express = require("express");
const router = express.Router();
const {
  listarServicos,
  buscarServico,
  cadastrarServico,
  atualizarServico,
  removerServico,
} = require("../controllers/servicoController");

// GET /servicos - Lista todos os serviços
router.get("/", listarServicos);

// GET /servicos/:id - Busca um serviço pelo ID
router.get("/:id", buscarServico);

// POST /servicos - Cadastra um novo serviço
router.post("/", cadastrarServico);

// PUT /servicos/:id - Atualiza os dados de um serviço
router.put("/:id", atualizarServico);

// DELETE /servicos/:id - Remove um serviço
router.delete("/:id", removerServico);

module.exports = router;
