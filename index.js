// Importa o módulo express
const path = require('path');
const express = require('express');

// Cria uma aplicação Express
const app = express();

// Define uma rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'./paginaMain.html'));
});

// Configura a aplicação para escutar na porta 3000
const PORT = 80;
app.listen(PORT, () => {
    console.log(`rodando em http://localhost:${PORT}`);
});