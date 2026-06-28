import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import Box from '../../components/Box/Box'
import TimeLine from '../../components/TimeLine/TimeLine'
import Expertise from '../../components/Expertise/Expertise'
import Portfolio from '../../components/Portfolio/Portfolio'
import Address from '../../components/Address/Address'
import Feedback from '../../components/Feedback/Feedback'
import Skills from '../../components/Skills/Skills'
import { ABOUT_TEXT } from '../../utils/constants'

import {
  loadEducations,
  selectEducations,
  selectEducationsStatus
} from '../../features/education/educationSlice'
import {
  loadExperience,
  selectExperience
} from '../../features/experience/experienceSlice'
import {
  loadFeedbacks,
  selectFeedbacks
} from '../../features/feedbacks/feedbacksSlice'
import './Inner.scss'

const Inner = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const [showScrollTop, setShowScrollTop] = useState(false)
  const educationData = useSelector(selectEducations)
  const educationsStatus = useSelector(selectEducationsStatus)
  const experienceData = useSelector(selectExperience)
  const feedbackData = useSelector(selectFeedbacks)
  useEffect(() => {
    dispatch(loadEducations())
    dispatch(loadExperience())
    dispatch(loadFeedbacks())
  }, [dispatch])

  useEffect(() => {
    const sectionId = location.hash ? location.hash.slice(1) : 'about'
    const section = document.getElementById(sectionId)
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [location])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='inner'>
      <section className='inner__section' id='about'>
        <Box title='About me' content={ABOUT_TEXT} />
      </section>

      <section className='inner__section' id='education'>
        <Box
          title='Education'
          content={
            <TimeLine
              data={educationData}
              isLoading={educationsStatus === 'loading'}
              isError={educationsStatus === 'failed'}
            />
          }
        />
      </section>

      <section className='inner__section' id='experience'>
        <Box title='Experience' content={<Expertise data={experienceData} />} />
      </section>

      <section className='inner__section' id='skills'>
        <Skills />
      </section>

      <section className='inner__section' id='portfolio'>
        <Box title='Portfolio' content={<Portfolio />} />
      </section>

      <section className='inner__section' id='contacts'>
        <Box title='Contacts' content={<Address />} />
      </section>

      <section className='inner__section' id='feedback'>
        <Box title='Feedbacks' content={<Feedback data={feedbackData} />} />
      </section>

      {showScrollTop && (
        <button
          type='button'
          className='inner__scroll-top'
          onClick={scrollToTop}
          aria-label='Scroll to top'
        >
          <FontAwesomeIcon icon={faChevronUp} className='inner__scroll-top-icon' />
        </button>
      )}
    </div>
  )
}

export default Inner
