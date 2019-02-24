import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import TodoItem from './TodoItem'

configure({adapter: new Adapter()})

describe('<TodoItem />', () => {

  it('Renderiza a tag li do componente TodoItem', () => {

    const tarefa = {estado: 'ativo'}

    const wrapper = shallow(<TodoItem todo={tarefa} />)
    expect(wrapper.find('li.todo__list-item')).toHaveLength(1)

  })

  it('Não renderiza a tag li do componente TodoItem, quando o estado informado da tarefa é apagado', () => {

    const tarefa = {estado: 'apagado'}

    const wrapper = shallow(<TodoItem todo={tarefa} />)
    expect(wrapper.find('li.todo__list-item')).toHaveLength(0)

  })

  it('Verifica o texto da tag li do componente TodoItem', () => {

    const tarefa = {estado: 'ativo', nome: 'Meu Nome'}

    const wrapper = shallow(<TodoItem todo={tarefa} />)
    expect(wrapper.find('li.todo__list-item').text()).toEqual(tarefa.nome)

  })

  it('Renderiza a tag li do componente TodoItem, com uma classe(CSS) modificadora, quando o estado informado da tarefa é completado', () => {

    const tarefa = {estado: 'completado', nome: 'Meu Nome'}

    const wrapper = shallow(<TodoItem todo={tarefa}/>)

    // expect(wrapper.find('li.list-item--completed')).toHaveLength(1)
    expect(wrapper.find('li').hasClass('list-item--completed')).toEqual(true)

  })

})