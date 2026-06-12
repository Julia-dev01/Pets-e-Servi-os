-- ============================================================
-- BANCO DE DADOS: petshop_db
-- Projeto: API REST - Pet Shop 🐾
-- ============================================================

CREATE DATABASE IF NOT EXISTS petshop_db;
USE petshop_db;

-- ============================================================
-- TABELA: pets
-- ============================================================
CREATE TABLE pets (
    id           INT PRIMARY KEY AUTO_INCREMENT,
    nome         VARCHAR(100)  NOT NULL,
    especie      VARCHAR(50)   NOT NULL,
    raca         VARCHAR(100)  DEFAULT 'Não informada',
    idade        INT           DEFAULT 0,
    tutor        VARCHAR(150)  NOT NULL,
    telefone     VARCHAR(20)   DEFAULT 'Não informado',
    criado_em    TIMESTAMP     DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- TABELA: servicos
-- ============================================================
CREATE TABLE servicos (
    id                INT          PRIMARY KEY AUTO_INCREMENT,
    nome              VARCHAR(100) NOT NULL,
    descricao         TEXT,
    preco             DECIMAL(10,2) NOT NULL,
    duracao_minutos   INT          DEFAULT 60,
    disponivel        BOOLEAN      DEFAULT TRUE,
    criado_em         TIMESTAMP    DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- DADOS INICIAIS (opcional)
-- ============================================================

INSERT INTO pets (nome, especie, raca, idade, tutor, telefone) VALUES
('Rex',     'Cachorro', 'Golden Retriever', 3, 'João Silva',    '(11) 99999-0001'),
('Mimi',    'Gato',     'Siamês',          2, 'Maria Oliveira','(11) 99999-0002'),
('Bolinha', 'Cachorro', 'Poodle',          5, 'Carlos Souza',  '(11) 99999-0003');

INSERT INTO servicos (nome, descricao, preco, duracao_minutos) VALUES
('Banho',                'Banho completo com shampoo e condicionador', 40.00,  60),
('Tosa',                 'Tosa higiênica ou artística',                55.00,  90),
('Consulta Veterinária', 'Consulta clínica geral com veterinário',    120.00,  30);
