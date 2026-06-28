import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectPortfolio, loadPortfolio } from '../../features/portfolio/portfolioSlice'
import './Portfolio.scss'

const portfolioFilters = [
  { label: 'All', value: '*' },
  { label: 'Ui', value: 'ui' },
  { label: 'Code', value: 'code' }
]

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('*')
  const dispatch = useDispatch()
  const portfolioData = useSelector(selectPortfolio)

  useEffect(() => {
    dispatch(loadPortfolio())
  }, [dispatch])

  const filteredItems =
    activeFilter === '*'
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeFilter)

  return (
    <div className="portfolio">
      <div className="portfolio__filters">
        {portfolioFilters.map(({ label, value }) => (
          <button
            key={value}
            type="button"
            className={`portfolio__filter${activeFilter === value ? ' active' : ''}`}
            onClick={() => setActiveFilter(value)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="portfolio__grid">
        {filteredItems.map((item) => (
          <div key={item.id} className={`portfolio__item ${item.category}`}>
            {item.type === 'image' ? (
              <div className='portfolio__media'>
                <img src={item.imageUrl} alt='' />
              </div>
            ) : (
              <div className="portfolio__card">
                <h3 className="portfolio__card-title">{item.title}</h3>
                <p className="portfolio__card-text">{item.text}</p>
                <a
                  className="portfolio__card-link"
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View source
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
