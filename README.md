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
