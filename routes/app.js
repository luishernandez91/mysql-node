const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Petición a aplicación'
    });
});

module.exports = app;