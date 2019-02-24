const todosApi = require('../api/todos')

const rotas = {}

/**
 * Configura as rotas da API REST
 * @param express Instância do express
 */
rotas.configuraRotas = function configuraRotas(express) {

  rotas.todasAsTarefas(express)
  rotas.tarefaPorId(express)
  // rotas.todasAsTarefasPorEstado(express)

}

/**
 * Configura a rota '/todos' que retorna todas as tarefas do Banco de Dados e adiciona uma tarefa no Banco de Dados. (/todos ou /todos?estado=meuEstado)
 */
rotas.todasAsTarefas = function todasAsTarefas(server) {
  server
    .route('/v1/todos')
    .get(todosApi.obtemTodasAsTarefas)
    .post(todosApi.adicionaTarefa)
    .all(todosApi.verboHTTPNaoSuportado)
}

/**
 * Configura a rota '/obtemTodasAsTarefasPorEstado?estado=meuEstado' que retorna todas as tarefas do Banco de Dados por estado.
 */
// rotas.todasAsTarefasPorEstado = function todasAsTarefasPorEstado(server) {
//   server
//     .route('/v1/todosPorEstado')
//     .get(todosApi.obtemTodasAsTarefasPorEstado)
//     .all(todosApi.verboHTTPNaoSuportado)
// }

/**
 * Configura a rota '/todos/:id' que retorna a tarefa informada por ID, deleta uma tarefa por ID e atualiza uma tarefa por ID.
 */
rotas.tarefaPorId = function tarefaPorId(server) {
  server
    .route('/v1/todos/:id')
    .get(todosApi.obtemTarefaPorId)
    .delete(todosApi.removeTarefaPorId)
    .put(todosApi.atualizaTarefaPorId)
    .all(todosApi.verboHTTPNaoSuportado)
}

module.exports = rotas
