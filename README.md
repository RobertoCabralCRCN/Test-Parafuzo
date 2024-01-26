# SersaApp

## Índice

- [Instalação](#instalação)
- [Teste Unitário](#teste-unitário)
- [Arquitetura do Projeto](#arquitetura-do-projeto)
- [Teste da Aplicação](#teste-da-aplicação)
- [Observações](#observações)
- [Itens Pendentes](#todo)

## Instalação

**Instalar repositório:**

- Ter docker e docker compose instalado

1. Acessar o diretório do projeto (Parafuzzo)

2. Executar o comando de instalação

```bash
$ npm install ou yarn (caso tenha instalado)
```

3. Executar o comando para subir a aplicação no docker

```bash
$ docker compose up -d
```

4. Após executar o comando acima, rodar as migrations para criação das tabelas

```bash
$ yarn typeorm migration:run ou npm run typeorm migration:run
```

## Teste unitário

**Após instalar as dependencias do projeto:**

1. Para rodar os testes unitários, após a instalação dos pacotes rodar o seguinte comando:

```bash
$ yarn test ou npm run test
```

6.1 Acessar coverage\lcov-report\index.html para verificar a cobertura

## Arquitetura do Projeto

```
  Projeto desenvolvido em Typescript.
  Foi criado utilizando a Arquitetura SOLID, DOCKER e DOCKER COMPOSE

  - Bibliotecas utilizadas
  . Express
  . TypeOrm
  . Tsyringe
  . Multer
  . Jest
  . MomentJs
  . etc

  - Banco de dados utilizado
  . Postgres

```

## Teste da Aplicação

**Para executar os testes da aplicação:**

1. Caso entenda necessário, pode ser feita a importação da collection para faciliar os testes:

```
Test-Parafuzo.postman_collection.json
```

Endpoints da aplicação:

**Parking:**

**Criar Uma Nova Entrada no Estacionamento**

- Esse método contempla a possibilidade de cadastrar uma nova entrada no estacionamento.

- Create Parking -> POST

```bash
curl --location 'http://localhost:3535/parkings' \
--header 'Content-Type: application/json' \
--data '{
    "plate": "aaa-0000"
}'

```

- Get By Plate -> GET

```bash
curl --location 'http://localhost:3535/parkings/FFF-0000'
```

- Payment To Plate - > PUT

```bash
curl --location --request PUT 'http://localhost:3535/parkings/9/pay'

Ao receber o id como paramêtro, o método faz a alterção do campo "paid" para "true" e insere o campo "end_time" como date now().
```

- Output To Plate - > PUT

```bash
curl --location --request PUT 'http://localhost:3535/parkings/2/out'

Ao receber o id como paramêtro, o método faz a alterção do campo "left" para "true".
```

## Observações

Consegui colocar em prática os principais conceitos que aprendi ao longo dos
meus estudos / experiência com essas tecnologias, além do desafio de ter criado tudo do "zero".
Não fiz a publicação do projeto em ambiente cloud por ter expirado minha conta (versão gratuita) da AWS, porém,
Possuo experiência com arquitetura cloud, serverless, api gateway, criação de lambdas etc.

Ficaram faltando algumas melhorias e refatorações no código, considerando algumas regras de negócio:

## TODO

```
. Método DELETE (deleção lógica)


```

