const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/users');

const PORT = 80;
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//rota padrao para servir o index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'paginaMain.html'));
});

// Conexão com o MongoDB
mongoose.connect('mongodb+srv://jairomatheus89:gNRgunsnroseS89@freecluster.wby27.mongodb.net/?retryWrites=true&w=majority&appName=FreeCluster',{
}).then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Rota para receber o formulário
app.post('/add-user', async (req, res) => {
    const { name } = req.body;
    try {
        const user = new User({ name });
        await user.save();
        res.send('Usuário salvo com sucesso!');
    } catch (err) {
        res.status(500).send('Erro ao salvar o usuário.');
    }
});

// Servidor rodando
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
