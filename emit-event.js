const request = require('request');
const events = require('./events');

/**
  Envio de eventos a cada 5 segundos para a URL 'webhook'
  , e a cada 5 segundos manda um evento da lista `events.js`
*/
module.exports = function emitEvent(webhook, i=0) {
  console.info(`Enviando evento `, events[i]);

  // Realiza o POST
  request.post({
    url: webhook,
    json: events[i]
  })
  .on('response', (response) => {
    console.log(`POST status code response is ${response.statusCode}`);
  });

  // Envia outro evento em 5 segundos
  setTimeout(() => {
    emitEvent(webhook, ++i);
  }, 5000);

}
