const express = require('express');
const app = express();
const port = 8015; // Porta em que o servidor será executado
// Rota para exibir a página index.html
app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html');
});

// Rota para exibir a página outra_pagina.html
app.get('/cadastro.html', (req, res) => {
res.sendFile(__dirname + '/cadastro.html');
});

app.get('/cadastro.css', (req, res) => {
res.sendFile(__dirname + '/cadastro.css');
});

app.get('/cadastro.js', (req, res) => {
res.sendFile(__dirname + '/cadastro.js');
});

// Iniciar o servidor
app.listen(port, () => {
console.log(`Servidor Express está rodando na porta ${port}`);
});
