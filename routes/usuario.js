const express = require('express');

const bcrypt = require('bcryptjs');

//const mwAuth = require('../middlewares/auth');
const app = express();

//const Usuario = require('../models/usuario');

const Usuario = require('../models/usuario');
//==============================================
// Obtener todos los usuarios
//==============================================
app.get('/', (req, res, next) => {

    Usuario.findAll({attributes: ['name', 'last_name', 'email', 'id']}).then(users => {
        res.status(200).json({
            ok: true,
            users
        });
    });

});
//==============================================
// Actualizar usuario
//==============================================
app.put('/:id', (req, res) => {

    let id = req.params.id;
    let body = req.body;

    let usuario = {
        name: body.name,
        last_name: body.last_name,
        email: body.email
    };

    Usuario.update(usuario, {
        where: {
            id: id
        }
    }).then(() => {
        res.status(200).json({
            ok: true,
            message: 'Usuario actualizado'
        });
    }).catch((err) => {
        res.status(400).json({
            ok: false,
            err: err.errors
        });
    });

});
//==============================================
// Crear un nuevo usuario
//==============================================
app.post('/', (req, res) => {

    let body = req.body;

    let usuario = Usuario.build({
        name: body.name,
        last_name: body.last_name,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10)
    });

    usuario.save()
        .then(usuarioGuardado => {

            res.status(200).json({
                ok: true,
                usuario: usuarioGuardado
            });
        })
        .catch(error => {
            res.status(500).json({
                ok: false,
                error: error.errors
            });
        });

});
//==============================================
// Borrar usuario por id
//==============================================
app.delete('/:id', (req, res) => {

    let id = req.params.id;
    Usuario.destroy({
        where: {
            id: id
        }
    })
        .then(borrado => {

            res.status(200).json({
                ok: true,
                usuario: borrado
            });
        })
        .catch(error => {
            res.status(500).json({
                ok: false,
                error: error.errors
            });
        });

});

module.exports = app;

