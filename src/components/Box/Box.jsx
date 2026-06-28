import React from 'react'
import './Box.scss'

const Box = ({ title, content, action }) => {
  return (
    <div className='box'>
      <div className='box__header'>
        <h2 className='box__title'>{title}</h2>
        {action}
      </div>
      <div className='box__content'>{content}</div>
    </div>
  )
}

export default Box
