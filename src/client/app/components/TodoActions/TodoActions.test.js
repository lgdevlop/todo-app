import React from 'react'

import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import TodoActions from './TodoActions'
import Button from '../../common/Button'

configure({adapter: new Adapter()})

describe('<TodoActions />', () => {

  it('Renderiza o container do componente TodoActions', () => {

    const wrapper = shallow(<TodoActions />)
    expect(wrapper.find('div.container__todo-actions')).toHaveLength(1)

  })

  it('Renderiza o container do componente TodoActions, com uma classe(CSS) modificadora', () => {

    const classeModificadora = 'minha-classe'

    const wrapper = shallow(<TodoActions classModifier={classeModificadora}/>)

    // expect(wrapper.find('div.minha-classe')).toHaveLength(1)
    expect(wrapper.find('div').hasClass('minha-classe')).toEqual(true)

  })

  it('Verifica se foi renderizado quatro componentes do tipo Button no container do componente TodoActions', () => {

    const wrapper = shallow(<TodoActions />)
    expect(wrapper.find(Button)).toHaveLength(4)

  })

  it('Verifica se a prop handleClickPorEstado foi passada para o primeiro componente filho de TodoActions', () => {

    const handleClickPorEstado = () => null

    const wrapper = mount(<TodoActions handleClickPorEstado={handleClickPorEstado}/>)

    expect(wrapper.find('button').first().props().onClick).toEqual(handleClickPorEstado)
    
  })

  it('Verifica se a prop handleClickPorEstado foi passada para o segundo componente filho de TodoActions', () => {

    const handleClickPorEstado = () => null

    const wrapper = mount(<TodoActions handleClickPorEstado={handleClickPorEstado}/>)

    expect(wrapper.find('button').at(1).props().onClick).toEqual(handleClickPorEstado)
    
  })

  it('Verifica se a prop handleClickPorEstado foi passada para o terceiro componente filho de TodoActions', () => {

    const handleClickPorEstado = () => null

    const wrapper = mount(<TodoActions handleClickPorEstado={handleClickPorEstado}/>)

    expect(wrapper.find('button').at(2).props().onClick).toEqual(handleClickPorEstado)
    
  })

  it('Verifica se a prop handleClickCompletados foi passada para o último componente filho de TodoActions', () => {

    const handleClickCompletados = () => null

    const wrapper = mount(<TodoActions handleClickCompletados={handleClickCompletados}/>)

    expect(wrapper.find('button').last().props().onClick).toEqual(handleClickCompletados)
    
  })

  

})