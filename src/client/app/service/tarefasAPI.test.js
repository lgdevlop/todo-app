import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import axios from 'axios'
import * as TarefasAPI from './tarefasAPI'

configure({adapter: new Adapter()})

describe('<TarefasAPI />', () => {

  it('Testa o sucesso do método obtemTodasAsTarefas', async () => {

    axios.get = () => Promise.resolve('Meus Dados')

    const dados = await TarefasAPI.obtemTodasAsTarefas()

    expect(dados).toBe('Meus Dados')

  })

  it('Testa o erro do método obtemTodasAsTarefas', async () => {

    axios.get = () => Promise.reject('Meu Erro')

    try {
      await TarefasAPI.obtemTodasAsTarefas()
    } catch(erro) {
      expect(erro).toBe('Meu Erro')
    }

  })

  it('Testa o sucesso do método obtemTarefaPorEstado', async () => {

    axios.get = () => Promise.resolve('Meus Dados')

    const dados = await TarefasAPI.obtemTarefaPorEstado('Meus Dados')

    expect(dados).toBe('Meus Dados')

  })

  it('Testa o erro do método obtemTarefaPorEstado', async () => {

    axios.get = () => Promise.reject('Meu Erro')

    try {
      await TarefasAPI.obtemTarefaPorEstado('Meu Erro')
    } catch(erro) {
      expect(erro).toBe('Meu Erro')
    }

  })

  it('adicionaTarefa: Testa o sucesso do método', async () => {

    const tarefa = {nome: 'Minha Tarefa', estado: 'Meu Estado'}

    axios.post = () => Promise.resolve(tarefa)

    const dados = await TarefasAPI.adicionaTarefa(tarefa)

    expect(dados).toBe(tarefa)

  })

  it('adicionaTarefa: Testa o erro do método', async () => {

    axios.post = () => Promise.reject('Meu Erro')

    try {
      await TarefasAPI.adicionaTarefa('Meu Erro')
    } catch(erro) {
      expect(erro).toBe('Meu Erro')
    }

  })

  it('atualizaTarefaPorId: Testa o sucesso do método', async () => {

    const meuID = 'Meu ID'
    const tarefa = {nome: 'Minha Tarefa', estado: 'Meu Estado'}

    axios.put = () => Promise.resolve(tarefa)

    const dados = await TarefasAPI.atualizaTarefaPorId(meuID)

    expect(dados).toBe(tarefa)

  })

  it('atualizaTarefaPorId: Testa o erro do método', async () => {

    axios.put = () => Promise.reject('Meu Erro')

    try {
      await TarefasAPI.atualizaTarefaPorId('Meu Erro')
    } catch(erro) {
      expect(erro).toBe('Meu Erro')
    }

  })

  it('removeTarefaPorId: Testa o sucesso do método', async () => {

    const meuID = 'Meu ID'
    const estado = 'removido'

    axios.delete = () => Promise.resolve(estado)

    const dados = await TarefasAPI.removeTarefaPorId(meuID)

    expect(dados).toBe(estado)

  })

  it('removeTarefaPorId: Testa o erro do método', async () => {

    axios.delete = () => Promise.reject('Meu Erro')

    try {
      await TarefasAPI.removeTarefaPorId('Meu Erro')
    } catch(erro) {
      expect(erro).toBe('Meu Erro')
    }

  })

})