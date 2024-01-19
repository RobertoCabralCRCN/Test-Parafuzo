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

1. Acessar o diretório do projeto (SerasaApp)

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
  . cpf-cnpj-validator
  . etc

  - Banco de dados utilizado
  . Postgres

```

## Teste da Aplicação

**Para executar os testes da aplicação:**

1. Caso entenda necessário, pode ser feita a importação da collection para faciliar os testes:

```
SerasaTest.postman_collection.json
```

Endpoints da aplicação:

**Cultures:**

**Carga Fria:**

- Ao rodar o comando migration:run, segue base já cadastrada, com id e culture_name, para teste:

1 Milho
2 Soja
3 Arroz
4 Café
5 Feijão
6 Batata
7 Banana
8 Alface
9 Cenoura
10 Beterraba
11 Mandioca

**Criar Uma Nova Cultura**

- Esse método contempla a possibilidade de cadastrar uma nova cultura, respeitando a base já cadastrada.

- Create Culture -> POST

```bash
curl --location 'http://localhost:3434/cultures' \
--header 'Content-Type: application/json' \
--data '{
    "culture_name": ""
}'
```

- Get All Cultures -> GET

```bash
curl --location 'http://localhost:3434/cultures'
```

- Get By Id Culture - > Get

```bash
curl --location 'http://localhost:3434/cultures/1'
```

**Producers:**

- Create Producer -> POST

// corrigir validação de person type

```bash
curl --location 'http://localhost:3434/producers' \
--header 'Content-Type: application/json' \
--data '{
    "producer_name": "Produções Agricula ME",
    "person_type": "PJ",
    "document": "72194876000127"
}'
```

- Get Producer By Id -> GET

```bash
curl --location 'http://localhost:3434/producers/3594a864-ee01-4fdb-9641-922dfcbc70f2'
```

- Get All Producers -> GET

```bash
curl --location 'http://localhost:3434/producers'
```

- Update Producer -> PUT

```bash
curl --location --request PUT 'http://localhost:3434/producers/3594a864-ee01-4fdb-9641-922dfcbc70f2' \
--header 'Content-Type: application/json' \
--data '{
    "producer_name": "Vicentino Ramos Souza Filho",
    "is_active": true
}'
```

- Delete Producer -> DELETE

```bash
curl --location --request DELETE 'http://localhost:3434/producers/6459ada9-387f-423d-a878-f898c9415045'

Esse método não irá excluir por definitivo o registro, fará apenas o update na tabela no campo "is_active", colocando esse registro como "active: false" (deleção lógica)
```

**Farms:**

- Create Farm -> POST

```bash
curl --location 'http://localhost:3434/farms' \
--header 'Content-Type: application/json' \
--data '{
    "producer_id": "cbe3c862-ff34-442a-ab67-c21a4ef45374",
    "farm_name": "Fazenda do meu pai",
    "city": "La nao sei aonde",
    "state": "SP",
    "agricultural_area_ectares": 45,
    "vegetation_area_ectares": 45,
    "total_area_ectares": 160,
    "crops": [
         4
    ]
}'

```

- Get Farm By Id -> GET

```bash
curl --location 'http://localhost:3434/farms/a9a325b2-f531-4d97-83fb-ad958cc4f485'
```

- Get All Farms -> GET

```bash
curl --location 'http://localhost:3434/farms'
```

- Update Farm -> PUT

```bash
curl --location --request PUT 'http://localhost:3434/farms/a9a325b2-f531-4d97-83fb-ad958cc4f485' \
--header 'Content-Type: application/json' \
--data '{
    "farm_name": "Ramos Filho Fazenda de Gados",
    "city": "Salesópolis",
    "state": "SP",
    "agricultural_area_ectares": 45,
    "vegetation_area_ectares": 45,
    "total_area_ectares": 160,
    "is_active": true,
    "crops": [
        1,2
    ]
}'
```

- Delete Farm -> DELETE

```bash
curl --location --request DELETE 'http://localhost:3434/farms/a9a325b2-f531-4d97-83fb-ad958cc4f485'

Esse método não irá excluir por definitivo o registro, fará apenas o update na tabela no campo "is_active", colocando esse registro como "active: false" (deleção lógica)
```

## Observações

Consegui colocar em prática os principais conceitos que aprendi ao longo dos
meus estudos / experiência com essas tecnologias, além do desafio de ter criado tudo do "zero".
Não fiz a publicação do projeto em ambiente cloud por ter expirado minha conta (versão gratuita) da AWS, porém,
possuo experiência com arquitetura cloud, serverless, api gateway, criação de lambdas etc.

Ficaram faltando algumas melhorias e refatorações no código, considerando algumas regras de negócio:

## TODO

```
. Métodos CRUD no módulo de Culture
. Validações de input nos Controllers(feito apenas o create producer)


```

