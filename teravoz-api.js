const app = require('express')();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const emitEvent = require('./emit-event');

/**
  Webhook para envio de eventos, configure para a sua
  URL de webhook
*/
const WEBHOOK = 'http://localhost:3333/webhook';

// inicia o envio de eventos
emitEvent(WEBHOOK);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
  POST http://localhost:3334/actions
  Endpoint das actions Dialer e Delegate
*/
app.post('/actions', (req, res) => {
  const event = req.body;
  console.info('Recebeu a action', req.body);
  // Response sempre é { status: ok }
  res.json({ status: 'ok' });
});

http.listen(3334, function(){
  console.info('Escutando na porta *:3334');
});
