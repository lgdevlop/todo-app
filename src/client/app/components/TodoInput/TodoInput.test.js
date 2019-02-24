import React from 'react'

import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import TodoInput from './TodoInput'
import Button from '../../common/Button'
import InputText from '../../common/InputText'

configure({adapter: new Adapter()})

describe('<TodoInput />', () => {

  it('Renderiza o container do componente TodoInput', () => {

    const wrapper = shallow(<TodoInput />)
    expect(wrapper.find('div.container__todo-input')).toHaveLength(1)

  })

  it('Renderiza o container do componente TodoInput, com uma classe(CSS) modificadora', () => {

    const classeModificadora = 'minha-classe'

    const wrapper = shallow(<TodoInput classModifier={classeModificadora}/>)

    // expect(wrapper.find('div.minha-classe')).toHaveLength(1)
    expect(wrapper.find('div').hasClass('minha-classe')).toEqual(true)

  })

  it('Verifica se foi renderizado o componente do tipo InputText no container do componente TodoInput', () => {

    const wrapper = shallow(<TodoInput />)
    expect(wrapper.find(InputText)).toHaveLength(1)

  })

  it('Verifica se foi renderizado o componente do tipo Button no container do componente TodoInput', () => {

    const wrapper = shallow(<TodoInput />)
    expect(wrapper.find(Button)).toHaveLength(1)

  })

  it('Verifica se a prop handleChange foi passada para o componente filho InputText de TodoInput', () => {

    const handleChange = () => null

    const wrapper = mount(<TodoInput handleChange={handleChange}/>)

    expect(wrapper.find('input').props().onChange).toEqual(handleChange)
    
  })

  it('Verifica se a prop inputValue foi passada para o componente filho InputText de TodoInput', () => {

    const inputValue = 'Meu Valor'

    const wrapper = mount(<TodoInput inputValue={inputValue}/>)

    expect(wrapper.find('input').props().value).toEqual(inputValue)
    
  })

  it('Verifica se a prop handleClick foi passada para o componente filho Button de TodoInput', () => {

    const handleClick = () => null

    const wrapper = mount(<TodoInput handleClick={handleClick}/>)

    expect(wrapper.find('button').props().onClick).toEqual(handleClick)
    
  })

})