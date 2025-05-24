# API Express Sequelize

Este projeto é uma API desenvolvida em Node.js utilizando o framework Express e o ORM Sequelize. Ele faz parte do curso de API com Node.js, Express e Sequelize.

## Funcionalidades

- Estrutura básica de uma API RESTful
- Integração com banco de dados SQLite via Sequelize
- Scripts de seed para popular o banco com dados iniciais

## Estrutura do Projeto

```
.
├── arquivos-base/
│   ├── seederCategorias.js
│   ├── seederCursos.js
│   ├── seederMatriculas.js
│   └── seederPessoas.js
├── src/
│   └── app.js
├── server.js
├── package.json
├── .eslintrc.json
└── .gitignore
```

## Requisitos

- **Node.js v18.17.1**
- npm

## Como rodar o projeto

1. Instale as dependências:
   ```sh
   npm install
   ```

2. Inicie o servidor em modo desenvolvimento:
   ```sh
   npm run dev
   ```

3. Acesse a rota de teste:
   ```
   GET http://localhost:3000/teste
   ```

## Scripts

- `npm run dev`: Inicia o servidor com nodemon para recarregamento automático.

---

> Projeto para fins educacionais.