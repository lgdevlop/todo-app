const tarefasApi = require('./todos')
const db = require('../db')

describe('Testando o recurso /todos da API', () => {

  it('obtemTodasAsTarefas: Obtem todas as tarefas do banco de dados', async () => {

    const requisicao = {}
    requisicao.query = {}
    const resposta = {}

    const dados = [
      { nome: 'Minha Tarefa', estado: 'ativo' },
    ]

    resposta.json = jest.fn().mockImplementation((args) => {
      // expect(args).toBe({ nome: 'Minha Tarefa', estado: 'ativoa' })
      return args
    })

    db.obtemTodasAsTarefas = () => Promise.resolve(dados)
      
    await tarefasApi.obtemTodasAsTarefas(requisicao, resposta)
    expect(resposta.json).toBeCalledWith([{ nome: 'Minha Tarefa', estado: 'ativo' }])

  })

  it('obtemTodasAsTarefas: Obtem todas as tarefas do banco de dados por estado', async () => {

    const requisicao = {}
    requisicao.query = { estado: 'ativo' }
    const resposta = {}

    const dados = [
      { nome: 'Minha Tarefa', estado: 'ativo' },
    ]

    resposta.json = jest.fn().mockImplementation((args) => {
      // expect(args).toBe({ nome: 'Minha Tarefa', estado: 'ativoa' })
      return args
    })

    db.obtemTarefaPorEstadoOuPorId = () => Promise.resolve(dados)
      
    await tarefasApi.obtemTodasAsTarefas(requisicao, resposta)
    expect(resposta.json).toBeCalledWith([{ nome: 'Minha Tarefa', estado: 'ativo' }])

  })

  it('obtemTodasAsTarefas: Tarefa por estado não encontrada no banco de dados', async () => {

    const requisicao = {}
    requisicao.query = { estado: 'ativo' }
    const resposta = {}

    resposta.send = jest.fn()

    resposta.status = jest.fn().mockImplementation(() => {
      return resposta
    })

    db.obtemTarefaPorEstadoOuPorId = () => {throw new Error('Não Encontrada')}
      
    await tarefasApi.obtemTodasAsTarefas(requisicao, resposta)
    expect(resposta.status).toBeCalledWith(202)
    expect(resposta.send).toBeCalledWith('Não Encontrada')

  })

  it('obtemTodasAsTarefas: Erro desconhecido ao buscar tarefa no banco de dados', async () => {

    const requisicao = {}
    requisicao.query = {}
    const resposta = {}

    resposta.json = jest.fn()

    resposta.status = jest.fn().mockImplementation(() => {
      return resposta
    })

    db.obtemTodasAsTarefas = () => {throw new Error('Erro desconhecido')}
      
    await tarefasApi.obtemTodasAsTarefas(requisicao, resposta)
    expect(resposta.status).toBeCalledWith(500)
    expect(resposta.json).toBeCalledWith(Error('Erro desconhecido'))

  })

  it('obtemTarefaPorId: Obtem as tarefas do banco de dados por ID', async () => {

    const requisicao = {}
    requisicao.params = { id: 'Meu ID'}
    const resposta = {}

    const tarefa = { nome: 'Minha Tarefa', estado: 'ativo'}

    resposta.json = jest.fn()

    db.obtemTarefaPorEstadoOuPorId = () => Promise.resolve(tarefa)
      
    await tarefasApi.obtemTarefaPorId(requisicao, resposta)
    expect(resposta.json).toBeCalledWith({ nome: 'Minha Tarefa', estado: 'ativo'})

  })

  it('obtemTarefaPorId: Tarefa por ID não encontrada no banco de dados', async () => {

    const requisicao = {}
    requisicao.params = { id: 'Meu ID' }
    const resposta = {}

    resposta.send = jest.fn()

    resposta.status = jest.fn().mockImplementation(() => {
      return resposta
    })

    db.obtemTarefaPorEstadoOuPorId = () => {throw new Error('Não Encontrada')}
      
    await tarefasApi.obtemTarefaPorId(requisicao, resposta)
    expect(resposta.status).toBeCalledWith(202)
    expect(resposta.send).toBeCalledWith('Não Encontrada')

  })

  it('obtemTarefaPorId: ID informado da Tarefa inválido', async () => {

    const requisicao = {}
    requisicao.params = { id: 'Meu ID' }
    const resposta = {}

    resposta.sendStatus = jest.fn()

    db.obtemTarefaPorEstadoOuPorId = () => Promise.reject({ message: '', name: 'CastError'})
      
    await tarefasApi.obtemTarefaPorId(requisicao, resposta)
    expect(resposta.sendStatus).toBeCalledWith(400)

  })

  it('obtemTarefaPorId: Erro desconhecido no banco de dados', async () => {

    const requisicao = {}
    requisicao.params = { id: 'Meu ID' }
    const resposta = {}

    resposta.json = jest.fn()

    resposta.status = jest.fn().mockImplementation(() => {
      return resposta
    })

    db.obtemTarefaPorEstadoOuPorId = () => Promise.reject({ message: '', name: ''})
      
    await tarefasApi.obtemTarefaPorId(requisicao, resposta)
    expect(resposta.status).toBeCalledWith(500)
    expect(resposta.json).toBeCalledWith({ message: '', name: ''})

  })

  it('adicionaTarefa: Adiciona a tarefa no banco de dados', async () => {

    const requisicao = {}
    requisicao.body = { nome: 'Minha Tarefa', estado: 'ativo'}
    const resposta = {}
    const tarefa = { nome: 'Minha Tarefa', estado: 'ativo'}

    resposta.json = jest.fn()

    resposta.status = jest.fn().mockImplementation(() => {
      return resposta
    })

    db.adicionaTarefa = () => Promise.resolve(tarefa)
      
    await tarefasApi.adicionaTarefa(requisicao, resposta)
    expect(resposta.status).toBeCalledWith(201)
    expect(resposta.json).toBeCalledWith({ nome: 'Minha Tarefa', estado: 'ativo'})

  })

  it('adicionaTarefa: Erro desconhecido no banco de dados', async () => {

    const requisicao = {}
    requisicao.body = { nome: 'Minha Tarefa', estado: 'ativo'}
    const resposta = {}
    // const tarefa = { nome: 'Minha Tarefa', estado: 'ativo'}

    resposta.json = jest.fn()

    resposta.status = jest.fn().mockImplementation(() => {
      return resposta
    })

    db.adicionaTarefa = () => Promise.reject('Meu Erro')
      
    await tarefasApi.adicionaTarefa(requisicao, resposta)
    expect(resposta.status).toBeCalledWith(500)
    expect(resposta.json).toBeCalledWith('Meu Erro')

  })

  it('atualizaTarefaPorId: Atualiza a tarefa por ID no banco de dados', async () => {

    const requisicao = {}
    requisicao.body = { estado: 'ativo', id: 'Meu ID' }
    // requisicao.params = { id: 'Meu ID' }
    const resposta = {}
    const tarefa = { nome: 'Minha Tarefa', estado: 'ativo' }

    resposta.json = jest.fn()

    resposta.status = jest.fn().mockImplementation(() => {
      return resposta
    })

    db.atualizaTarefaPorId = () => Promise.resolve(tarefa)
      
    await tarefasApi.atualizaTarefaPorId(requisicao, resposta)
    expect(resposta.status).toBeCalledWith(200)
    expect(resposta.json).toBeCalledWith({nome: 'Minha Tarefa', estado: 'ativo'})

  })

  it('atualizaTarefaPorId: Tarefa não encontrada para ser atualizada no banco de dados', async () => {

    const requisicao = {}
    requisicao.body = { estado: 'ativo' }
    requisicao.params = { id: 'Meu ID' }
    const resposta = {}

    resposta.send = jest.fn()

    resposta.status = jest.fn().mockImplementation(() => {
      return resposta
    })

    db.atualizaTarefaPorId = () => { throw new Error('Não Encontrada') }
      
    await tarefasApi.atualizaTarefaPorId(requisicao, resposta)
    expect(resposta.status).toBeCalledWith(202)
    expect(resposta.send).toBeCalledWith('Não Encontrada')

  })

  it('atualizaTarefaPorId: ID da Tarefa inválido', async () => {

    const requisicao = {}
    requisicao.body = { estado: 'ativo' }
    requisicao.params = { id: 'Meu ID' }
    const resposta = {}

    resposta.sendStatus = jest.fn()

    // resposta.status = jest.fn().mockImplementation(() => {
    //   return resposta
    // })

    db.atualizaTarefaPorId = () => Promise.reject({ message: '', name: 'CastError'})

    await tarefasApi.atualizaTarefaPorId(requisicao, resposta)
    expect(resposta.sendStatus).toBeCalledWith(400)
    // expect(resposta.send).toBeCalledWith('Não Encontrada')

  })

  it('atualizaTarefaPorId: Erro desconhecido no banco de dados', async () => {

    const requisicao = {}
    requisicao.body = { estado: 'ativo' }
    requisicao.params = { id: 'Meu ID' }
    const resposta = {}

    resposta.json = jest.fn()

    resposta.status = jest.fn().mockImplementation(() => {
      return resposta
    })

    db.atualizaTarefaPorId = () => Promise.reject({ message: '', name: ''})

    await tarefasApi.atualizaTarefaPorId(requisicao, resposta)
    expect(resposta.status).toBeCalledWith(500)
    expect(resposta.json).toBeCalledWith({ message: '', name: ''})

  })

  // --------------------------------------------------------- //

  it('removeTarefaPorId: Remove a tarefa pelo ID informado do banco de dados', async () => {

    const requisicao = {}
    requisicao.params = { id: 'Meu ID' }
    const resposta = {}
    const tarefa = { nome: 'Minha Tarefa', estado: 'ativo'}

    resposta.send = jest.fn()

    resposta.status = jest.fn().mockImplementation(() => {
      return resposta
    })

    db.removeTarefaPorId = () => Promise.resolve(tarefa)
      
    await tarefasApi.removeTarefaPorId(requisicao, resposta)
    expect(resposta.status).toBeCalledWith(200)
    expect(resposta.send).toBeCalledWith({ nome: 'Minha Tarefa', estado: 'ativo'})

  })

  it('removeTarefaPorId: Tarefa pelo ID para ser removida não encontrada no banco de dados', async () => {

    const requisicao = {}
    requisicao.params = { id: 'Meu ID' }
    const resposta = {}

    resposta.send = jest.fn()

    resposta.status = jest.fn().mockImplementation(() => {
      return resposta
    })

    db.removeTarefaPorId = () => {throw new Error('ID não encontrado no Banco de Dados')}
      
    await tarefasApi.removeTarefaPorId(requisicao, resposta)
    expect(resposta.status).toBeCalledWith(202)
    expect(resposta.send).toBeCalledWith('ID não encontrado no Banco de Dados')

  })

  it('removeTarefaPorId: ID informado da tarefa inválido para ser removido', async () => {

    const requisicao = {}
    requisicao.params = { id: 'Meu ID' }
    const resposta = {}

    resposta.sendStatus = jest.fn()

    db.removeTarefaPorId = () => Promise.reject({ message: '', name: 'CastError'})
      
    await tarefasApi.removeTarefaPorId(requisicao, resposta)
    expect(resposta.sendStatus).toBeCalledWith(400)

  })

  it('removeTarefaPorId: Erro desconhecido do banco de dados', async () => {

    const requisicao = {}
    requisicao.params = { id: 'Meu ID' }
    const resposta = {}

    resposta.json = jest.fn()

    resposta.status = jest.fn().mockImplementation(() => {
      return resposta
    })

    db.removeTarefaPorId = () => Promise.reject({ message: '', name: ''})
      
    await tarefasApi.removeTarefaPorId(requisicao, resposta)
    expect(resposta.status).toBeCalledWith(500)
    expect(resposta.json).toBeCalledWith({ message: '', name: ''})

  })

  it('verboHTTPNaoSuportado: Utilizado como resposta a requisições para outros verbos HTTP não suportados pela API', async () => {

    const requisicao = {}
    requisicao.params = { id: 'Meu ID' }
    const resposta = {}

    resposta.sendStatus = jest.fn()

    await tarefasApi.verboHTTPNaoSuportado(requisicao, resposta)
    expect(resposta.sendStatus).toBeCalledWith(400)

  })

})