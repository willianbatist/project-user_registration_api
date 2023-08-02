### Observação

Este repositório contem o **Projeto User Registration API** que reúne o aprendizado desenvolvido por _[Willian Alves Batista](https://www.linkedin.com/in/willian-alves-batista-60aa6a180/)_.

# Projeto User Registration API



<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://github.com/willianbatist/project-user_registration_api/main/LICENSE"><img src="https://img.shields.io/github/license/osintbrazuca/osint-brazuca-regex?color=blue"></a>
</p>

#### Habilidades que foram exigidas:

  - Logica de programação;

#### Tecnologias utilizadas:

  - TypeScript;
  - Node.js;
  - Nest.js;
  - Docker;
  - docker-compose;
  - TypeORM;
  - MySQL;
  - bcrypt;
  - Swagger.

---

## Apresentação do Projeto

O Projeto User Registration é uma API RESTFul de cadastro de usuários, onde é possível realizar um CRUD (Create, Read, Update, Delete) e validação de login. As principais tecnologias utilizadas foram Nest.js, TypeScript, TypeORM, MySQL e docker-compose.


### Start do Projeto

***Obs: Para rodar o projeto é necessário ter docker-compose na versão 3.9 pra cima e node.js.*** 

    git clone git@github.com:willianbatist/project-user_registration_api.git

Na raiz do repositório:

    docker-compose up -d --build
--

    npm run build
--

    npm run up
--

    npm run start:dev
--

Caso ocorra algum erro durante o processo, pare a execução e repita o comando.
A API estará disponível em: http://localhost:3010/

---


## Documentação da API Swagger

A documentação detalhada da API está disponível em: http://localhost:3010/api/

**Observações acerca da API:**
Para evitar erros, certifique-se de não enviar informações faltando para a API e sempre enviar um objeto e nunca um array. Na documentação da API no swagger estão disponíveis todas as rotas e os dados que são obrigatórios a serem enviados.

A senha do usuário, que é devolvida pela API, está criptografada, portanto o que aparece não é exatamente o que foi digitado.

Por ser uma aplicação simples e ter apenas o intuito de aprendizagem não foi utilizado dotenv.

---

### Contato

e-mail: willian.alves.b15@gmail.com
