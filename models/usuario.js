const Sequelize = require("sequelize");
const db = require('../models/dbconnection');

const Usuario = db.define('users', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Nombre requerido"
            }
        }
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Apellidos requeridos"
            }
        }
    },
    password: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                msg: "Contraseña requerida"
            }
        }
    },
    pic: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: {
                msg: "Email inválido"
            },
            notEmpty: {
                msg: "Email requerido"
            }
        }
    },
    permissions: {
        type: Sequelize.STRING
    }
});

module.exports = Usuario;