# Criando um Projeto com Node.JS

## Definir uma versão do node:

1. Criar arquivo `.nvmrc`
2. Escrever `lts/*` para usar a última versão do Node
3. Rodar os comandos:
   ```bash
   nvm i
   nvm use
   nvm alias default lts/*
   ```

## Criar a base do projeto node.js

1. Usar o comando:
   ```bash
   npm init
   ```

## Adicionar o .gitignore com `node_modules`

## Instalando o módulo next, react e react-dom

1. Usar o comando:
   ```bash
   npm install next
   ```
2. Usar o comando:
   ```bash
   npm install react
   ```
3. Usar o comando:
   ```bash
   npm install react-dom
   ```

## Levantando Servidor

**Requisito:** Ter uma página (criar arquivo `index.js` → criar função → retornar algo → exportar como padrão a função)

1. O comando para levantar o servidor localmente é:

   ```bash
   next dev
   ```

   Porém, é necessário que ele seja rodado como um script do npm, pois caso contrário, será necessário buscar a localização do `next` dentro do diretório `node_modules`.

2. Para isso, basta escrever o nome do script, vai ser utilizado o `dev`, e ele vai executar o `next dev`.

## Colocando o site na internet (Deploy)

1. Usar **Vercel** (A Vercel é uma plataforma de hospedagem e deploy de sites e aplicações web — especialmente feita para projetos com Next.js.)

## Definir estilização de código e configurar editor

1. Baixar as extensões do **EditorConfig** e **Prettier**
2. Configurar o `.editorconfig` na pasta raiz do projeto:

   ```
   root=true

   [*]
   indent_style=space
   indent_size=2
   ```

3. Instalar o Prettier no projeto como dependência de desenvolvimento:
   ```bash
   npm install prettier --save-dev
   ```
4. Criar scripts no `package.json` para rodar o Prettier:
   ```json
   "lint:check": "prettier --check .",
   "lint:write": "prettier --write ."
   ```
5. Definir o Prettier como formatador padrão, ativar o "format on save" e desativar o "autosave"
6. Criar o `.prettierignore` e adicionar `.next` (não precisa formatar). O `node_modules` já é ignorado por padrão.

## Definição da Arquitetura de Software e Organização de Pastas e Arquivos

Arquitetura é o escopo e sua interação, geralmente utiliza-se o **MVC (Model-View-Controller)**

```
📦 root
┣ 📂 pages
┣ 📂 public
┣ 📂 scripts
┣ 📂 models
┣ 📂 tests
┣ 📂 infra              // Conectores, migrações e automações da Infraestrutura
┃ ┣ 📂 devops
┃ ┣ 📂 migrations
┃ ┗ 📜 postgres.js
```

## Testes Automatizados

1. Instalar um test runner (geralmente utiliza-se o Jest):
   ```bash
   npm install --save-dev jest
   ```
2. Definir script para rodar o test runner uma única vez ou no modo watch.

### Criando um model, importando e exportando no estilo ES ou CommonJS

#### ES Modules

1. Adicionar no `package.json`:
   ```json
   "type": "module"
   ```
2. Criar a função e exportar:
   ```js
   const _somar = somar;
   export { _somar as somar };
   ```
3. Importar no arquivo desejado (sem omitir a extensão):
   ```js
   import { somar } from "./caminho.js";
   ```
4. Rodar o Jest:
   ```bash
   node --experimental-vm-modules node_modules/jest/bin/jest.js --watch
   ```

#### CommonJS

1. Criar a função e exportar:
   ```js
   exports.somar = somar;
   ```
2. Importar:
   ```js
   const { somar } = require("./somar");
   ```
3. Rodar o Jest:
   ```bash
   jest --watch
   ```

> TDD = Primeiro atira a flecha e depois muda o alvo.

Organize os testes em `unit` e `integration`.

## Como criar uma API de Status

No Next.js, por padrão, o caminho comum para a API é uma pasta `api` dentro de `pages`.

1. Criar o arquivo `status.js` em `pages/api/v1/status`. Criar a função e exportar:

   ```js
   function status(request, response) {
     response.status(200).json({ chave: "Está tudo ok por aqui" });
   }

   export default status;
   ```

2. Criar o teste `get.test.js` em `/tests/integration/api/v1/status/`:

   ```js
   test("GET to /api/v1/status should return 200", async () => {
     const response = await fetch("http://localhost:3000/api/v1/status");
     expect(response.status).toBe(200);
   });
   ```

   ------------------------------------------------------ Fim da Fase 1 - Até aula 16 -------------------------------------------
