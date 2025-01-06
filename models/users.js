const mongoose = require('mongoose');

const UserMeuPiruzao = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 26,
    },
    messagezinha: {
        type: String,
        required: true,
        maxlength: 150,
    },
}, {timestamps: true});

module.exports = mongoose.model('myblackcock', UserMeuPiruzao);