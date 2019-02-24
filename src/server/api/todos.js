const db = require('../db')
require('../modelos/tarefas')

const tarefasApi = {}

/**
 * Lista todas as tarefas cadastradas no MongoDB
 */
tarefasApi.obtemTodasAsTarefas = async function obtemTodasAsTarefas(requisicao, resposta) {

  try {

    if(requisicao.query.estado === undefined) {
      const tarefas = await db.obtemTodasAsTarefas()
      resposta.json(tarefas)
    } else {
      const tarefa = {}
      tarefa.estado = requisicao.query.estado
      const tarefas = await db.obtemTarefaPorEstadoOuPorId(tarefa)
      resposta.json(tarefas)
    }

  } catch(erro) {

    if (erro.message.trim() === 'Não Encontrada') {
      resposta.status(202).send('Não Encontrada')
    } else {
      resposta.status(500).json(erro)
    }

  }

}

/**
 * Busca tarefa por ID no Banco de Dados
 */
tarefasApi.obtemTarefaPorId = async function obtemTarefaPorId(
  requisicao,
  resposta
) {

  try {

    const tarefa = {}
    tarefa._id = requisicao.params.id
    const tarefas = await db.obtemTarefaPorEstadoOuPorId(tarefa)
    resposta.json(tarefas)

  } catch(erro) {

    if (erro.message.trim() === 'Não Encontrada') {
      resposta.status(202).send('Não Encontrada')
    } else if (erro.name === 'CastError') {
      resposta.sendStatus(400)
    } else {
      resposta.status(500).json(erro)
    }

  }

}

/**
 * Adiciona tarefa no banco de dados.
 */
tarefasApi.adicionaTarefa = async function adicionaTarefa(requisicao, resposta) {

  try {

    const tarefa = {}
    tarefa.nome = requisicao.body.nome
    tarefa.estado = requisicao.body.estado
    const tarefas = await db.adicionaTarefa(tarefa)
    resposta.status(201).json(tarefas)

  } catch(erro) {

    // if (erro.message.trim() === 'Não Encontrada') {
    //   resposta.status(202).send('Não Encontrada')
    // } else {
    //   resposta.status(500).json(erro)
    // }
    resposta.status(500).json(erro)

  }

}

/**
 * Atualiza a tarefa pelo ID informado.
 */
tarefasApi.atualizaTarefaPorId = async function atualizaTarefaPorId(requisicao, resposta) {

  try {

    const tarefa = {}
    tarefa.estado = requisicao.body.estado
    const tarefas = await db.atualizaTarefaPorId(requisicao.body.id, tarefa)
    resposta.status(200).json(tarefas)

  } catch(erro) {

    if (erro.message.trim() === 'Não Encontrada') {
      resposta.status(202).send('Não Encontrada')
    } else if (erro.name === 'CastError') {
      resposta.sendStatus(400)
    } else {
      resposta.status(500).json(erro)
    }

  }

}

/**
 * Remove a tarefa pelo ID informado.
 */
tarefasApi.removeTarefaPorId = async function removeTarefaPorId(requisicao, resposta) {

  try {

    const tarefas = await db.removeTarefaPorId(requisicao.params.id)
    resposta.status(200).send(tarefas)

  } catch(erro) {

    if (erro.message.trim() === 'ID não encontrado no Banco de Dados') {
      resposta.status(202).send('ID não encontrado no Banco de Dados')
    } else if (erro.name === 'CastError') {
      resposta.sendStatus(400)
    } else {
      resposta.status(500).json(erro)
    }

  }

}

/**
 * Envia o Status Bad Request para um verbo HTTP não suportado pela API REST.
 */
tarefasApi.verboHTTPNaoSuportado = function verboHTTPNaoSuportado(requisicao, resposta) {
  resposta.sendStatus(400)
}

module.exports = tarefasApi
