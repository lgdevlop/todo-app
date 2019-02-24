Lista de Tarefas
===================

  - [Instalação(sem container docker)](#instalação)
  - [Rodar sem container Docker](#rodar-sem-container-docker)
  - [Rodar em container Docker](#rodar-em-container-docker)
  - [Rodando os Testes Automatizados](#rodando-os-testes-automatizados)
  - [Documentação da API](#Documentação-da-API)

## Instalação

Para instalar as dependências do projeto de Lista de Tarefas, utilize o comando abaixo(**somente necessário se for rodar a web aplicação sem a utilização docker ou efetuar os testes automatizados**):

    npm i

## Rodar sem container Docker

Para rodar sem utilizar o Docker, será necessário ter o MongoDB rodando na máquina localmente em sua porta padrão e rodar os comandos abaixo:

    npm start

Em outro terminal, entrar no diretório src/server e rodar o comando conforme abaixo:

    npm i
    npm start

Após executar os comandos com sucesso, a aplicação front-end estará rodando no endereço abaixo:

*[http://localhost:8080](http://localhost:8080)*

## Rodar em container Docker

Para rodar utilizando o container docker, basta rodar o comando abaixo:

    npm run docker

Após executar o comando com sucesso, a aplicação front-end estará rodando no endereço abaixo:

*[http://localhost:8080](http://localhost:8080)*

## Rodando os Testes Automatizados

Para rodar os testes automatizados, basta rodar o comando abaixo(**teste fora do container docker e instalando as dependências antes de rodar o comando abaixo**):

    npm run test

## Documentação da API

A documentação da API, encontra-se na pasta Docs. Bastando abrir o index.html em um navegador, para checar seu conteúdo:
