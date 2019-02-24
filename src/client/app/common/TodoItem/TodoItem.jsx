import React from 'react'

import './TodoItem.scss'

const TodoItem = 
  (
    {
      todo = {nome: '', estado: 'apagado'}, 
    }
  ) => 
  (
    todo.estado !== 'apagado' ? 
    (
      <li className={`todo__list-item ${todo.estado === 'completado' ? 'list-item--completed' : ''}`}>
        {todo.nome}
      </li>
    )
    : ''
  )

export default TodoItem