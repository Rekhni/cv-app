import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import Box from '../Box/Box'
import {
  addSkill,
  loadSkills,
  selectSkills
} from '../../features/skills/skillsSlice'
import {
  SKILL_FORM_ERRORS,
  SKILL_RANGE_MAX,
  SKILL_RANGE_MIN
} from '../../utils/constants'
import './Skills.scss'

const initialValues = {
  name: '',
  level: ''
}

const isNumericValue = (value) => {
  if (value === '' || value == null) {
    return false
  }

  return !Number.isNaN(Number(value)) && String(value).trim() !== ''
}

export const validateSkillForm = (values) => {
  const errors = {}

  if (!values.name.trim()) {
    errors.name = SKILL_FORM_ERRORS.nameRequired
  }

  if (!isNumericValue(values.level)) {
    errors.level = SKILL_FORM_ERRORS.levelNumber
  } else {
    const level = Number(values.level)

    if (level < SKILL_RANGE_MIN) {
      errors.level = SKILL_FORM_ERRORS.levelMin
    } else if (level > SKILL_RANGE_MAX) {
      errors.level = SKILL_FORM_ERRORS.levelMax
    }
  }

  return errors
}

const Skills = () => {
  const dispatch = useDispatch()
  const data = useSelector(selectSkills)
  const [isEditOpen, setIsEditOpen] = useState(false)

  useEffect(() => {
    dispatch(loadSkills())
  }, [dispatch])

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      addSkill({
        name: values.name.trim(),
        level: Number(values.level)
      })
    )
    resetForm()
  }

  const editButton = (
    <button
      type='button'
      className='skills__edit-btn'
      onClick={() => setIsEditOpen((prev) => !prev)}
    >
      <FontAwesomeIcon icon={faPen} className='skills__edit-icon' />
      {isEditOpen ? 'Close edit' : 'Open edit'}
    </button>
  )

  return (
    <Box
      title='Skills'
      action={editButton}
      content={
        <div className='skills'>
          {isEditOpen && (
            <Formik
              initialValues={initialValues}
              validate={validateSkillForm}
              validateOnMount
              onSubmit={handleSubmit}
            >
              {({ errors, touched, isValid }) => (
                <Form className='skills__form'>
                  <div className='skills__fields'>
                    <div className='skills__field'>
                      <label className='skills__form-label' htmlFor='skill-name'>
                        Skill name
                      </label>
                      <Field
                        id='skill-name'
                        className={`skills__input${
                          errors.name && touched.name ? ' skills__input--error' : ''
                        }`}
                        type='text'
                        name='name'
                        placeholder='Enter skill name'
                      />
                      {errors.name && touched.name && (
                        <span className='skills__error'>{errors.name}</span>
                      )}
                    </div>
                    <div className='skills__field'>
                      <label className='skills__form-label' htmlFor='skill-level'>
                        Skill range
                      </label>
                      <Field
                        id='skill-level'
                        className={`skills__input${
                          errors.level && touched.level ? ' skills__input--error' : ''
                        }`}
                        type='text'
                        name='level'
                        inputMode='numeric'
                        placeholder='Enter skill range'
                      />
                      {errors.level && touched.level && (
                        <span className='skills__error'>{errors.level}</span>
                      )}
                    </div>
                  </div>
                  <button
                    type='submit'
                    className='skills__submit'
                    disabled={!isValid}
                  >
                    Add skill
                  </button>
                </Form>
              )}
            </Formik>
          )}

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
      }
    />
  )
}

export default Skills
