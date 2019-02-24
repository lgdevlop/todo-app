import React from 'react'
// import ReactDOM from 'react-dom'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Button from './Button'

configure({adapter: new Adapter()})

describe('<Button />', () => {
  it('Renderiza o container do componente button', (terminado) => {
    // const button = '<div class=\"container__button \"><button class=\"\" type=\"button\"></button></div>'
    // const div = document.createElement('div')
    // ReactDOM.render(<Button />, div)
    // expect(div.innerHTML).toContain(button)

    // const button = () => '<div class=\"container__button \"><button class=\"\" type=\"button\"></button></div>'

    const wrapper = shallow(<Button />)
    expect(wrapper.find('div.container__button')).toHaveLength(1)

    terminado()
  })

  it('Renderiza o container do componente button, com uma classe(CSS) modificadora', (terminado) => {

    const wrapper = shallow(<Button classModifier='minha-classe'/>)

    expect(wrapper.find('div.minha-classe')).toHaveLength(1)
    terminado()

  })

  it('Renderiza um componente button, com uma tag i sendo sua filha', (terminado) => {

    const wrapper = shallow(<Button icon='meu-icone'/>)

    expect(wrapper.find('i.meu-icone')).toHaveLength(1)
    terminado()
    
  })

  it('Renderiza um componente button, com um título', (terminado) => {

    const tituloBotao = 'meu-titulo'

    const wrapper = shallow(<Button title={tituloBotao}/>)

    expect(wrapper.find('button').text()).toEqual(tituloBotao)
    terminado()

  })

  it('Testa o uso do evento de click no botão', (terminado) => {

    const handleClick = jest.fn()

    const wrapper = shallow(<Button handleClick={handleClick}/>)
    wrapper.find('button').simulate('click')

    // expect(handleClick.mock.calls.length).toEqual(1)
    // expect(handleClick.mock.calls.length).toBe(1)
    expect(handleClick).toBeCalled()
    terminado()
    
  })

})