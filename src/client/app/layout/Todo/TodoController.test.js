import * as TodoController from './TodoController'
import * as tarefasAPI from '../../service/tarefasAPI'

describe('TodoController:', () => {

  it('obtemTodasAsTarefas: Tarefas encontradas no banco de dados', () => {

    const dados = { data: 'Encontrado' }

    tarefasAPI.obtemTodasAsTarefas = () => {
      return Promise.resolve(dados)
    }

    const setTarefas = (dado) => {
      expect(dado).toBe('Encontrado')
    }

    TodoController.obtemTodasAsTarefas(setTarefas)

  })

  it('obtemTodasAsTarefas: Tarefas não encontradas no banco de dados', () => {

    const dados = { data: 'Não Encontrada' }

    tarefasAPI.obtemTodasAsTarefas = () => {
      return Promise.resolve(dados)
    }

    const setTarefas = (dado) => {
      // expect(dado).toBeInstanceOf(Array)
      expect(dado).toEqual([])
    }

    TodoController.obtemTodasAsTarefas(setTarefas)

  })

  it('obtemTarefaPorEstado: Tarefas encontradas no banco de dados por estado', () => {

    const dados = { data: 'Encontrado' }

    tarefasAPI.obtemTarefaPorEstado = () => {
      return Promise.resolve(dados)
    }

    const setTarefas = (dado) => {
      expect(dado).toBe('Encontrado')
    }

    TodoController.obtemTarefaPorEstado(setTarefas, 'ativo')

  })

  it('obtemTarefaPorEstado: Tarefas não encontradas no banco de dados por estado', () => {

    const dados = { data: 'Não Encontrada' }

    tarefasAPI.obtemTarefaPorEstado = () => {
      return Promise.resolve(dados)
    }

    const setTarefas = (dado) => {
      // expect(dado).toBeInstanceOf(Array)
      expect(dado).toEqual([])
    }

    TodoController.obtemTarefaPorEstado(setTarefas, 'ativo')

  })

  it('adicionaTarefa: Adiciona tarefa no banco de dados', () => {

    const tarefa = { nome: 'Minha Tarefa', estado: 'ativo' }

    tarefasAPI.adicionaTarefa = jest.fn().mockImplementation((dados) => {
      return dados
    })

    TodoController.adicionaTarefa(tarefa)
    expect(tarefasAPI.adicionaTarefa).toHaveBeenCalledWith({ nome: 'Minha Tarefa', estado: 'ativo' })

  })

  it('atualizaTarefaPorId: Atualiza tarefa por ID no banco de dados', () => {

    const ID = 'Meu ID'

    tarefasAPI.atualizaTarefaPorId = jest.fn().mockImplementation((dados) => {
      // expect(dados).toEqual({ nome: 'Minha Tarefa', estado: 'ativo' })
      return dados
    })

    TodoController.atualizaTarefaPorId(ID)
    expect(tarefasAPI.atualizaTarefaPorId).toHaveBeenCalledWith('Meu ID')

  })

  it('removeTarefaPorId: Remove tarefa por ID banco de dados', () => {

    const ID = 'Meu ID'

    tarefasAPI.removeTarefaPorId = jest.fn().mockImplementation((dados) => {
      // expect(dados).toEqual({ nome: 'Minha Tarefa', estado: 'ativo' })
      return dados
    })

    TodoController.removeTarefaPorId(ID)
    expect(tarefasAPI.removeTarefaPorId).toHaveBeenCalledWith('Meu ID')

  })

})