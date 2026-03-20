const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// listar postagens
router.get("/", function(req, res) {
    Post.findAll()
        .then(function(posts) {
            posts = posts.map(post => post.toJSON());
            res.render("home", { posts: posts });
        })
        .catch(function(erro) {
            res.send("Erro ao listar postagens: " + erro);
        });
});

// abrir formulário de cadastro
router.get("/cad", function(req, res) {
    res.render("formulario");
});

// cadastrar postagem
router.post("/add", function(req, res) {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    })
    .then(function() {
        res.redirect("/postagens");
    })
    .catch(function(erro) {
        res.send("Erro ao cadastrar postagem: " + erro);
    });
});

// deletar postagem
router.get("/deletar/:id", function(req, res) {
    Post.destroy({
        where: { id: req.params.id }
    })
    .then(function() {
        res.redirect("/postagens");
    })
    .catch(function(erro) {
        res.send("Erro ao deletar postagem: " + erro);
    });
});

// abrir formulário de alteração
router.get("/alterar/:id", function(req, res) {
    Post.findAll({
        where: { id: req.params.id }
    })
    .then(function(posts) {
        posts = posts.map(post => post.toJSON());
        res.render("alterar", { posts: posts });
    })
    .catch(function(erro) {
        res.send("Erro ao buscar postagem: " + erro);
    });
});

// atualizar postagem
router.post("/update", function(req, res) {
    Post.update(
        {
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        },
        {
            where: { id: req.body.id }
        }
    )
    .then(function() {
        res.redirect("/postagens");
    })
    .catch(function(erro) {
        res.send("Erro ao atualizar postagem: " + erro);
    });
});

module.exports = router;