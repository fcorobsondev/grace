# Criando um Projeto com Node.JS

## Definir uma versão do node:

1. Criar arquivo .nvmrc
2. Escrever lts/\* para usar a última versão do Node
3. Rodar os comandos `nvm i` e `nvm use` e `nvm alias default lts/*`

## Criar a base do projeto node.js

1. Usar o comando `npm init`

## Adicionar o .gitignore node_modules

## Instalando o módulo next, react e react-dom

1. Usar o comando `npm install next`
2. Usar o comando `npm install react`
3. Usar o comando `npm install react-dom`

## Levantando Servidor

Requisito: Ter uma página (criar arquivo index.js -> criar função -> retornar algo -> exportar como padrão a função)

1. O comando para levantar o servidor localmente é o `next dev`, porém é necessário que ele seja rodado como um script do npm, pois caso contrário, terei que buscar a localização do next dentro do diretório node_modules.
2. Para isso, basta escrever o nome do script, vai ser utilizado o dev, e ele vai executar o `next dev`

## Colocando o site na internet (Deploy)

1. Usar Vercel (A Vercel é uma plataforma de hospedagem e deploy de sites e aplicações web — especialmente feita para projetos com Next.js.)

## Definir estilização de código e configurar editor

1. Baixar as extensões do EditorConfig e Prettier
2. Configurar o .editorconfig na pasta raiz do projeto (root=true,[*],ident_style=space,ident_size=2)
3. instalar o prettier no projeto como dependência de desenvolvimento com `npm install prettier --save-dev` "(-D)"
4. Criar um script no package.json para que o prettier faça uma varredura em todo o código, em busca de padronizar o código. "lint:check": "prettier --check ." "lint:write": "prettier --write ."
5. Definir o prettier como default formatter, definir o format on save e remover o autosave.
6. criar o .prettierignore e adicionar o .next, pois não precisamos corrigir a organização de seu código padrão. O node_modules é ignorado por padrão.

## Definição da Arquitetura de Software e Organização de Pastas e Arquivos.

Arquitetura é o escopo e sua interação, geralmente utiliza-se o MVC (Model-View-Controller)
📦 root
┣ 📂 pages
┣ 📂 public
┣ 📂 scripts
┣ 📂 models
┣ 📂 tests
┣ 📂 infra // Conectores, migrações e automações da Infraestrutura
┃ ┣ 📂 devops
┃ ┣ 📂 migrations
┃ ┗ 📜 postgres.js

## Testes Automatizados

1. Instalar um test runner, geralmente utiiza-se o Jest. `npm install --save-dev jest`
2. Definir script para rodar o test runner uma única vez ou no modo watch.

### Criando um model, importando e exportando no estilo ES ou Common JS.

No ES é necessário seguir os seguintes passos:

1. Primeiramente deve ser adicionado o seguinte atributo ao package.json:
   "type":"module"; Sem ele, então o node.js buscará o common js
2. criar a função e exportar atribuindo uma constante a ela.
   const \_somar = somar;
   export {\_somar as somar};
3. Importar no arquivo que quero usar, sem omitir a extensão.
   import somar from "caminho";
4. Para usar o Jest dessa maneira, precisamos executar o comando:
   node --experimental-vm-modules node_modules/jest/bin/jest.js --watch

No CommonJS é necessário seguir os seguintes passos:

1. Criar a função e exportar usando o seguinte comando.
   exports.somar = somar;
2. Para importar deve ser feito o seguinte comando:
   const { somar } = require('./somar');
3. Para usar o Jest basta escrever
   jest --watch

TDD = Primeiro atira a flecha e depois muda o alvo.

Para organização podemos separar os tests em unit e integration.

## Como criar uma API de Status

No next.js, por padrão, a caminho comum para a api é uma pasta api dentro de pages.

1. Para criar uma api de status é necessário criar um arquivo status.js dentro da pasta api/v1/status (para integrar com o versionamento por pastas), criar uma função de status e exportar ela por padrão:

```
function status(request, response) {
  response.status(200).json({ chave: "Está tudo ok por aqui" });
}

export default status;
```

2. Depois criaremos um teste get na integration no caminho /api/v1/status com o nome get.test.js
   async x => await fetch("").response deve retornar o código 200, segue a maneira de escrever o código:

```
test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
});
```
