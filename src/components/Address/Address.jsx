import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { selectContacts, loadContacts } from '../../features/contacts/contactsSlice'
import { useDispatch, useSelector } from 'react-redux'
import './Address.scss'

const linkProps = (external) =>
  external ? { target: '_blank', rel: 'noopener noreferrer' } : {}

const Address = () => {
  const dispatch = useDispatch()
  const contactsData = useSelector(selectContacts)

  useEffect(() => {
    dispatch(loadContacts())
  }, [dispatch])

  return (
    <ul className='address__list'>
      {contactsData.map((contact) => (
        <li className='address__item' key={contact.id}>
          <FontAwesomeIcon icon={contact.icon} className='address__icon' />
          <div className='address__content'>
            <a className='address__title' href={contact.href} {...linkProps(contact.external)}>
              {contact.title}
            </a>
            {contact.subtitle && (
              <a
                className='address__subtitle'
                href={contact.href}
                {...linkProps(contact.external)}
              >
                {contact.subtitle}
              </a>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Address
