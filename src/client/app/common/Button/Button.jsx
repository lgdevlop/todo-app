import React from 'react'

import './Button.scss'

const Button = 
  (
    {
      classModifier = '', 
      handleClick = () => null,
      icon = '',
      title = '',
    }
  ) => 
  (
    <div className={`container__button ${classModifier}`}>
      <button className='' type='button' onClick={handleClick}>
        {icon !== '' ? <i className={icon}></i> : ''}
        {title}
      </button>
    </div>
  )

export default Button