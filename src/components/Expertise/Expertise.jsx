import './Expertise.scss'

const Expertise = ({ data }) => {
    return (
      <div className="expertise">
        {data.map((item, index) => (
          <div className="expertise__item" key={index}>
            <div className="expertise__left">
              <h3 className="expertise__company">{item.info.company}</h3>
              <div className="expertise__date">{item.date}</div>
            </div>
            <div className="expertise__right">
              <h3 className="expertise__job">{item.info.job}</h3>
              <p className="expertise__description">{item.info.description}</p>
            </div>
          </div>
        ))}
      </div>
    )
}

export default Expertise
