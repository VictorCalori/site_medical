const express = require('express');
const app = express();
const port = 8018; 

app.get('/', (req, res) => {
res.sendFile(__dirname + '/consulta.html');
});

app.get('/style.css', (req, res) => {
res.sendFile(__dirname + '/style.css');
});

app.listen(port, () => {
console.log(`Servidor Express está rodando na porta ${port}`);
});