import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import PhotoBox from '../PhotoBox/PhotoBox'
import Navigation from '../Navigation/Navigation'
import Button from '../Button/Button'
import { profile } from '../../data/profile'
import './Panel.scss'

const Panel = ({ isOpen, collapsed, onToggleCollapse, onNavigate }) => {
  return (
    <aside
      className={`panel${isOpen ? ' panel--open' : ''}${collapsed ? ' panel--collapsed' : ''}`}
    >
      <button
        type='button'
        className='panel__toggle'
        onClick={onToggleCollapse}
        aria-label='Toggle sidebar'
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <div className='panel__content'>
        <PhotoBox variant='compact' collapsed={collapsed} {...profile} />
        <Navigation collapsed={collapsed} onNavigate={onNavigate} />
        <Link to='/' onClick={onNavigate} className='panel__back'>
          <Button icon={faArrowLeft} text='Go back' collapsed={collapsed} />
        </Link>
      </div>
    </aside>
  )
}

export default Panel
