const TarefasModel = require('../models/tarefasModel');

module.exports = {
    exibirLista(req, res) {
        const tarefas = TarefasModel.listar();
        res.render('listaTarefas', { tarefas });
    },

    exibirAdicionarTarefa(req, res) {
        res.render('adicionarTarefa');
    },

    adicionarTarefa(req, res) {
        const novaTarefa = {
            descricao: req.body.descricao,
            concluida: false
        };

        TarefasModel.adicionar(novaTarefa);
        res.redirect('/');
    },

    exibirEdicao(req, res) {
        const { id } = req.params;
        const tarefa = TarefasModel.listar().find(t => t.id == id);
        res.render('editaTarefa', { tarefa });
    },

    editarTarefa(req, res) {
        const { id } = req.params;
        TarefasModel.editar(id, req.body);
        res.redirect('/');
    },

    excluirTarefa(req, res) {
        const { id } = req.params;
        TarefasModel.excluir(id);
        res.redirect('/');
    }
};