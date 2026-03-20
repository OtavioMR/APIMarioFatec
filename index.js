const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

const RotaPost = require("./controllers/PostController");
const RotaCliente = require("./controllers/ClienteController");

app.use(express.static(path.join(__dirname, "public")));

app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// rotas
app.use("/postagens", RotaPost);
app.use("/clientes", RotaCliente);

// rota inicial
app.get("/", function(req, res) {
    res.redirect("/postagens");
});

app.listen(8081, function() {
    console.log("Servidor Rodando");
});