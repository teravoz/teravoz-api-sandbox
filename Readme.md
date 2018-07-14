# Teravoz API Sandbox

Simulador básico da API Teravoz, um web server em **Node.js**.

Tem duas funções:
- Recebe requisições HTTP POST na rota `/actions`;
- Envia eventos falsos (mockados) de chamada para um Webhook a cada 5 segundos

A configuração do Webhook é realizada no módulo `teravoz-api.js`, alterando a variável `WEBHOOK` com o endereço da sua URL do seu webhook, ou usar o padrão `http://localhost:3333/webhook`

## Requisitos

Necessário Node.js 8 ou superior.

## Instalação

Clone este repositório:
```
git clone https://github.com/teravoz/teravoz-api-sandbox.git
cd teravoz-api-sandbox/
```

Instale as dependências:

```
npm install
```

Execute o client:
```
npm start
```

## Teste do uso

Faça um POST na URL `http://localhost:3334/actions` usando o comando `curl` (https://curl.haxx.se/):

```
curl \
  -X POST \
  -H 'Content-type: application/json' \
  -d '{
    "type": "delegate",
    "call_id": "12.345",
    "destination": "100"
  }' http://localhost:3334/actions
```
