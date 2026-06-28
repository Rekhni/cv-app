import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import { EDUCATION_ERROR_MESSAGE } from '../../utils/constants'
import './TimeLine.scss'

const TimeLine = ({ data, isLoading = false, isError = false }) => {
  return (
    <div className='timeline'>
      {isLoading && (
        <div className='timeline__loading'>
          <FontAwesomeIcon className='icon' icon={faSyncAlt} spin />
        </div>
      )}

      {isError && (
        <div className='timeline__error'>{EDUCATION_ERROR_MESSAGE}</div>
      )}

      {!isError && (
        <div className='timeline__list'>
          {data.map((item) => (
            <div className='timeline__item' key={`${item.date}-${item.title}`}>
              <div className='timeline__date'>{item.date}</div>
              <div className='timeline__card'>
                <h3 className='timeline__title'>{item.title}</h3>
                <p className='timeline__text'>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default TimeLine
