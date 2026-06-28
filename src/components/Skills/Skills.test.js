import { validateSkillForm } from './Skills'
import { SKILL_FORM_ERRORS } from '../../utils/constants'

describe('validateSkillForm', () => {
  it('requires skill name', () => {
    expect(validateSkillForm({ name: '', level: '90' })).toEqual({
      name: SKILL_FORM_ERRORS.nameRequired
    })
  })

  it('requires skill range to be a number', () => {
    expect(validateSkillForm({ name: 'JavaScript', level: 'text' })).toEqual({
      level: SKILL_FORM_ERRORS.levelNumber
    })
  })

  it('requires skill range to be at least 10', () => {
    expect(validateSkillForm({ name: 'JavaScript', level: '1' })).toEqual({
      level: SKILL_FORM_ERRORS.levelMin
    })
  })

  it('requires skill range to be at most 100', () => {
    expect(validateSkillForm({ name: 'JavaScript', level: '101' })).toEqual({
      level: SKILL_FORM_ERRORS.levelMax
    })
  })

  it('passes validation for valid values', () => {
    expect(validateSkillForm({ name: 'JavaScript', level: '90' })).toEqual({})
  })
})
