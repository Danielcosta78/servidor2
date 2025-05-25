const express = require('express');
const { ExpressPeerServer } = require('peer');

const app = express();
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Servidor PeerJS rodando na porta ${PORT}`);
});

const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/', // rodando na raiz
  allow_discovery: true
});

app.use('/', peerServer);
