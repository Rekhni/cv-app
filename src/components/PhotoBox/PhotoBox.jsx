import React from 'react'
import './PhotoBox.scss'

const PhotoBox = ({ name, title, description, avatar, variant = 'full', collapsed = false }) => {
  return (
    <div className={`photo-box photo-box--${variant}${collapsed ? ' photo-box--collapsed' : ''}`}>
        <img className='photo-box__avatar' src={avatar} alt={name} />
        <h2 className='photo-box__name'>{name}</h2>
        <p className='photo-box__title'>{title}</p>
        <p className='photo-box__description'>{description}</p>
    </div>
  )
}

export default PhotoBox
