import React from 'react'
import { Link } from 'react-router-dom'
import PhotoBox from '../../components/PhotoBox/PhotoBox'
import { profile } from '../../data/profile'
import './HomePage.scss'

const HomePage = () => {
  return (
    <section className='home'>
      <div className='home__overlay'>
        <PhotoBox variant='full' {...profile} />
        <Link className='home__cta' to='/inner'>Know more</Link>
      </div>
    </section>
  )
}

export default HomePage
