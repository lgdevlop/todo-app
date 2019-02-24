const mongoose = require('mongoose')
require('../modelos/tarefas')

const modelo = mongoose.model('tarefas')

const db = {}

/**
 * Obtem todas as tarefas do MongoDB
 */
db.obtemTodasAsTarefas = function obtemTodasAsTarefas() {
  return new Promise((resolve, reject) =>
    modelo
      .find()
      .then((tarefas) => {
        if (typeof tarefas !== 'undefined' && tarefas.length > 0) {
          resolve(tarefas)
        } else {
          throw new Error('Não Encontrada')
        }
      })
      .catch((erro) => reject(erro))
  )
}

/**
 * Obtem a tarefa do MongoDB, buscando por estado ou por ID
 */
db.obtemTarefaPorEstadoOuPorId = function obtemTarefaPorEstadoOuPorId(tarefa) {
  return new Promise((resolve, reject) => {
    modelo
      .find(tarefa)
      .then((tarefaEncontrada) => {
        if (typeof tarefaEncontrada !== 'undefined' && tarefaEncontrada !== null && tarefaEncontrada.length > 0) {
          resolve(tarefaEncontrada)
        } else {
          throw new Error('Não Encontrada')
        }
      })
      .catch((erro) => reject(erro))
  })
}

/**
 * Adiciona tarefa no MongoDB
 */
db.adicionaTarefa = function adicionaTarefa(parametros) {
  return new Promise((resolve, reject) => {
    modelo
      .create(parametros)
      .then((tarefa) => resolve(tarefa))
      .catch((erro) => reject(erro))
  })
}

/**
 * Atualiza a tarefa por ID do MongoDB
 */
db.atualizaTarefaPorId = function atualizaTarefaPorId(condicao, tarefa) {

  return new Promise((resolve, reject) => {
    modelo
      .findByIdAndUpdate(condicao, tarefa, {new: true})
      .then((tarefaEncontrada) => {
        // console.log(tarefaEncontrada)
        if (typeof tarefaEncontrada !== 'undefined' && tarefaEncontrada !== null) {
          resolve(tarefaEncontrada)
        } else {
          throw new Error('Não Encontrada')
        }
      })
      .catch((erro) => {
        reject(erro)
      })
  })

}

/**
 * Remove tarefa por ID do MongoDB
 */
db.removeTarefaPorId = function removeTarefaPorId(id) {
  return new Promise((resolve, reject) => {
    modelo
      .findByIdAndDelete(id)
      .then((dados) => {
        // console.log(dados)
        if (dados !== null) {
          resolve('removido')
        } else {
          throw new Error('ID não encontrado no Banco de Dados')
        }
      })
      .catch((erro) => reject(erro))
  })
}

module.exports = db
