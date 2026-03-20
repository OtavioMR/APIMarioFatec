const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const tarefasController = require('./controllers/tarefasController');

const app = express();

// Handlebars
app.engine('handlebars', exphbs.engine({
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts'
}));

app.set('view engine', 'handlebars');

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Rotas
app.get('/', tarefasController.exibirLista);
app.get('/tarefas/adicionar', tarefasController.exibirAdicionarTarefa);
app.post('/tarefas', tarefasController.adicionarTarefa);
app.get('/tarefas/:id/editar', tarefasController.exibirEdicao);
app.post('/tarefas/:id/editar', tarefasController.editarTarefa);
app.get('/tarefas/:id/excluir', tarefasController.excluirTarefa);

// Servidor
app.listen(8081, () => {
    console.log("http://localhost:8081");
});