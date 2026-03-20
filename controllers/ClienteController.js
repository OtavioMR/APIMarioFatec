const express = require("express");
const router = express.Router();
const Cliente = require("../models/Cliente");

// listar clientes
router.get("/", function(req, res) {
    Cliente.findAll()
        .then(function(clientes) {
            clientes = clientes.map(cliente => cliente.toJSON());
            res.render("clientes/lista", { clientes: clientes });
        })
        .catch(function(erro) {
            res.send("Erro ao listar clientes: " + erro);
        });
});

// abrir formulário
router.get("/cad", function(req, res) {
    res.render("clientes/formulario");
});

// cadastrar cliente
router.post("/add", function(req, res) {
    Cliente.create({
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone
    })
    .then(function() {
        res.redirect("/clientes");
    })
    .catch(function(erro) {
        res.send("Erro ao cadastrar cliente: " + erro);
    });
});

// deletar cliente
router.get("/deletar/:id", function(req, res) {
    Cliente.destroy({
        where: { id: req.params.id }
    })
    .then(function() {
        res.redirect("/clientes");
    })
    .catch(function(erro) {
        res.send("Erro ao deletar cliente: " + erro);
    });
});

// abrir formulário de alteração
router.get("/alterar/:id", function(req, res) {
    Cliente.findAll({
        where: { id: req.params.id }
    })
    .then(function(clientes) {
        clientes = clientes.map(cliente => cliente.toJSON());
        res.render("clientes/alterar", { clientes: clientes });
    })
    .catch(function(erro) {
        res.send("Erro ao buscar cliente: " + erro);
    });
});

// atualizar cliente
router.post("/update", function(req, res) {
    Cliente.update(
        {
            nome: req.body.nome,
            email: req.body.email,
            telefone: req.body.telefone
        },
        {
            where: { id: req.body.id }
        }
    )
    .then(function() {
        res.redirect("/clientes");
    })
    .catch(function(erro) {
        res.send("Erro ao atualizar cliente: " + erro);
    });
});

module.exports = router;