const mongoose = require('mongoose')
require('../modelos/tarefas')

const modelo = mongoose.model('tarefas')

const db = require('./index')

describe('Testando a lógica CRUD', () => {

  it('obtemTodasAsTarefas: Obtem todas as tarefas do banco de dados', async () => {

    jest.spyOn(modelo, 'find')
    modelo.find.mockImplementation(() => Promise.resolve('Encontrado'))

    const dados = await db.obtemTodasAsTarefas()
    expect(dados).toBe('Encontrado')

  })

  it('obtemTodasAsTarefas: Tarefas não encontrada no banco de dados', async () => {

    jest.spyOn(modelo, 'find')
    modelo.find.mockImplementation(() => Promise.resolve())

    try {
      await db.obtemTodasAsTarefas()
    } catch(erro) {
      expect(erro).toEqual(Error('Não Encontrada'))
    }
    
  })

  it('obtemTodasAsTarefas: Erro desconhecido no banco de dados', async () => {

    jest.spyOn(modelo, 'find')
    modelo.find.mockImplementation(() => Promise.reject('Erro desconhecido'))

    try {
      await db.obtemTodasAsTarefas()
    } catch(erro) {
      expect(erro).toBe('Erro desconhecido')
    }
    
  })

  it('obtemTarefaPorEstadoOuPorId: Obtem a tarefa por ID ou por estado do banco de dados', async () => {

    jest.spyOn(modelo, 'find')
    modelo.find.mockImplementation(() => Promise.resolve('Encontrado'))

    const dados = await db.obtemTarefaPorEstadoOuPorId()
    expect(dados).toBe('Encontrado')

  })

  it('obtemTarefaPorEstadoOuPorId: Tarefa por ID ou por estado não encontrada no banco de dados', async () => {

    jest.spyOn(modelo, 'find')
    modelo.find.mockImplementation(() => Promise.resolve())

    try {
      await db.obtemTarefaPorEstadoOuPorId()
    } catch(erro) {
      expect(erro).toEqual(Error('Não Encontrada'))
    }
    
  })

  it('obtemTarefaPorEstadoOuPorId: Erro desconhecido no banco de dados', async () => {

    jest.spyOn(modelo, 'find')
    modelo.find.mockImplementation(() => Promise.reject('Erro desconhecido'))

    try {
      await db.obtemTarefaPorEstadoOuPorId()
    } catch(erro) {
      expect(erro).toBe('Erro desconhecido')
    }
    
  })

  it('adicionaTarefa: Adiciona tarefa no banco de dados', async () => {

    jest.spyOn(modelo, 'create')
    modelo.create.mockImplementation(() => Promise.resolve('Encontrado'))

    const dados = await db.adicionaTarefa({nome: 'Minha Tarefa', estado: 'ativo'})
    expect(dados).toBe('Encontrado')

    // try {
    //   const dados = await db.adicionaTarefa('Encontrado')
    // } catch(erro) {
    //   expect(erro).toBe('Erro desconhecido')
    // }
    
  })

  it('adicionaTarefa: Erro desconhecido no banco de dados', async () => {

    jest.spyOn(modelo, 'create')
    modelo.create.mockImplementation(() => Promise.reject('Erro desconhecido'))

    try {
      await db.adicionaTarefa({nome: 'Minha Tarefa', estado: 'ativo'})
    } catch(erro) {
      expect(erro).toBe('Erro desconhecido')
    }
    
  })

  it('atualizaTarefaPorId: Atualiza tarefa por ID no banco de dados', async () => {

    jest.spyOn(modelo, 'findByIdAndUpdate')
    modelo.findByIdAndUpdate.mockImplementation(() => Promise.resolve('Atualizado'))

    const dados = await db.atualizaTarefaPorId({nome: 'Minha Tarefa', estado: 'ativo'})
    expect(dados).toBe('Atualizado')
    
  })

  it('atualizaTarefaPorId: Tarefa por ID não encontrada para atualizar no banco de dados', async () => {

    jest.spyOn(modelo, 'findByIdAndUpdate')
    modelo.findByIdAndUpdate.mockImplementation(() => Promise.resolve())

    try{
      await db.atualizaTarefaPorId({nome: 'Minha Tarefa', estado: 'ativo'})
    } catch(dados){
      expect(dados).toEqual(Error('Não Encontrada'))
    }
    
  })

  it('atualizaTarefaPorId: Erro desconhecido no banco de dados', async () => {

    jest.spyOn(modelo, 'findByIdAndUpdate')
    modelo.findByIdAndUpdate.mockImplementation(() => Promise.reject('Erro desconhecido'))

    try{
      await db.atualizaTarefaPorId({nome: 'Minha Tarefa', estado: 'ativo'})
    } catch(dados){
      expect(dados).toBe('Erro desconhecido')
    }
    
  })

  it('removeTarefaPorId: Remove tarefa por ID do banco de dados', async () => {

    jest.spyOn(modelo, 'findByIdAndDelete')
    modelo.findByIdAndDelete.mockImplementation(() => Promise.resolve('Removido'))

    const dados = await db.removeTarefaPorId({nome: 'Minha Tarefa', estado: 'ativo'})
    expect(dados).toBe('removido')
    
  })

  it('removeTarefaPorId: Tarefa por ID não encontrada no banco de dados', async () => {

    jest.spyOn(modelo, 'findByIdAndDelete')
    modelo.findByIdAndDelete.mockImplementation(() => Promise.resolve(null))

    try {
      await db.removeTarefaPorId({nome: 'Minha Tarefa', estado: 'ativo'})
    } catch(dados){
      expect(dados).toEqual(Error('ID não encontrado no Banco de Dados'))
    }
    
  })

  it('removeTarefaPorId: Tarefa por ID não encontrada no banco de dados', async () => {

    jest.spyOn(modelo, 'findByIdAndDelete')
    modelo.findByIdAndDelete.mockImplementation(() => Promise.reject('Erro desconhecido'))

    try {
      await db.removeTarefaPorId({nome: 'Minha Tarefa', estado: 'ativo'})
    } catch(dados){
      expect(dados).toBe('Erro desconhecido')
    }
    
  })

  // it('verificaSePlanetaExisteMongoDb: Planeta não encontrado no banco de dados', (terminado) => {
  //   jest.spyOn(modelo, 'find')
  //   modelo.find.mockImplementation(() => Promise.resolve({}))

  //   // expect.assertions(1)
  //   return db.verificaSePlanetaExisteMongoDb('Abacate').then((retorno) => {
  //     expect(retorno).toBe('Não encontrado')
  //     terminado()
  //   })
  // })

  // it('verificaSePlanetaExisteMongoDb: Erro não esperado no banco de dados ao buscar por planeta', (terminado) => {
  //   jest.spyOn(modelo, 'find')
  //   modelo.find.mockImplementation(() => Promise.reject(new Error('Erro desconhecido')))

  //   // expect.assertions(1)
  //   return db.verificaSePlanetaExisteMongoDb('Abacate').catch((erro) => {
  //     expect(erro.message).toBe('Erro desconhecido')
  //     terminado()
  //   })
  // })

  // it('obtemTodosPlanetas: Planeta encontrado no banco de dados', (terminado) => {
  //   jest.spyOn(modelo, 'find')
  //   modelo.find.mockImplementation(() => Promise.resolve('Encontrado'))

  //   // expect.assertions(1)
  //   return db.obtemTodosPlanetas().then((planeta) => {
  //     expect(planeta).toBe('Encontrado')
  //     terminado()
  //   })
  // })

  // it('obtemTodosPlanetas: Planeta não encontrado no banco de dados', (terminado) => {
  //   jest.spyOn(modelo, 'find')
  //   modelo.find.mockImplementation(() => Promise.resolve({}))

  //   // expect.assertions(1)
  //   return db.obtemTodosPlanetas().catch((erro) => {
  //     expect(erro.message).toBe('Não Encontrado')
  //     terminado()
  //   })
  // })

  // it('obtemTodosPlanetas: Erro não esperado no banco de dados ao buscar por planeta', (terminado) => {
  //   jest.spyOn(modelo, 'find')
  //   modelo.find.mockImplementation(() => Promise.reject(new Error('Erro desconhecido')))

  //   // expect.assertions(1)
  //   return db.obtemTodosPlanetas().catch((erro) => {
  //     expect(erro.message).toBe('Erro desconhecido')
  //     terminado()
  //   })
  // })

  // it('obtemPorNomeOuIdPlaneta: Planeta encontrado no banco de dados', (terminado) => {
  //   jest.spyOn(modelo, 'find')
  //   modelo.find.mockImplementation(() => Promise.resolve('Encontrado'))

  //   // expect.assertions(1)
  //   return db.obtemPorNomeOuIdPlaneta('Planeta').then((planeta) => {
  //     expect(planeta).toBe('Encontrado')
  //     terminado()
  //   })
  // })

  // it('obtemPorNomeOuIdPlaneta: Planeta não encontrado no banco de dados', (terminado) => {
  //   jest.spyOn(modelo, 'find')
  //   modelo.find.mockImplementation(() => Promise.resolve({}))

  //   // expect.assertions(1)
  //   return db.obtemPorNomeOuIdPlaneta('Planeta').catch((erro) => {
  //     expect(erro.message).toBe('Não Encontrado')
  //     terminado()
  //   })
  // })

  // it('obtemPorNomeOuIdPlaneta: Erro não esperado no banco de dados ao buscar por planeta', (terminado) => {
  //   jest.spyOn(modelo, 'find')
  //   modelo.find.mockImplementation(() => Promise.reject(new Error('Erro desconhecido')))

  //   // expect.assertions(1)
  //   return db.obtemPorNomeOuIdPlaneta('Planeta').catch((erro) => {
  //     expect(erro.message).toBe('Erro desconhecido')
  //     terminado()
  //   })
  // })

  // it('adicionaPlaneta: Planeta adicionado no banco de dados', (terminado) => {
  //   jest.spyOn(modelo, 'create')
  //   modelo.create.mockImplementation(() => Promise.resolve('Adicionado'))

  //   // expect.assertions(1)
  //   return db.adicionaPlaneta('Planeta').then((retorno) => {
  //     expect(retorno).toBe('Adicionado')
  //     terminado()
  //   })
  // })

  // it('adicionaPlaneta: Erro não esperado no banco de dados ao adicionar planeta', (terminado) => {
  //   jest.spyOn(modelo, 'create')
  //   modelo.create.mockImplementation(() => Promise.reject(new Error('Erro desconhecido')))

  //   // expect.assertions(1)
  //   return db.adicionaPlaneta('Planeta').catch((erro) => {
  //     expect(erro.message).toBe('Erro desconhecido')
  //     terminado()
  //   })
  // })

  // it('removePorIdPlaneta: Remove planeta do banco de dados', (terminado) => {
  //   jest.spyOn(modelo, 'deleteOne')
  //   const dados = {}
  //   dados.n = 1
  //   modelo.deleteOne.mockImplementation(() => Promise.resolve(dados))

  //   // expect.assertions(1)
  //   return db.removePorIdPlaneta('Planeta').then((mensagem) => {
  //     expect(mensagem).toBe('removido')
  //     terminado()
  //   })
  // })

  // it('removePorIdPlaneta: Planeta não encontrado no banco de dados para remoção', (terminado) => {
  //   jest.spyOn(modelo, 'deleteOne')
  //   const dados = {}
  //   dados.n = 0
  //   modelo.deleteOne.mockImplementation(() => Promise.resolve(dados))

  //   // expect.assertions(1)
  //   return db.removePorIdPlaneta('Planeta').catch((erro) => {
  //     expect(erro.message).toBe('ID não encontrado no Banco de Dados')
  //     terminado()
  //   })
  // })

  // it('removePorIdPlaneta: Erro não esperado no banco de dados ao remover planeta', (terminado) => {
  //   jest.spyOn(modelo, 'deleteOne')
  //   modelo.deleteOne.mockImplementation(() =>
  //     Promise.reject(new Error('Erro desconhecido'))
  //   )

  //   // expect.assertions(1)
  //   return db.removePorIdPlaneta('Planeta').catch((erro) => {
  //     expect(erro.message).toBe('Erro desconhecido')
  //     terminado()
  //   })
  // })

})
