import React from 'react'

import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import TodoList from './TodoList'

configure({adapter: new Adapter()})

describe('<TodoList />', () => {

  it('Renderiza o container do componente TodoList', () => {

    const tarefas = [{estado: 'ativo', nome: 'Primeira Tarefa', _id: 'Meu ID'}]

    const wrapper = shallow(<TodoList tarefas={tarefas} />)
    expect(wrapper.find('div.container__todo-list')).toHaveLength(1)

  })

  it('Renderiza o container do componente TodoList, com uma classe(CSS) modificadora', () => {

    const tarefas = [{estado: 'ativo', nome: 'Primeira Tarefa', _id: 'Meu ID'}]

    const classeModificadora = 'minha-classe'

    const wrapper = shallow(<TodoList tarefas={tarefas} classModifier={classeModificadora}/>)

    // expect(wrapper.find('div.minha-classe')).toHaveLength(1)
    expect(wrapper.find('div.container__todo-list').hasClass('minha-classe')).toEqual(true)

  })

  it('Verifica que o container dos itens da lista do componente TodoList, não foram renderizados, por falta de ser passado por props a lista de tarefas', () => {

    const wrapper = mount(<TodoList />)

    expect(wrapper.find('div.todo-list')).toHaveLength(0)

  })

  it('Verifica que o container dos itens da lista do componente TodoList, foi renderizado, por ser passado por props a lista de tarefas', () => {

    const tarefas = [{estado: 'ativo', nome: 'Primeira Tarefa', _id: 'Meu ID'}]

    const wrapper = mount(<TodoList tarefas={tarefas} />)

    expect(wrapper.find('div.todo-list')).toHaveLength(1)

  })

  it('Verifica que o componente TodoList, recebeu a prop tarefas', () => {

    const tarefas = [{estado: 'ativo', nome: 'Primeira Tarefa', _id: 'Meu ID'}]

    const wrapper = mount(<TodoList tarefas={tarefas} />)

    expect(wrapper.props().tarefas).toEqual(tarefas)

  })

  it('Verifica que o componente Icon foi renderizado, por ser passado por props o estado da tarefa como completado', () => {

    const tarefas = [{estado: 'completado', nome: 'Primeira Tarefa'}]

    const wrapper = mount(<TodoList tarefas={tarefas} />)
    
    expect(wrapper.find('div.todo-list').children().first().children().exists('i')).toEqual(true)

  })

  it('Verifica que o componente Icon, não foi renderizado, por ser passado por props o estado da tarefa como ativo', () => {

    const tarefas = [{estado: 'ativo', nome: 'Primeira Tarefa'}]

    const wrapper = mount(<TodoList tarefas={tarefas} />)
    
    expect(wrapper.find('div.todo-list').children().first().children().exists('i')).toEqual(false)

  })

  it('Verifica que o componente TodoItem foi renderizado', () => {

    const tarefas = [{estado: 'ativo', nome: 'Primeira Tarefa', _id: 'Meu ID'}]

    const wrapper = mount(<TodoList tarefas={tarefas} />)
    
    expect(wrapper.exists('.todo__list-item')).toEqual(true)

  })

  it('Verifica que o componente Button foi renderizado, por ser passado por props o estado da tarefa como ativo', () => {

    const tarefas = [{estado: 'ativo', nome: 'Primeira Tarefa', _id: 'Meu ID'}]

    const wrapper = mount(<TodoList tarefas={tarefas} />)
    
    expect(wrapper.find('div.todo-list').children().last().exists('.container__button')).toEqual(true)

  })

  it('Verifica que o componente Button não foi renderizado, por ser passado por props o estado da tarefa como completado', () => {

    const tarefas = [{estado: 'completado', nome: 'Primeira Tarefa', _id: 'Meu ID'}]

    const wrapper = mount(<TodoList tarefas={tarefas} />)
    
    expect(wrapper.find('div.todo-list').children().last().exists('.container__button')).toEqual(false)

  })

})