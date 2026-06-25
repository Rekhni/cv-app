import React from 'react'
import Info from '../Info/Info'
import './Feedback.scss'

const Feedback = ({ data }) => {
  return (
    <div className='feedback'>
        {data.map((item, index) => (
            <div className='feedback__item' key={index}>
              <Info text={item.feedback} />
              <div className='feedback__reporter'>
                  <img className='feedback__reporter-photo' src={item.reporter.photoUrl} alt={item.reporter.name} />
                  <p className='feedback__reporter-name'>{item.reporter.name}</p>
                  <p className='feedback__reporter-cite'>{item.reporter.citeUrl}</p>
              </div>
            </div>
        ))}
    </div>
  )
}

export default Feedback
