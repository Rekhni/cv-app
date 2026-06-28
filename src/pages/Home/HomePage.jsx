import React from 'react'
import { Link } from 'react-router-dom'
import PhotoBox from '../../components/PhotoBox/PhotoBox'
import { PROFILE } from '../../utils/constants'
import './HomePage.scss'

const HomePage = () => {
  return (
    <section className='home'>
      <div className='home__overlay'>
        <PhotoBox variant='full' {...PROFILE} />
        <Link className='home__cta' to='/inner'>Know more</Link>
      </div>
    </section>
  )
}

export default HomePage
