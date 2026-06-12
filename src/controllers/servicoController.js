// Banco de dados simulado em memória
let servicos = [
  {
    id: 1,
    nome: "Banho",
    descricao: "Banho completo com shampoo e condicionador",
    preco: 40.0,
    duracao_minutos: 60,
    disponivel: true,
  },
  {
    id: 2,
    nome: "Tosa",
    descricao: "Tosa higiênica ou artística",
    preco: 55.0,
    duracao_minutos: 90,
    disponivel: true,
  },
  {
    id: 3,
    nome: "Consulta Veterinária",
    descricao: "Consulta clínica geral com veterinário",
    preco: 120.0,
    duracao_minutos: 30,
    disponivel: true,
  },
];

let proximoId = 4;

// GET /servicos
const listarServicos = (req, res) => {
  res.json({
    sucesso: true,
    total: servicos.length,
    dados: servicos,
  });
};

// GET /servicos/:id
const buscarServico = (req, res) => {
  const id = parseInt(req.params.id);
  const servico = servicos.find((s) => s.id === id);

  if (!servico) {
    return res
      .status(404)
      .json({ sucesso: false, erro: "Serviço não encontrado" });
  }

  res.json({ sucesso: true, dados: servico });
};

// POST /servicos
const cadastrarServico = (req, res) => {
  const { nome, descricao, preco, duracao_minutos } = req.body;

  if (!nome || !preco) {
    return res.status(400).json({
      sucesso: false,
      erro: "Campos obrigatórios: nome, preco",
    });
  }

  const novoServico = {
    id: proximoId++,
    nome,
    descricao: descricao || "",
    preco: parseFloat(preco),
    duracao_minutos: duracao_minutos || 60,
    disponivel: true,
  };

  servicos.push(novoServico);

  res.status(201).json({
    sucesso: true,
    mensagem: "Serviço cadastrado com sucesso",
    dados: novoServico,
  });
};

// PUT /servicos/:id
const atualizarServico = (req, res) => {
  const id = parseInt(req.params.id);
  const index = servicos.findIndex((s) => s.id === id);

  if (index === -1) {
    return res
      .status(404)
      .json({ sucesso: false, erro: "Serviço não encontrado" });
  }

  servicos[index] = { ...servicos[index], ...req.body, id };

  res.json({
    sucesso: true,
    mensagem: "Serviço atualizado com sucesso",
    dados: servicos[index],
  });
};

// DELETE /servicos/:id
const removerServico = (req, res) => {
  const id = parseInt(req.params.id);
  const index = servicos.findIndex((s) => s.id === id);

  if (index === -1) {
    return res
      .status(404)
      .json({ sucesso: false, erro: "Serviço não encontrado" });
  }

  const servicoRemovido = servicos.splice(index, 1)[0];

  res.json({
    sucesso: true,
    mensagem: "Serviço removido com sucesso",
    dados: servicoRemovido,
  });
};

module.exports = {
  listarServicos,
  buscarServico,
  cadastrarServico,
  atualizarServico,
  removerServico,
};
