const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/users');

const PORT = 3000;
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//rota padrao para servir o index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'paginaMain.html'));
});

mongoose.connect('mongodb+srv://jairomatheus89:gNRgunsnroseS89@freecluster.wby27.mongodb.net/meupiruzao',{
    useNewUrlParser: true,    // Parses MongoDB connection string
    useUnifiedTopology: true, // Enables new connection management engine
});

// Rota para receber o formulário
app.post('/postinhoUser', async (req, res) => {
    const { name, messagezinha } = req.body;
    try {
        const user = new User({ name, messagezinha });
        await user.save();
        res.redirect('/successsavename');
    } catch (err) {
        res.status(500).send('Erro ao salvar o usuário.');
    }
});

app.get('/successsavename', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'successsavename.html'))
})

// Servidor rodando
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
