const express = require('express');
let expressWs = require('..');

expressWs = expressWs(express());
const { app } = expressWs;

app.use((req, res, next) => {
  console.log('middleware');
  req.testing = 'testing';
  return next();
});

app.get('/', (req, res) => {
  console.log('get route', req.testing);
  res.end();
});

function returnMessageToClient(message) {
  const ws = expressWs.getWss('/');
  ws.clients.forEach((client) => {
    client.send(message);
  });
}

app.ws('/', (ws, req) => {
  ws.on('message', (msg) => {
    console.log(msg);
  });
  setInterval(() => {
    returnMessageToClient(Math.random());
  }, 5000);
});

app.listen(3000);
