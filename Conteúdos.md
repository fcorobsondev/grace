| **Característica**  | **Node.js**                        | **Next.js**                           |
| ------------------- | ---------------------------------- | ------------------------------------- |
| **O que é?**        | Ambiente de execução               | Framework de React                    |
| **Uso principal**   | Backend, scripts, ferramentas      | Aplicações web modernas               |
| **Depende do quê?** | V8 (motor do Chrome)               | Node.js + React                       |
| **Roda onde?**      | Somente no servidor                | No cliente (navegador) e servidor     |
| **Exemplos de uso** | APIs com Express, CLIs, automações | Sites, blogs, dashboards, e-commerces |

| **Pacote**  | **Tipo**                | **Função Principal**                                                                 | **É obrigatório no Next.js?** |
| ----------- | ----------------------- | ------------------------------------------------------------------------------------ | ----------------------------- |
| `next`      | Framework               | Fornece a estrutura completa do projeto, roteamento, SSR, geração de páginas e APIs. | ✅ Sim                        |
| `react`     | Biblioteca de UI        | Cria interfaces com componentes reutilizáveis. É o núcleo do front-end.              | ✅ Sim                        |
| `react-dom` | Renderizador para o DOM | Conecta o React ao navegador, renderizando os componentes na tela.                   | ✅ Sim                        |

| Tipo de Teste                | O que Testa                        | Foco Principal                                  | Ferramentas Comuns                | Vantagens                               | Desvantagens                               |
| ---------------------------- | ---------------------------------- | ----------------------------------------------- | --------------------------------- | --------------------------------------- | ------------------------------------------ |
| **Unit (Unitário)**          | Funções/módulos isolados           | Testar uma única função ou componente           | Jest, Mocha, Vitest, NUnit, JUnit | Rápido, fácil de isolar e depurar       | Não garante que as partes funcionem juntas |
| **Integration (Integração)** | Conexão entre dois ou mais módulos | Verificar se partes do sistema funcionam juntas | Jest, Mocha, Supertest, MSW       | Detecta problemas entre módulos         | Mais lento que testes unitários            |
| **E2E (End-to-End)**         | Todo o fluxo da aplicação          | Simular o comportamento do usuário real         | Cypress, Playwright, Selenium     | Garante que tudo funciona como esperado | Lento, pode ser frágil e difícil de manter |

Endpoint é o ponto final de algo -> endereço final ou API

| Aspecto                     | API (Application Programming Interface)                         | Interface do Usuário (User Interface - UI)              |
| --------------------------- | --------------------------------------------------------------- | ------------------------------------------------------- |
| **Definição**               | Conjunto de regras que permite que sistemas conversem entre si. | Parte visual com a qual o usuário interage diretamente. |
| **Usuário**                 | Desenvolvedores ou sistemas automatizados.                      | Usuários finais (pessoas).                              |
| **Forma de Interação**      | Via chamadas de funções, requisições HTTP, etc.                 | Via botões, campos, menus, imagens, etc.                |
| **Exemplo Prático**         | `GET /api/usuarios` retorna dados de usuários.                  | Tela que mostra uma lista de usuários com botões.       |
| **Visível para o usuário?** | Não. Opera nos bastidores.                                      | Sim. É o que o usuário vê na tela.                      |
| **Objetivo**                | Permitir que softwares se comuniquem de forma padronizada.      | Permitir que humanos interajam com o software.          |

| Comando               | O que Faz                                               | O que Mostra                                                  | Ideal para...                          |
| --------------------- | ------------------------------------------------------- | ------------------------------------------------------------- | -------------------------------------- |
| `curl site`           | Faz uma requisição simples (GET) para o site            | Apenas o corpo (conteúdo HTML) da resposta                    | Ver rapidamente o conteúdo da página   |
| `curl site --verbose` | Faz a mesma requisição, **mas com detalhes adicionais** | Corpo **+** cabeçalhos de requisição e resposta, status, etc. | Debug, entender o que está acontecendo |

| Situação                                         | Vai funcionar corretamente? | Por quê?                                                           |
| ------------------------------------------------ | --------------------------- | ------------------------------------------------------------------ |
| `curl 123.45.67.89`                              | ❌ Provavelmente não        | Não informa qual site está sendo pedido ao servidor                |
| `curl exemplo.com`                               | ✅ Sim                      | O `curl` resolve o DNS e envia o cabeçalho `Host` corretamente     |
| `curl --header "Host: exemplo.com" 123.45.67.89` | ✅ Sim                      | Você força o cabeçalho `Host`, mesmo acessando pelo IP diretamente |

| Método  | O que faz                                 | Usado para...                              | Envia corpo (body)? | Idempotente? | Exemplo prático                            |
| ------- | ----------------------------------------- | ------------------------------------------ | ------------------- | ------------ | ------------------------------------------ |
| GET     | Solicita dados do servidor                | Buscar informações (ex: listar produtos)   | ❌ Não              | ✅ Sim       | `GET /produtos`                            |
| POST    | Envia dados ao servidor                   | Criar um novo recurso                      | ✅ Sim              | ❌ Não       | `POST /usuarios` (com nome, email no body) |
| PUT     | Atualiza um recurso inteiro               | Substituir totalmente um recurso existente | ✅ Sim              | ✅ Sim       | `PUT /usuarios/123`                        |
| PATCH   | Atualiza **parte** de um recurso          | Alterar apenas alguns campos de um recurso | ✅ Sim              | ❌ Depende   | `PATCH /usuarios/123` (só altera o nome)   |
| DELETE  | Remove um recurso                         | Excluir dados do servidor                  | ❌ (geralmente)     | ✅ Sim       | `DELETE /produtos/45`                      |
| OPTIONS | Informa quais métodos o servidor aceita   | Pré-verificação em requisições CORS        | ❌ Simples          | ✅ Sim       | Usado automaticamente por browsers         |
| HEAD    | Igual ao GET, mas sem o corpo da resposta | Verificar headers (ex: tamanho, cache)     | ❌ Não              | ✅ Sim       | `HEAD /arquivo.zip`                        |
