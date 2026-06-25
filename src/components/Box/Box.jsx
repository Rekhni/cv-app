import React from 'react'
import './Box.scss'

const Box = ({ title, content }) => {
  return (
    <div className='box'>
        <h2 className='box__title'>{title}</h2>
        <div className='box__content'>{content}</div>
    </div>
  )
}

export default Box
