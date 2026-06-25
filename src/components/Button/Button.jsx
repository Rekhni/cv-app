import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Button.scss'

const Button = ({ icon, text, collapsed = false }) => {
  return (
    <button className={`button${collapsed ? ' button--collapsed' : ''}`} type="button">
        {icon && <FontAwesomeIcon icon={icon} className='button__icon' />}
        {!collapsed && text}
    </button>
  )
}

export default Button
