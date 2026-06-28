import { SKILLS_STORAGE_KEY } from './constants'
import { getStoredSkills, saveSkills } from './skillsStorage'

const mockSkills = [
  { name: 'React', level: 88 },
  { name: 'TypeScript', level: 90 }
]

describe('skillsStorage', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('returns null when nothing is stored', () => {
    expect(getStoredSkills()).toBeNull()
  })

  it('saves and reads skills from localStorage', () => {
    saveSkills(mockSkills)
    expect(getStoredSkills()).toEqual(mockSkills)
    expect(localStorage.getItem(SKILLS_STORAGE_KEY)).toBe(JSON.stringify(mockSkills))
  })

  it('returns null for invalid stored data', () => {
    localStorage.setItem(SKILLS_STORAGE_KEY, '{ invalid json')
    expect(getStoredSkills()).toBeNull()
  })

  it('returns null when stored value is not an array', () => {
    localStorage.setItem(SKILLS_STORAGE_KEY, JSON.stringify({ name: 'React' }))
    expect(getStoredSkills()).toBeNull()
  })
})
