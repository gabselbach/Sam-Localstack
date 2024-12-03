# Conectar AWS SAM com LocalStack

Este projeto tem como objetivo demonstrar como integrar uma aplicação desenvolvida com AWS SAM utilizando LocalStack. Ele serve como um ponto de partida para quem deseja explorar a combinação dessas ferramentas, sem se preocupar com padrões de projeto ou clean code. Sinta-se à vontade para adaptá-lo e melhorá-lo conforme sua necessidade.

---

## Estrutura do Projeto

### `project_sam` 
Esta pasta contém o projeto AWS SAM implementado em TypeScript.

- **Execução em modo watch**:
  Para facilitar o desenvolvimento, foi configurado o [nodemon](https://www.npmjs.com/package/nodemon). Assim, você pode rodar o SAM API localmente em modo de watch.

  **Passos:**
  1. Navegue até a pasta `project_sam` no terminal.
  2. Execute o comando:
     ```bash
     nodemon
     ```
  3. A API do SAM será iniciada automaticamente.

- **Lambdas disponíveis**:
  1. **Manipulação de dados básicos de usuários**: Lambda simples para lidar com dados de usuários.
  2. **Integração com SQS**: Lambda que:
     - Cria recursos no LocalStack.
     - Envia e lê dados diretamente de uma fila SQS simulada no LocalStack.

---

### `localstack` 
Esta pasta contém as configurações necessárias para rodar o LocalStack usando Docker. 

- **Passos para execução**:
  1. Navegue até a pasta `localstack`.
  2. Execute o comando:
     ```bash
     docker-compose up -D
     ```

---

## Ordem de Execução do Projeto

Para garantir que tudo funcione corretamente, siga esta sequência:

1. **Inicie o LocalStack**:
   ```bash
   cd localstack
   docker-compose up -D
   ```

2. **Inicie o AWS SAM**:
   ```bash
   cd project_sam
   nodemon
   ```

---

## Requisitos

- Docker e Docker Compose instalados.
- Node.js e npm instalados (para rodar o `nodemon` no `project_sam`).
- AWS SAM CLI configurado.

---

## Melhorias

Este projeto é uma base inicial para explorar AWS SAM e LocalStack juntos. Caso deseje:
- Adicione padrões de projeto (e.g., clean architecture).
- Integre testes unitários e de integração.
- Customize as configurações de SQS ou outras simulações oferecidas pelo LocalStack.

---

Aproveite para explorar e aprender!