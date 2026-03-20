let tarefas = [
    { id: 1, descricao: "Estudar Node.js", concluida: false },
    { id: 2, descricao: "Revisar JavaScript", concluida: true },
    { id: 3, descricao: "Viu o prof Mário Hoje?", concluida: false },
    { id: 4, descricao: "Já disse que o prof Mário é legal?", concluida: false }
];

module.exports = {
    listar() {
        return tarefas;
    },

    adicionar(tarefa) {
        tarefa.id = tarefas.length + 1;
        tarefas.push(tarefa);
    },

    editar(id, dados) {
        const tarefa = tarefas.find(t => t.id == id);
        if (tarefa) {
            tarefa.descricao = dados.descricao;
            tarefa.concluida = dados.concluida === 'on';
        }
    },

    excluir(id) {
        tarefas = tarefas.filter(t => t.id != id);
    }
};