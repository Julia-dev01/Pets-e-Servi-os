require("dotenv").config();
const express = require("express");

const petRoutes = require("./src/routes/petRoutes");
const servicoRoutes = require("./src/routes/servicoRoutes");

const app = express();
app.use(express.json());

// Rota raiz
app.get("/", (req, res) => {
  res.json({
    mensagem: "Bem-vindo à API do Pet Shop! 🐾",
    versao: "1.0.0",
    endpoints: {
      pets: "/pets",
      servicos: "/servicos",
    },
  });
});

// Rotas
app.use("/pets", petRoutes);
app.use("/servicos", servicoRoutes);

// Rota não encontrada
app.use((req, res) => {
  res.status(404).json({ erro: "Rota não encontrada" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🐾 Servidor Pet Shop rodando na porta ${PORT}`);
});
