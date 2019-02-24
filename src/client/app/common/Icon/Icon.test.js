import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Icon from './Icon'

configure({adapter: new Adapter()})

describe('<Icon />', () => {
  it('Renderiza o container do componente icon', () => {

    const wrapper = shallow(<Icon />)
    expect(wrapper.find('div.container__icon')).toHaveLength(1)

  })

  it('Renderiza o container do componente icon, com uma classe(CSS) modificadora', () => {

    const wrapper = shallow(<Icon classModifier='minha-classe'/>)

    expect(wrapper.find('div.minha-classe')).toHaveLength(1)

  })

  it('Renderiza um componente icon, com uma tag i sendo sua filha', () => {

    const wrapper = shallow(<Icon visible='true' icon='meu-icone'/>)

    expect(wrapper.find('i.meu-icone')).toHaveLength(1)
    
  })

})