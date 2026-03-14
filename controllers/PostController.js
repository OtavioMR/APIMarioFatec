const express = require("express");
const router = express.Router();
const Post = require('../models/Post');

// rota principal
router.get('/', function(req,res){
    Post.findAll().then(function(posts){
        posts = posts.map(post => post.toJSON());
        res.render('home', {posts: posts});
    });
});

// rota cadastro
router.get('/cad', function(req,res){
    res.render('formulario');
});

// inserir
router.post('/add', function(req,res){
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.redirect('/');
    }).catch(function(erro){
        res.send("Erro: " + erro);
    });
});

// deletar
router.get('/deletar/:id', function(req,res){
    Post.destroy({where:{id:req.params.id}})
    .then(function(){
        res.redirect('/');
    })
    .catch(function(){
        res.send("Post não existe");
    });
});

// alterar
router.get('/alterar/:id', function(req,res){
    Post.findAll({where:{id:req.params.id}})
    .then(function(posts){
        posts = posts.map(post => post.toJSON());
        res.render('alterar', {posts: posts});
    });
});

// update
router.post('/update', function(req,res){
    Post.update({
        titulo:req.body.titulo,
        conteudo:req.body.conteudo
    },{
        where:{id:req.body.id}
    }).then(function(){
        res.redirect('/');
    }).catch(function(erro){
        res.send("Erro: " + erro);
    });
});

module.exports = router;