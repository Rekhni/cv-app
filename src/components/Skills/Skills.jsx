import './Skills.scss'

const Skills = ({ data }) => {
  return (
    <div className='skills'>
      <div className='skills__bars'>
        {data.map((skill) => (
          <div className='skills__row' key={skill.name}>
            <div className='skills__bar' style={{ width: `${skill.level}%` }}>
              <span className='skills__label'>{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
      <div className='skills__axis'>
        <span className='skills__axis-label'>Beginner</span>
        <span className='skills__axis-label'>Proficient</span>
        <span className='skills__axis-label'>Expert</span>
        <span className='skills__axis-label'>Master</span>
      </div>
    </div>
  )
}

export default Skills
