import React from 'react'

import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Todo from './Todo'

import Title from '../../common/Title'
import TodoInput from '../../components/TodoInput'
import TodoList from '../../components/TodoList'
import TodoActions from '../../components/TodoActions'

configure({adapter: new Adapter()})

describe('<Todo />', () => {

  it('Renderiza o container do componente Todo', () => {

    // const tarefas = [{estado: 'ativo', nome: 'Primeira Tarefa', _id: 'Meu ID'}]

    const wrapper = shallow(<Todo />)
    expect(wrapper.exists('div.container-todo')).toEqual(true)

  })

  it('Renderiza o container do componente Title', () => {

    // const tarefas = [{estado: 'ativo', nome: 'Primeira Tarefa', _id: 'Meu ID'}]

    const wrapper = mount(<Todo />)
    expect(wrapper.children().exists('div.container__title')).toEqual(true)

  })

  it('Verifica se o componente Title, recebeu a prop title', () => {

    const wrapper = mount(<Todo />)
    expect(wrapper.find(Title).props().title).toEqual('Lista de Tarefas')

  })

  it('Renderiza o container do componente TodoInput', () => {

    const wrapper = mount(<Todo />)
    expect(wrapper.exists(TodoInput)).toEqual(true)

  })

  it('Verifica se o componente TodoInput, recebeu a prop handleChange', () => {

    const wrapper = mount(<Todo />)
    expect(wrapper.find(TodoInput).prop('handleChange')).toBeInstanceOf(Function)

  })

  it('Verifica se o componente TodoInput, recebeu a prop handleClick', () => {

    const wrapper = mount(<Todo />)
    expect(wrapper.find(TodoInput).prop('handleClick')).toBeInstanceOf(Function)

  })

  it('Verifica se o componente TodoInput, recebeu a prop inputValue', () => {

    const wrapper = mount(<Todo />)
    // expect(wrapper.find(TodoInput).prop('inputValue')).toBeInstanceOf(String)
    expect(wrapper.find(TodoInput).prop('inputValue')).toBeDefined()

  })

  it('Renderiza o container do componente TodoList', () => {

    const wrapper = mount(<Todo />)
    expect(wrapper.exists(TodoList)).toEqual(true)

  })

  it('Verifica se o componente TodoList, recebeu a prop tarefas', () => {

    const wrapper = mount(<Todo />)
    // expect(wrapper.find(TodoList).prop('tarefas')).toBeDefined()
    expect(wrapper.find(TodoList).prop('tarefas')).toBeInstanceOf(Array)

  })

  it('Verifica se o componente TodoList, recebeu a prop handleClick', () => {

    const wrapper = mount(<Todo />)
    expect(wrapper.find(TodoList).prop('handleClick')).toBeInstanceOf(Function)

  })

  it('Renderiza o container do componente TodoActions', () => {

    const wrapper = mount(<Todo />)
    expect(wrapper.exists(TodoActions)).toEqual(true)

  })

  it('Verifica se o componente TodoActions, recebeu a prop handleClickPorEstado', () => {

    const wrapper = mount(<Todo />)
    expect(wrapper.find(TodoActions).prop('handleClickPorEstado')).toBeInstanceOf(Function)

  })

  it('Verifica se o componente TodoActions, recebeu a prop handleClickCompletados', () => {

    const wrapper = mount(<Todo />)
    expect(wrapper.find(TodoActions).prop('handleClickCompletados')).toBeInstanceOf(Function)

  })

})