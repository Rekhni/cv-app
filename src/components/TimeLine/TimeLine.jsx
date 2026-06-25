import './TimeLine.scss'

const TimeLine = ({ data }) => {
  return (
    <div className="timeline">
      <div className="timeline__list">
        {data.map((item, index) => (
          <div className="timeline__item" key={index}>
            <div className="timeline__date">{item.date}</div>
            <div className="timeline__card">
              <h3 className="timeline__title">{item.title}</h3>
              <p className="timeline__text">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TimeLine
