import React from 'react'

import './TodoActions.scss'

import Button from '../../common/Button'

const TodoActions = 
  (
    {
      classModifier = '', 
      handleClickPorEstado = () => null,
      handleClickCompletados = () => null,
    }
  ) => 
  (
    <div className={`container__todo-actions ${classModifier}`}>
      <Button handleClick={handleClickPorEstado} title='Todos' />
      <Button handleClick={handleClickPorEstado} title='Ativo' />
      <Button handleClick={handleClickPorEstado} title='Completado' />
      <Button handleClick={handleClickCompletados} title='Limpar Completados' />
    </div>
  )

export default TodoActions