import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Title from './Title'

configure({adapter: new Adapter()})

describe('<Title />', () => {

  it('Renderiza o container do componente title', () => {

    const wrapper = shallow(<Title />)
    expect(wrapper.find('div.container__title')).toHaveLength(1)

  })

  it('Renderiza o container do componente title, com uma classe(CSS) modificadora', () => {

    const wrapper = shallow(<Title classModifier='minha-classe'/>)

    expect(wrapper.find('div.minha-classe')).toHaveLength(1)

  })

  it('Renderiza o container do title, com uma tag h1 sendo sua filha', () => {

    const wrapper = shallow(<Title />)

    expect(wrapper.find('h1')).toHaveLength(1)
    
  })

  it('Verifica o texto da tag h1 do componente title', () => {

    const valorH1 = 'Meu Valor'

    const wrapper = shallow(<Title title={valorH1}/>)

    expect(wrapper.find('h1').text()).toEqual(valorH1)

  })

})