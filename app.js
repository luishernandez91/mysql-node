const express = require('express');

const bodyParser = require('body-parser');

//==============================================
// Inicializar variables
//==============================================
const app = express();

//==============================================
// Configuración de body-parser
//==============================================
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

//==============================================
// Importar rutas
//==============================================
const appRoutes = require('./routes/app');
const usuarioRoutes = require('./routes/usuario');

//==============================================
// Usar rutas
//==============================================
app.use('/usuario', usuarioRoutes);
app.use('/', appRoutes);

//==============================================
// Escuchar peticiones
//==============================================
app.listen(3000, () => {
    console.log('server Online');
});