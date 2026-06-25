import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faSkype } from '@fortawesome/free-brands-svg-icons'
import './Address.scss'

const contacts = [
  { icon: faPhone, title: '500 342 242', href: 'tel:500342242', external: false },
  { icon: faEnvelope, title: 'office@kamsolutions.pl', href: 'mailto:office@kamsolutions.pl', external: false },
  {
    icon: faTwitter,
    title: 'Twitter',
    subtitle: 'https://twitter.com/wordpress',
    href: 'https://twitter.com/wordpress',
    external: true
  },
  {
    icon: faFacebook,
    title: 'Facebook',
    subtitle: 'https://www.facebook.com/facebook',
    href: 'https://www.facebook.com/facebook',
    external: true
  },
  {
    icon: faSkype,
    title: 'Skype',
    subtitle: 'kamsolutions.pl',
    href: 'skype:kamsolutions.pl',
    external: false
  }
]

const linkProps = (external) =>
  external ? { target: '_blank', rel: 'noopener noreferrer' } : {}

const Address = () => {
  return (
    <ul className='address__list'>
      {contacts.map((contact, index) => (
        <li className='address__item' key={index}>
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
