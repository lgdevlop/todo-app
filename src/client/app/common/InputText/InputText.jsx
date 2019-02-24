import React from 'react'

import './InputText.scss'

// value={inputValue}
const InputText = 
  (
    {
      inputValue = '', 
      classModifier = '', 
      handleChange = (inputValue) => inputValue
    }
  ) => 
  (
    <div className={`container__input-text ${classModifier}`}>
      <input className='' id='tarefa' placeholder='Adicione uma tarefa' onChange={handleChange} value={inputValue}/>
    </div>
  )

export default InputText