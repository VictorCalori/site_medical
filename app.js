const express = require('express');
const app = express();
const port = 8010; // Porta em que o servidor será executado

app.use(express.static('.'));
// Rota para exibir a página index.html
app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html');
});
// Rota para exibir a página outra_pagina.html
app.get('/style.css', (req, res) => {
res.sendFile(__dirname + '/style.css');
});

app.get('/scriptlog1.js', (req,res) => {
res.sendFile(_dirname + '/scriptlog1.js');
});


// Iniciar o servidor
app.listen(port, () => {
console.log(`Servidor Express está rodando na porta ${port}`);
});

app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html');
});

// Rota para exibir a página outra_pagina.html
app.get('/login2.html', (req, res) => {
res.sendFile(__dirname + '/login2.html');
});

app.get('/style.css', (req, res) => {
res.sendFile(__dirname + '/styles.css');
});

app.get('/script.js', (req, res) => {
res.sendFile(__dirname + '/script.js');
});



