const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Configuração do Multer para o upload de imagens
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'imagens/'); // As imagens serão salvas no diretório 'imagens/'
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

// Rota para obter todos os imóveis
