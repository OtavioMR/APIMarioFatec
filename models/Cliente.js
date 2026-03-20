const db = require('./db');

const Cliente = db.sequelize.define('clientes', {
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
});

Cliente.sync({ force: false });

module.exports = Cliente;