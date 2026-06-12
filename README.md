# 🐾 Pet Shop API

## Nome do Projeto
**Pet Shop API** — Sistema de Gerenciamento de Pet Shop

## Objetivo da API
API REST desenvolvida em Node.js com Express para gerenciar o cadastro de **pets** e os **serviços** oferecidos por um pet shop. Permite realizar operações completas de criação, leitura, atualização e remoção (CRUD) para ambas as entidades.

---

## 👥 Integrantes da Equipe
-Júlia das Neves
-Alexandre Brito 
-Freson Rafael
-Murilo de Assis
-Luma Cristina
---

## 📦 Entidades do Sistema

### 🐶 Pets
Representa os animais cadastrados no sistema.

| Campo     | Tipo         | Descrição                        |
|-----------|--------------|----------------------------------|
| id        | INT (PK)     | Identificador único              |
| nome      | VARCHAR(100) | Nome do pet                      |
| especie   | VARCHAR(50)  | Espécie (Cachorro, Gato, etc.)   |
| raca      | VARCHAR(100) | Raça do animal                   |
| idade     | INT          | Idade em anos                    |
| tutor     | VARCHAR(150) | Nome do tutor/dono               |
| telefone  | VARCHAR(20)  | Telefone de contato              |

### 🛁 Serviços
Representa os serviços disponíveis no pet shop.

| Campo             | Tipo          | Descrição                        |
|-------------------|---------------|----------------------------------|
| id                | INT (PK)      | Identificador único              |
| nome              | VARCHAR(100)  | Nome do serviço                  |
| descricao         | TEXT          | Descrição detalhada              |
| preco             | DECIMAL(10,2) | Preço em reais                   |
| duracao_minutos   | INT           | Duração estimada em minutos      |
| disponivel        | BOOLEAN       | Se o serviço está ativo          |

---

## 🔗 Endpoints Desenvolvidos

### Pets — `/pets`

| Método | Endpoint      | Descrição                         |
|--------|---------------|-----------------------------------|
| GET    | /pets         | Lista todos os pets               |
| GET    | /pets/:id     | Busca um pet pelo ID              |
| POST   | /pets         | Cadastra um novo pet              |
| PUT    | /pets/:id     | Atualiza os dados de um pet       |
| DELETE | /pets/:id     | Remove um pet                     |

### Serviços — `/servicos`

| Método | Endpoint         | Descrição                            |
|--------|------------------|--------------------------------------|
| GET    | /servicos        | Lista todos os serviços              |
| GET    | /servicos/:id    | Busca um serviço pelo ID             |
| POST   | /servicos        | Cadastra um novo serviço             |
| PUT    | /servicos/:id    | Atualiza os dados de um serviço      |
| DELETE | /servicos/:id    | Remove um serviço                    |

---

## ▶️ Como Executar o Projeto

### Pré-requisitos
- Node.js instalado (v18+)
- npm

### Instalação
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/petshop-api.git

# Acesse a pasta
cd petshop-api

# Instale as dependências
npm install

# Crie o arquivo .env (edite com suas configurações)
cp .env.example .env

# Inicie o servidor
npm start
```

O servidor iniciará em: `http://localhost:3000`

---

## 📬 Exemplos de Requisições

### Cadastrar um Pet (POST /pets)
```json
{
  "nome": "Totó",
  "especie": "Cachorro",
  "raca": "Labrador",
  "idade": 1,
  "tutor": "Ana Lima",
  "telefone": "(11) 98888-7777"
}
```

### Cadastrar um Serviço (POST /servicos)
```json
{
  "nome": "Banho e Tosa",
  "descricao": "Banho completo com tosa artística",
  "preco": 80.00,
  "duracao_minutos": 120
}
```

---

## 🗂️ Estrutura do Projeto

```
petshop-api/
├── src/
│   ├── routes/
│   │   ├── petRoutes.js
│   │   └── servicoRoutes.js
│   ├── controllers/
│   │   ├── petController.js
│   │   └── servicoController.js
│   └── database/
│       └── database.sql
├── server.js
├── package.json
└── .env
```

---

## 🔗 Repositório GitHub
[https://github.com/seu-usuario/petshop-api](https://github.com/seu-usuario/petshop-api)

---

## 🧪 Testes no Postman
Os testes foram realizados cobrindo todos os métodos HTTP:
- ✅ GET — Listagem e busca por ID
- ✅ POST — Cadastro de pets e serviços
- ✅ PUT — Atualização de registros
- ✅ DELETE — Remoção de registros

As evidências dos testes estão na pasta `/evidencias-postman` do repositório.
