# 🚀 API de Produtos: Arquitetura Limpa & DDD com NestJS

Este projeto foi desenvolvido como parte da disciplina de **Frameworks Web** no curso de **Análise e Desenvolvimento de Sistemas (ADS)**. O objetivo é demonstrar a implementação de um CRUD de produtos aplicando os conceitos de **Arquitetura Limpa (Clean Architecture)** e **Design Orientado ao Domínio (DDD)**.

## 🏗️ Estrutura do Projeto (Camadas)

Diferente de uma estrutura MVC tradicional, este projeto isola as regras de negócio das tecnologias externas seguindo os círculos concêntricos da Arquitetura Limpa:

* **`src/domain` (Coração):** Contém as **Entidades** de negócio e as **Interfaces** (Contratos) dos Repositórios. Esta camada é pura e não depende de nenhum framework externo.
* **`src/application` (Casos de Uso):** Contém os **Use Cases** que orquestram a lógica da aplicação (ex: `CreateProductUseCase`, `GetProductByIdUseCase`).
* **`src/infrastructure` (Detalhes):** Contém os **Controllers** do NestJS e a implementação real do armazenamento (neste caso, em memória). É a "casca" do sistema.

## 🧠 Conceitos Aplicados

1.  **Independência de Framework:** O núcleo do sistema não conhece o NestJS.
2.  **Inversão de Dependência:** O domínio define o contrato e a infraestrutura se adapta a ele.
3.  **Linguagem Ubíqua:** Nomenclaturas baseadas fielmente nas regras de negócio.
4.  **Entidades Autovalidáveis:** Regras de negócio (como validação de preço) protegidas dentro do objeto de domínio.

## 🛠️ Tecnologias Utilizadas
* [NestJS](https://nestjs.com/) - Framework Node.js progressivo para aplicações escaláveis.
* [TypeScript](https://www.typescriptlang.org/) - Tipagem estática para maior segurança e previsibilidade.
* [Git/GitHub](https://github.com/) - Versionamento e controle de código.

## 📋 Como Testar a API

1.  **Instalação das dependências:**
    ```powershell
    npm install
    ```

2.  **Execução do projeto:**
    ```powershell
    npm run start:dev
    ```

3.  **Endpoints Principais:**
    * `POST /products`: Cadastra um produto (Ex: `{"nome": "Monitor", "preco": 1200}`).
    * `GET /products`: Lista todos os produtos cadastrados.
    * `GET /products/:id`: Busca um produto específico pelo ID gerado.

---
**Autor:** Adriano Nunes dos Santos  
**Data:** Março de 2026