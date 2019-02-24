import React from 'react'

import './Icon.scss'

const Icon = 
  (
    {
      classModifier = '', 
      visible = false,
      icon = ''
    }
  ) => 
  (
    <div className={`container__icon ${classModifier}`}>
      {visible ? <i className={icon}></i> : ''}
      {/* <i className={icon}></i> */}
    </div>
  )

export default Icon