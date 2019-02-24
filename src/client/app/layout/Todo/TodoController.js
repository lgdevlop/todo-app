import * as tarefasAPI from '../../service/tarefasAPI'

const obtemTodasAsTarefas = async function obtemTodasAsTarefas(setTarefas) { 

  try {
    const dados = await tarefasAPI.obtemTodasAsTarefas()

    if(dados.data !== 'Não Encontrada') {
      setTarefas(dados.data)
    } else {
      setTarefas([])
    }
    
  } catch(erro) {
    console.log(erro)
  }
  
}

const obtemTarefaPorEstado = async function obtemTarefaPorEstado(setTarefas, estado = '') { 

  try {
    const dados = await tarefasAPI.obtemTarefaPorEstado(estado.toLocaleLowerCase())

    if(dados.data !== 'Não Encontrada' ) {
      setTarefas(dados.data)
    } else {
      setTarefas([])
    }

  } catch(erro) {
    console.log(erro)
  }
  

}

const adicionaTarefa = async function adicionaTarefa(tarefa = {}) { 

  try {
    await tarefasAPI.adicionaTarefa(tarefa)
  } catch(erro) {
    console.log(erro)
  }
  
}

const atualizaTarefaPorId = async function atualizaTarefaPorId(Id = '') {
  try {
    await tarefasAPI.atualizaTarefaPorId(Id)
  } catch(erro) {
    console.log(erro)
  }
}

const removeTarefaPorId = async function removeTarefaPorId(Id = '') {
  try {
    await tarefasAPI.removeTarefaPorId(Id)
  } catch(erro) {
    console.log(erro)
  }
  
}

export { 
  obtemTodasAsTarefas, 
  obtemTarefaPorEstado, 
  adicionaTarefa, 
  atualizaTarefaPorId, 
  removeTarefaPorId, 
}