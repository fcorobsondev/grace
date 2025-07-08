# Comparações e Conceitos de Desenvolvimento Web

## Node.js vs Next.js

Essa tabela compara as principais diferenças entre Node.js e Next.js, destacando suas funções, dependências e casos de uso.

| **Característica**  | **Node.js**                        | **Next.js**                           |
| ------------------- | ---------------------------------- | ------------------------------------- |
| **O que é?**        | Ambiente de execução               | Framework de React                    |
| **Uso principal**   | Backend, scripts, ferramentas      | Aplicações web modernas               |
| **Depende do quê?** | V8 (motor do Chrome)               | Node.js + React                       |
| **Roda onde?**      | Somente no servidor                | No cliente (navegador) e servidor     |
| **Exemplos de uso** | APIs com Express, CLIs, automações | Sites, blogs, dashboards, e-commerces |

---

## Principais Pacotes do Next.js

Aqui são apresentados os pacotes essenciais usados em aplicações Next.js, com suas funções e obrigatoriedade.

| **Pacote**  | **Tipo**                | **Função Principal**                                                                 | **É obrigatório no Next.js?** |
| ----------- | ----------------------- | ------------------------------------------------------------------------------------ | ----------------------------- |
| `next`      | Framework               | Fornece a estrutura completa do projeto, roteamento, SSR, geração de páginas e APIs. | ✅ Sim                        |
| `react`     | Biblioteca de UI        | Cria interfaces com componentes reutilizáveis. É o núcleo do front-end.              | ✅ Sim                        |
| `react-dom` | Renderizador para o DOM | Conecta o React ao navegador, renderizando os componentes na tela.                   | ✅ Sim                        |

---

## Tipos de Testes em Programação

Essa tabela mostra os principais tipos de testes em programação, explicando o que eles validam, vantagens e desvantagens.

| Tipo de Teste                | O que Testa                        | Foco Principal                                  | Ferramentas Comuns                | Vantagens                               | Desvantagens                               |
| ---------------------------- | ---------------------------------- | ----------------------------------------------- | --------------------------------- | --------------------------------------- | ------------------------------------------ |
| **Unit (Unitário)**          | Funções/módulos isolados           | Testar uma única função ou componente           | Jest, Mocha, Vitest, NUnit, JUnit | Rápido, fácil de isolar e depurar       | Não garante que as partes funcionem juntas |
| **Integration (Integração)** | Conexão entre dois ou mais módulos | Verificar se partes do sistema funcionam juntas | Jest, Mocha, Supertest, MSW       | Detecta problemas entre módulos         | Mais lento que testes unitários            |
| **E2E (End-to-End)**         | Todo o fluxo da aplicação          | Simular o comportamento do usuário real         | Cypress, Playwright, Selenium     | Garante que tudo funciona como esperado | Lento, pode ser frágil e difícil de manter |

---

## API vs Interface do Usuário (UI)

Aqui está a comparação entre o que é uma API e o que é a interface de usuário, com exemplos práticos.

| Aspecto                     | API (Application Programming Interface)                         | Interface do Usuário (User Interface - UI)              |
| --------------------------- | --------------------------------------------------------------- | ------------------------------------------------------- |
| **Definição**               | Conjunto de regras que permite que sistemas conversem entre si. | Parte visual com a qual o usuário interage diretamente. |
| **Usuário**                 | Desenvolvedores ou sistemas automatizados.                      | Usuários finais (pessoas).                              |
| **Forma de Interação**      | Via chamadas de funções, requisições HTTP, etc.                 | Via botões, campos, menus, imagens, etc.                |
| **Exemplo Prático**         | `GET /api/usuarios` retorna dados de usuários.                  | Tela que mostra uma lista de usuários com botões.       |
| **Visível para o usuário?** | Não. Opera nos bastidores.                                      | Sim. É o que o usuário vê na tela.                      |
| **Objetivo**                | Permitir que softwares se comuniquem de forma padronizada.      | Permitir que humanos interajam com o software.          |

---

## Comandos `curl` e Interpretação

Comparação de comandos `curl`, explicando o que eles fazem e quando são úteis.

| Comando               | O que Faz                                               | O que Mostra                                                  | Ideal para...                          |
| --------------------- | ------------------------------------------------------- | ------------------------------------------------------------- | -------------------------------------- |
| `curl site`           | Faz uma requisição simples (GET) para o site            | Apenas o corpo (conteúdo HTML) da resposta                    | Ver rapidamente o conteúdo da página   |
| `curl site --verbose` | Faz a mesma requisição, **mas com detalhes adicionais** | Corpo **+** cabeçalhos de requisição e resposta, status, etc. | Debug, entender o que está acontecendo |

---

## Exemplos de Requisições `curl`

Aqui vemos se uma requisição `curl` vai funcionar, com base no uso correto de IPs e cabeçalhos.

| Situação                                         | Vai funcionar corretamente? | Por quê?                                                           |
| ------------------------------------------------ | --------------------------- | ------------------------------------------------------------------ |
| `curl 123.45.67.89`                              | ❌ Provavelmente não        | Não informa qual site está sendo pedido ao servidor                |
| `curl exemplo.com`                               | ✅ Sim                      | O `curl` resolve o DNS e envia o cabeçalho `Host` corretamente     |
| `curl --header "Host: exemplo.com" 123.45.67.89` | ✅ Sim                      | Você força o cabeçalho `Host`, mesmo acessando pelo IP diretamente |

---

## Métodos HTTP

Tabela explicando os principais métodos HTTP, seu uso, se enviam corpo e se são idempotentes.

| Método  | O que faz                                 | Usado para...                              | Envia corpo (body)? | Idempotente? | Exemplo prático                            |
| ------- | ----------------------------------------- | ------------------------------------------ | ------------------- | ------------ | ------------------------------------------ |
| GET     | Solicita dados do servidor                | Buscar informações (ex: listar produtos)   | ❌ Não              | ✅ Sim       | `GET /produtos`                            |
| POST    | Envia dados ao servidor                   | Criar um novo recurso                      | ✅ Sim              | ❌ Não       | `POST /usuarios` (com nome, email no body) |
| PUT     | Atualiza um recurso inteiro               | Substituir totalmente um recurso existente | ✅ Sim              | ✅ Sim       | `PUT /usuarios/123`                        |
| PATCH   | Atualiza **parte** de um recurso          | Alterar apenas alguns campos de um recurso | ✅ Sim              | ❌ Depende   | `PATCH /usuarios/123` (só altera o nome)   |
| DELETE  | Remove um recurso                         | Excluir dados do servidor                  | ❌ (geralmente)     | ✅ Sim       | `DELETE /produtos/45`                      |
| OPTIONS | Informa quais métodos o servidor aceita   | Pré-verificação em requisições CORS        | ❌ Simples          | ✅ Sim       | Usado automaticamente por browsers         |
| HEAD    | Igual ao GET, mas sem o corpo da resposta | Verificar headers (ex: tamanho, cache)     | ❌ Não              | ✅ Sim       | `HEAD /arquivo.zip`                        |

---

## Comparação de DBMS (Sistemas de Gerenciamento de Banco de Dados)

Tabela comparando diferentes DBMS, incluindo relacionais e não relacionais.

| DBMS           | Tipo                   | Linguagem               | Pontos Fortes                                                             | Casos de Uso Típicos                  | Licença                 |
| -------------- | ---------------------- | ----------------------- | ------------------------------------------------------------------------- | ------------------------------------- | ----------------------- |
| **PostgreSQL** | Relacional             | SQL                     | Altamente robusto, suporte a JSON, extensível, open source                | Aplicações complexas, análises, APIs  | Open Source             |
| **MySQL**      | Relacional             | SQL                     | Muito popular, rápido para leitura, fácil de usar                         | Sites, blogs, apps web                | Open Source (Oracle)    |
| **SQLite**     | Relacional             | SQL                     | Leve, sem servidor, embutido em aplicações                                | Apps mobile, desktop, IoT             | Public Domain           |
| **SQL Server** | Relacional             | T-SQL                   | Integração com o ecossistema Microsoft, ferramentas gráficas poderosas    | Grandes sistemas corporativos         | Comercial               |
| **Oracle DB**  | Relacional             | PL/SQL                  | Alta performance, escalável, muito usado em bancos e grandes empresas     | Sistemas financeiros, bancos          | Comercial               |
| **MongoDB**    | Não Relacional         | JSON-like (Mongo Query) | Armazena documentos JSON, altamente escalável, flexível                   | Apps modernas, Big Data, APIs         | Open Source / Comercial |
| **Redis**      | Não Relacional         | Comandos próprios       | Extremamente rápido (em memória), usado como cache ou broker              | Cache, filas, sessão, contadores      | Open Source             |
| **Firebase**   | Não Relacional         | NoSQL (JSON)            | Backend como serviço, sincronização em tempo real                         | Apps mobile/web em tempo real         | Proprietário (Google)   |
| **Cassandra**  | Não Relacional         | CQL                     | Alta escalabilidade e disponibilidade, projetado para grandes volumes     | Big Data, IoT, analytics distribuídos | Open Source             |
| **Neo4j**      | Não Relacional (Graph) | Cypher                  | Otimizado para dados conectados (grafos), ótimo para redes sociais, mapas | Grafos, redes sociais, recomendação   | Open Source / Comercial |

---------------------- Fase 2 - até a aula 16-----------------

| Conceito       | O que é                                                                                | Para que serve                                                        | Exemplo/Analogia                                       |
| -------------- | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------ |
| **Docker**     | Plataforma que permite criar, empacotar e executar aplicações em contêineres.          | Facilita o desenvolvimento, teste e deploy em ambientes isolados.     | Como um "gerenciador de navios" com vários containers. |
| **Dockerfile** | Arquivo de texto com instruções para criar uma imagem Docker.                          | Define o que vai ter dentro da imagem: SO, dependências, código etc.  | Como uma **receita de bolo** para criar uma imagem.    |
| **Image**      | Um snapshot (cópia) imutável de um ambiente com tudo o que a aplicação precisa.        | Serve para criar containers sempre iguais, portáveis e reproduzíveis. | Como um **molde** para criar múltiplos containers.     |
| **Container**  | Instância em execução de uma imagem. Leve, isolado e com tudo que a aplicação precisa. | Executa a aplicação de forma isolada e portátil.                      | Como um **bolo feito com a receita da imagem**.        |

Query = Comando SQL que você usa para conversar com o banco de dados.

| Tipo de Query | Descrição                                | Exemplo SQL                                            | Para que serve                           |
| ------------- | ---------------------------------------- | ------------------------------------------------------ | ---------------------------------------- |
| SELECT        | Consulta dados em uma tabela             | SELECT \* FROM usuarios;                               | Buscar informações                       |
| INSERT        | Insere novos dados                       | INSERT INTO usuarios (nome, idade) VALUES ('Ana', 30); | Adicionar um novo registro               |
| UPDATE        | Atualiza dados existentes                | UPDATE usuarios SET idade = 31 WHERE nome = 'Ana';     | Modificar dados de um registro existente |
| DELETE        | Remove dados                             | DELETE FROM usuarios WHERE nome = 'Ana';               | Apagar um ou mais registros              |
| CREATE        | Cria tabelas, bancos ou outros objetos   | CREATE TABLE usuarios (id SERIAL, nome TEXT);          | Criar estruturas no banco de dados       |
| DROP          | Exclui tabelas, bancos ou objetos        | DROP TABLE usuarios;                                   | Apagar estruturas do banco de dados      |
| WHERE         | Filtro usado em SELECT, UPDATE ou DELETE | SELECT \* FROM usuarios WHERE idade > 18;              | Restringir os dados afetados pela query  |

| Característica               | Hardcoded (Valor fixo no código)                    | Variáveis de Ambiente (Environment Variables)               |
| ---------------------------- | --------------------------------------------------- | ----------------------------------------------------------- |
| **Definição**                | Valor escrito diretamente no código                 | Valor externo passado ao programa via o ambiente do sistema |
| **Exemplo**                  | `const dbPass = "123456";`                          | `const dbPass = process.env.DB_PASSWORD;`                   |
| **Flexibilidade**            | Baixa — precisa mudar o código para alterar o valor | Alta — basta mudar a variável no ambiente                   |
| **Segurança**                | Baixa — senhas e tokens ficam visíveis no código    | Alta — valores sensíveis ficam fora do código-fonte         |
| **Facilidade de manutenção** | Difícil — exige reescrever e fazer novo deploy      | Fácil — muda-se o valor sem alterar o código                |
| **Boa prática?**             | ❌ Não é recomendada                                | ✅ Altamente recomendada                                    |
| **Uso comum**                | Projetos pequenos, testes rápidos                   | Produção, ambientes profissionais                           |
