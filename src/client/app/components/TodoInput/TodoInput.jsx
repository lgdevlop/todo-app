import React from 'react'

import './TodoInput.scss'

import InputText from '../../common/InputText'
import Button from '../../common/Button'

// const handleChange = (value) => inputValue = value
const TodoInput = 
  (
    {
      inputValue = '', 
      classModifier = '', 
      handleChange = (value) => {inputValue = value},
      handleClick = () => null,
    }
  ) => 
  (
    <div className={`container__todo-input ${classModifier}`}>
      <InputText handleChange={handleChange} inputValue={inputValue}/>
      <Button icon='fas fa-check' handleClick={handleClick}/>
    </div>
  )

export default TodoInput