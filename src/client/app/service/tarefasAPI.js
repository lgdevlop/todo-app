import axios from 'axios'

const URL = 'http://localhost:4444/v1/'

const obtemTodasAsTarefas = async () => {

  try {
    const dados = await axios.get(`${URL}todos`)
    return dados
  } catch (erro) {
    // console.log(erro)
    throw erro
  }

}

const obtemTarefaPorEstado = async (estado = '') => {
  
  try {
    const dados = await axios.get(`${URL}todos?estado=${estado}`)
    return dados
  } catch (erro) {
    // console.log(erro)
    throw erro
  }

}

// const obtemTarefaPorID = async (Id = '') => {
  
//   try {
//     await axios.get(`${URL}todos/${Id}`)
//   } catch (erro) {
//     // console.log(erro)
//     throw erro
//   }

// }

const adicionaTarefa = async (tarefa = {}) => {
  
  try {
    const dados = await axios.post(`${URL}todos`, tarefa)
    return dados
  } catch (erro) {
    // console.log(erro)
    throw erro
  }

}

const atualizaTarefaPorId = async (Id = '') => {
  
  try {
    const dados = await axios.put(`${URL}todos/${Id}`, {estado: 'completado', id: Id})
    return dados
  } catch (erro) {
    // console.log(erro)
    throw erro
  }

}

const removeTarefaPorId = async (Id = '') => {
  
  try {
    const estado = await axios.delete(`${URL}todos/${Id}`)
    return estado
  } catch (erro) {
    // console.log(erro)
    throw erro
  }

}

export {
  obtemTodasAsTarefas, 
  obtemTarefaPorEstado, 
  // obtemTarefaPorID, 
  adicionaTarefa, 
  atualizaTarefaPorId, 
  removeTarefaPorId,
}