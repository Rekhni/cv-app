import React, { useEffect, useRef, useState } from 'react'
import Isotope from 'isotope-layout'
import imagesLoaded from 'imagesloaded'
import './Portfolio.scss'

const portfolioData = [
  {
    id: 1,
    type: 'image',
    category: 'ui',
    imageUrl: 'https://picsum.photos/seed/portfolio1/300/200'
  },
  {
    id: 2,
    type: 'image',
    category: 'code',
    imageUrl: 'https://picsum.photos/seed/portfolio2/300/200'
  },
  {
    id: 3,
    type: 'image',
    category: 'ui',
    imageUrl: 'https://picsum.photos/seed/portfolio3/300/200'
  },
  {
    id: 4,
    type: 'text',
    category: 'code',
    title: 'Some text',
    text: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis',
    sourceUrl: '#'
  }
]

const filters = [
  { label: 'All', value: '*' },
  { label: 'Ui', value: '.ui' },
  { label: 'Code', value: '.code' }
]

const Portfolio = () => {
  const gridRef = useRef(null)
  const isotopeRef = useRef(null)
  const [activeFilter, setActiveFilter] = useState('*')

  useEffect(() => {
    const grid = gridRef.current

    imagesLoaded(grid, () => {
      isotopeRef.current = new Isotope(grid, {
        itemSelector: '.portfolio__item',
        layoutMode: 'fitRows'
      })
    })

    return () => isotopeRef.current?.destroy()
  }, [])

  const handleFilter = (filter) => {
    setActiveFilter(filter)
    isotopeRef.current?.arrange({ filter })
  }

  return (
    <div className="portfolio">
      <div className="portfolio__filters">
        {filters.map(({ label, value }) => (
          <button
            key={value}
            type="button"
            className={`portfolio__filter${activeFilter === value ? ' active' : ''}`}
            onClick={() => handleFilter(value)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="portfolio__grid" ref={gridRef}>
        {portfolioData.map((item) => (
          <div
            key={item.id}
            className={`portfolio__item ${item.category}`}
          >
            {item.type === 'image' ? (
              <div className='portfolio__media'>
                <img src={item.imageUrl} alt='' />
              </div>
            ) : (
              <div className="portfolio__card">
                <h3 className="portfolio__card-title">{item.title}</h3>
                <p className="portfolio__card-text">{item.text}</p>
                <a className="portfolio__card-link" href={item.sourceUrl}>
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
