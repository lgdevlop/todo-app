import React, { Component, Fragment } from 'react'

// import Title from "./common/Title"
import Todo from './layout/Todo'

import './App.scss'

// <Title title='Lista de Tarefas'/>

class App extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Fragment>
        <Todo />
      </Fragment>
    )
  }

}

export default App