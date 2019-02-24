import React, { useState, useEffect } from 'react'

import './Todo.scss'

import Title from '../../common/Title'
import TodoInput from '../../components/TodoInput'
import TodoList from '../../components/TodoList'
import TodoActions from '../../components/TodoActions'

import * as TodoController from './TodoController'

const Todo = () => {

  const [tarefas, setTarefas] = useState([]);
  const [tarefa, setTarefa] = useState('');
  
  useEffect(() => { 
      TodoController.obtemTodasAsTarefas(setTarefas)
    }, []
  )

  const handleClickPorEstado = (evento) => {
    if(evento.target.textContent === 'Todos') {
      TodoController.obtemTodasAsTarefas(setTarefas)
    } else {
      TodoController.obtemTarefaPorEstado(setTarefas, evento.target.textContent)
    }
  }

  const handleChangeInput = (evento) => {
    setTarefa(evento.target.value)
  }

  const handleClickInputButton = async () => {

    try {

      if(tarefa !== '') {
        const dados = {}
        dados.nome = tarefa
        dados.estado = 'ativo'
        await TodoController.adicionaTarefa(dados)
        await setTimeout(() => TodoController.obtemTodasAsTarefas(setTarefas), 200)
        await setTarefa('')
      }

    } catch(erro) {
      console.log(erro)
    }
    
  }

  const handleClickCompleteButton = async (evento) => {

    let id = ''

    if(evento.target.parentNode.previousSibling === null) {

      const nome = evento.target.parentNode.parentNode.previousSibling.textContent

      tarefas.filter((tarefa) => {
        if(tarefa.nome === nome) {
          id = tarefa._id
        }
      })

    } else {
      const nome = evento.target.parentNode.previousSibling.textContent

      tarefas.filter((tarefa) => {
        if(tarefa.nome === nome) {
          id = tarefa._id
        }
      })
    }
    try {
      await TodoController.atualizaTarefaPorId(id)
      await setTimeout(() => TodoController.obtemTodasAsTarefas(setTarefas), 200)
    } catch(erro) {
      console.log(erro)
    }

  }

  const handleClickCompletados = async () => {
    tarefas.filter(async (tarefa) => {

      if(tarefa.estado === 'completado') {
        try {
          await TodoController.removeTarefaPorId(tarefa._id)
          await setTimeout(() => TodoController.obtemTodasAsTarefas(setTarefas), 200)
        } catch(erro) {
          console.log(erro)
        }
        
      }

    })
    
  }

  return (
    <div className='container-todo'>
      <Title title='Lista de Tarefas' />
      <TodoInput handleChange={handleChangeInput} inputValue={tarefa} handleClick={handleClickInputButton} />
      <TodoList tarefas={tarefas} handleClick={handleClickCompleteButton} />
      <TodoActions handleClickPorEstado={handleClickPorEstado} handleClickCompletados={handleClickCompletados} />
    </div>
    
  )
}

export default Todo