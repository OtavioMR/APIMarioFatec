const Sequelize = require("sequelize");

const sequelize = new Sequelize("postapp", "root", "root", {
    host: "localhost",
    port: "3306",
    dialect: "mysql"
});

sequelize.authenticate()
.then(() => {
    console.log("Conectado com sucesso!");
})
.catch((erro) => {
    console.log("Erro ao conectar: " + erro);
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};