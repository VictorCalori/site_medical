const express = require('express');
const app = express();
const port = 8018;

// Rota exibir a pagina outra_pagina.html
app.get('/', (req, res) => {
res.sendFile(__dirname + '/login2');
});

app.get('/style.css', (req, res) => {
res.sendFile(__dirname + '/style.css');
});

app.get('/script.js', (req, res) => {
res.sendFile(__dirname + '/script.js');
});

// Iniciar o servidor
app.listen(port, () => {
console.log(`Servidor Express está rodando na porta ${port}`);
});
