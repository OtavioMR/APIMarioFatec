let tarefas = [
    { id: 1, descricao: "Mário (que Mário ?)", concluida: false },
    { id: 2, descricao: "André doidão", concluida: true },
    { id: 3, descricao: "Otávio se fosse professor", concluida: false },
    { id: 4, descricao: "Marinho novamente", concluida: false }
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