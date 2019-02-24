import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import InputText from './InputText'

configure({adapter: new Adapter()})

describe('<InputText />', () => {

  it('Renderiza o container do componente input text', () => {

    const wrapper = shallow(<InputText />)
    expect(wrapper.find('div.container__input-text')).toHaveLength(1)

  })

  it('Renderiza o container do componente input text, com uma classe(CSS) modificadora', () => {

    const wrapper = shallow(<InputText classModifier='minha-classe'/>)

    expect(wrapper.find('div.minha-classe')).toHaveLength(1)

  })

  it('Renderiza o container do input text, com uma tag input sendo sua filha', () => {

    const wrapper = shallow(<InputText />)

    expect(wrapper.find('input')).toHaveLength(1)
    
  })

  it('Verifica o valor do componente input text', () => {

    const valorInput = 'Meu Valor'

    const wrapper = shallow(<InputText inputValue={valorInput}/>)

    expect(wrapper.find('input').props().value).toEqual(valorInput)

  })

  it('Testa o uso do evento de mudança de valor no input', () => {

    const handleChange = jest.fn()

    const wrapper = shallow(<InputText handleChange={handleChange}/>)
    wrapper.find('input').simulate('change')

    // expect(handleChange.mock.calls.length).toEqual(1)
    // expect(handleChange.mock.calls.length).toBe(1)
    expect(handleChange).toBeCalled()
    
  })

})