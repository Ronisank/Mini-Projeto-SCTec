# 📚 Controle para Biblioteca em JS

## Sobre o projeto

Este projeto consiste em um sistema de gerenciamento de biblioteca desenvolvido em JavaScript para modernizar o controle do acervo de livros.

O sistema permite cadastrar e consultar livros, controlar sua disponibilidade, realizar empréstimos e devoluções, além de gerar estatísticas sobre o acervo. O projeto foi desenvolvido utilizando Programação Orientada a Objetos (POO) e Módulos do JavaScript, tornando o código mais organizado, reutilizável e de fácil manutenção.

---

## 🎯 Objetivo

Praticar os principais conceitos do módulo de JavaScript, colocando em prática:

- Programação Orientada a Objetos (POO);
- Classes e Objetos;
- Encapsulamento;
- Módulos (`import` e `export`);
- Organização de arquivos e separação de responsabilidades;
- Manipulação de Arrays;
- Funções;
- Estruturas de decisão e repetição.

---

## ⚙️ Funcionalidades

- 📖 Cadastrar livros;
- 🔍 Buscar livros pelo título;
- 📚 Listar todos os livros;
- ✅ Listar apenas os livros disponíveis;
- 📤 Realizar empréstimos;
- 📥 Realizar devoluções;
- 📊 Exibir estatísticas do acervo.

---

## ▶️ Como executar

### Pré-requisitos

- Node.js instalado.

### Passos

1. Clone o repositório:

```bash
git clone <https://github.com/Ronisank/Mini-Projeto-SCTec.git>
```

2. Acesse a pasta do projeto:

```bash
cd Sistema-De-Gerenciamento-De-Biblioteca
```

3. Instale as dependências:

```bash
npm install

   ```
   *(Caso o comando acima não funcione, você pode instalar diretamente com: `npm install prompt-sync`)*
```

4. Execute o projeto:

```bash
node index.js
```

---

## 📁 Estrutura do projeto

```text
Sistema-De-Gerenciamento-Da-Biblioteca/
├── node_modules/
├── src/
│   ├── dados/
│   │   └── dadosLivros.js         # Base de dados simulada (Array de livros)
│   ├── funcoes/
│   │   ├── buscarLivro.js         # Função para buscar livros específicos
│   │   ├── exibirEstatisticas.js  # Relatórios e métricas gerais do acervo
│   │   ├── listarDisponiveis.js   # Filtro de livros prontos para empréstimo
│   │   ├── listarLivros.js        # Listagem geral formatada do acervo
│   │   ├── realizarDevolucoes.js  # Lógica de devolução e alteração de status
│   │   └── realizarEmprestimo.js  # Lógica de validação e saída de livros
│   └── Livro/
│       └── livro.js               # Definição da Classe Livro e seus métodos
├── .gitignore
├── index.js                       # Ponto de entrada que gerencia os menus do sistema
├── package-lock.json
├── package.json                   # Configurações do Node.js (definido como "type": "module")
└── README.md                      # Documentação do projeto
```

---

## 🛠 Tecnologias utilizadas

- JavaScript (ES6+)
- Node.js

---

## 👨‍💻 Autor

**Roni Rodrigues**

Projeto desenvolvido como atividade prática da disciplina de JavaScript, com o objetivo de aplicar os conceitos de Programação Orientada a Objetos e Módulos.

