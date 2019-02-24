import React from 'react'

import './Title.scss'

const Title = ({title = '', classModifier = ''}) => (
  <div className={`container__title ${classModifier}`}>
    <h1>
      {title}
    </h1>
  </div>
)

export default Title