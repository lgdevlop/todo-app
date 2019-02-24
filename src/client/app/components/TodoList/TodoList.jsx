import React from 'react'

import './TodoList.scss'

import TodoItem from '../../common/TodoItem'
import Button from '../../common/Button'
import Icon from '../../common/Icon'

const TodoList = 
  (
    {
      classModifier = '',
      tarefas = [], 
      handleClick = () => null,
    }
  ) => 
  (
    <div className={`container__todo-list ${classModifier}`}>
      <ul>
        {tarefas
          ? tarefas.map((todo) => (
            <div className='todo-list' key={todo._id}>
              {todo.estado === 'completado' ? <Icon icon='far fa-check-circle' visible='true'/> : <Icon/>}
              <TodoItem todo={todo} />
              {todo.estado === 'completado' ? '' : <Button icon='far fa-check-circle' handleClick={handleClick} />}
            </div>
            ))
          : ''}
      </ul>
      
    </div>
  )

export default TodoList