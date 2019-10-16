import React, { Component, Fragment } from 'react'

// import Title from "./common/Title"
import Todo from './layout/Todo'

import './App.scss'
import { askNotificationPermission, isNotificationSupported, isServiceWorkerSupported, registerServiceWorker } from './helpers/pwa'

// <Title title='Lista de Tarefas'/>

class App extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('isServiceWorkerSupported: ', isServiceWorkerSupported())
    console.log('isNotificationSupported: ', isNotificationSupported())
    isServiceWorkerSupported() && registerServiceWorker().then(console.log('Service Worker registrado!'))
    askNotificationPermission()
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