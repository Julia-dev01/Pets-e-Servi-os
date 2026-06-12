// Banco de dados simulado em memória
let pets = [
  {
    id: 1,
    nome: "Rex",
    especie: "Cachorro",
    raca: "Golden Retriever",
    idade: 3,
    tutor: "João Silva",
    telefone: "(11) 99999-0001",
  },
  {
    id: 2,
    nome: "Mimi",
    especie: "Gato",
    raca: "Siamês",
    idade: 2,
    tutor: "Maria Oliveira",
    telefone: "(11) 99999-0002",
  },
  {
    id: 3,
    nome: "Bolinha",
    especie: "Cachorro",
    raca: "Poodle",
    idade: 5,
    tutor: "Carlos Souza",
    telefone: "(11) 99999-0003",
  },
];

let proximoId = 4;

// GET /pets
const listarPets = (req, res) => {
  res.json({
    sucesso: true,
    total: pets.length,
    dados: pets,
  });
};

// GET /pets/:id
const buscarPet = (req, res) => {
  const id = parseInt(req.params.id);
  const pet = pets.find((p) => p.id === id);

  if (!pet) {
    return res.status(404).json({ sucesso: false, erro: "Pet não encontrado" });
  }

  res.json({ sucesso: true, dados: pet });
};

// POST /pets
const cadastrarPet = (req, res) => {
  const { nome, especie, raca, idade, tutor, telefone } = req.body;

  if (!nome || !especie || !tutor) {
    return res.status(400).json({
      sucesso: false,
      erro: "Campos obrigatórios: nome, especie, tutor",
    });
  }

  const novoPet = {
    id: proximoId++,
    nome,
    especie,
    raca: raca || "Não informada",
    idade: idade || 0,
    tutor,
    telefone: telefone || "Não informado",
  };

  pets.push(novoPet);

  res.status(201).json({
    sucesso: true,
    mensagem: "Pet cadastrado com sucesso",
    dados: novoPet,
  });
};

// PUT /pets/:id
const atualizarPet = (req, res) => {
  const id = parseInt(req.params.id);
  const index = pets.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ sucesso: false, erro: "Pet não encontrado" });
  }

  pets[index] = { ...pets[index], ...req.body, id };

  res.json({
    sucesso: true,
    mensagem: "Pet atualizado com sucesso",
    dados: pets[index],
  });
};

// DELETE /pets/:id
const removerPet = (req, res) => {
  const id = parseInt(req.params.id);
  const index = pets.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ sucesso: false, erro: "Pet não encontrado" });
  }

  const petRemovido = pets.splice(index, 1)[0];

  res.json({
    sucesso: true,
    mensagem: "Pet removido com sucesso",
    dados: petRemovido,
  });
};

module.exports = {
  listarPets,
  buscarPet,
  cadastrarPet,
  atualizarPet,
  removerPet,
};
