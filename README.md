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

   ------------------------------------------------------ Fim da Fase 1 - Até aula 16 ------------------------------------------------------

## Levantando o Banco de Dados

-Banco de dados selecionado (Postgres)
-Query (módulo PG (node-pg))
-Migrations (node-pg-migrate)

### Configurando o docker para o banco de dados

Para poder rodar um banco de dados no computador bem como outras coisas de maneira performática, é necessário usar os containers, por meio do docker.

1. Deve ser criado o arquivo compose.yaml na raiz do projeto.
2. Na configuração inicial iremos definir as imagens que vão ser utilizadas, nesse caso como vamos utilizar apenas o database, então buscamos a imagem do postgres no dockerhub:

```
services:
  database:
    image: "postgres:16.0-alpine3.18"
```

3. Para setar o container basta escrever `docker compose up`, irá da erro pois agora precisamos configurar algumas informações. Sendo que a única variável de ambiente obrigatória é o POSTGRES_PASSWORD. Isso é feito no compose.yaml, desse modo temos o seguinte:

```
services:
  database:
    image: "postgres:16.0-alpine3.18"
    environment:
      POSTGRES_PASSWORD: "local_password"
```

Agora sim, temos um banco de dados pronto para receber conexões. Porém nosso container ainda está fechado (o container está fechado por dentro e não há como acessar por fora). Então iremos destruir o container para seguir com os próximos comandos.

4. Desse modo, agora temos que instalar o postgresql-client para usar o psql (que permitirá acessar o container)

5. Sendo assim, teremos que definir as portas do host:container dessa maneira no compose.yaml

```
services:
  database:
    image: "postgres:16.0-alpine3.18"
    environment:
      POSTGRES_PASSWORD: "local_password"
    ports:
      - "5432:5432"
```

(deve haver o espaço entre o hífen e as portas) 6. Agora iremos subir o container com docker compose up.

7. Por fim, agora iremos definir as credenciais, localizações e porta do nosso banco de dados, para isso iremos rodar o seguinte comando:
   `psql --host=localhost --username=postgres --port=5432`

8. Irá ser requisitado a senha do postgres, aquela mesma que está na variável de ambiente. Basta digitá-la.
   Agora nosso banco de dados está configurado e já sabemos como entrar nele usando o client do postgres.

9. Para finalizar, iremos criar uma pasta infra no compose, para organizar nosso projeto de maneira adequada, mas para rodar o docker compose deverá ser usado o seguinte comando `docker compose up --file /infra/compose.yaml up`

### Abrindo conexão com o banco de dados e enviar queries

1. Agora precisaremos do pg, e iremos instalá-lo por meio do comando `npm i pg`

2. Agora iremos escrever um módulo database.js dentro da pasta infra e reformular o arquivo index.js da pasta status para a obtenção de algumas informações, no index.js do status iremos importar o database.js.

o arquivo database.js:

```js
import { Client } from "pg";

async function query(queryObject) {
  const client = new Client();
  await client.connect();
  const result = await client.query(queryObject);
  await client.end();
  return result;
}

export default {
  query: query,
};
```

o arquivo index.js do status

```js
import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1+1;");
  console.log(result);
  response.status(200).json({ situation: "Função de Status" });
}

export default status;
```

Nesse caso há erro, pois não temos as variáveis de ambiente para fazer conexões.

3. Iremos definir no new Client do database.js os objetos de configuração:

```js
const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  database: "postgres",
  password: "local_password",
});
```

Agora conseguimos fazer uma query com sucesso

## Configurando as variáveis de ambiente

### Criando as variáveis de ambiente no código

1. Iremos baixar o módulo que encaminha variáveis de ambiente de um arquivo .env para o process.env, depois basta criar o arquivo .env na pasta raíz.
2. Devemos substituir o local que iremos trocar as variáveis por process.env.VAR

```js
const client = new Client({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  user: process.env.POSTGRES_USER,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
});
```

3. Devemos atribuir um valor para a variável do ambiente no .env.

```.env
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_DB=postgres
POSTGRES_PASSWORD=local_password
```

Agora temos variáveis de ambiente configuradas no nosso código.

### Vinculando as variáveis de ambiente com o docker

1. Primeiramente iremos reconfigurar nossas variáveis, desse modo iremos mudar nosso .env.

Saindo de:

```.env
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_DB=postgres
POSTGRES_PASSWORD=local_password
```

Para:

```.env
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=local_user
POSTGRES_DB=local_db
POSTGRES_PASSWORD=local_password
```

2. Agora iremos substituir o environment do compose.yaml da pasta infra e substituí-lo por um env_file que deve ter como atributo uma lista com o caminho do arquivo .env.

```yaml
services:
  database:
    image: "postgres:16.0-alpine3.18"
    env_file:
      - ../.env
    ports:
      - "5432:5432"
```

3. Agora, para atualizar as variáveis, precisamos derrubar o docker e o server e subir ambos denovo. Desse modo está definido as variáveis de ambiente.

4. Agora irei renomear o arquivo .env para .env.development e alterarei também o nome dele no arquivo compose.yaml

## Utilizando absolute imports ao invés de realative imports no next.js

1. Deve ser criado o arquivo jsconfig.json ou tsconfig.json (para projetos typescript), pois eles indicarão qual é a pasta raiz.

2. Deve ser escrito o seguinte no jsconfig.json:

```json
{
  "compilerOptions": {
    "baseUrl": "."
  }
}
```

3. Agora quase todos os caminhos podem ser escritos de maneira absoluta.

## Configurando os scripts dos serviços

1. Alterações nos scripts do package.json

```json
 "scripts": {
    "dev": "npm run services:up && next dev",
    "services:up": "docker compose -f infra/compose.yaml up -d",
    "services:stop": "docker compose -f infra/compose.yaml stop",
    "services:down": "docker compose -f infra/compose.yaml down",
    "lint:check": "prettier --check .",
    "lint:write": "prettier --write .",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:watch:ESM": "node --experimental-vm-modules node_modules/jest/bin/jest.js --watch"
  },
```
