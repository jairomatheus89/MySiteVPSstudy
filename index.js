// Importa o módulo express
const path = require('path');
const express = require('express');
// Cria uma aplicação Express
const app = express();

// Configuração para servir arquivos estáticos da pasta atual
app.use(express.static(path.join(__dirname)));

// Define uma rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'./public/paginaMain.html'));
});

// Configura a aplicação para escutar na porta 3000
const PORT = 80;
app.listen(PORT, () => {
    console.log(`rodando em http://localhost:${PORT}`);
});