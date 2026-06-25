import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { navItems } from '../../data/navigation'
import './Navigation.scss'

const Navigation = ({ collapsed, onNavigate }) => {
  const location = useLocation()
  const activeId = location.hash ? location.hash.slice(1) : 'about'

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    onNavigate?.()
  }

  return (
    <nav className={`navigation${collapsed ? ' navigation--collapsed' : ''}`}>
      <ul className='navigation__list'>
        {navItems.map(({ id, label, icon }) => (
          <li className='navigation__item' key={id}>
            <Link
              to={`/inner#${id}`}
              className={activeId === id ? 'active' : ''}
              onClick={() => scrollToSection(id)}
              title={collapsed ? label : undefined}
            >
              <FontAwesomeIcon icon={icon} className='navigation__icon' />
              <span className='navigation__label'>{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
