import skillsReducer, {
  addSkill,
  loadSkills,
  selectSkills,
  selectSkillsStatus
} from './skillsSlice'

describe('skillsSlice', () => {
  it('handles loadSkills pending state', () => {
    const state = skillsReducer(undefined, { type: loadSkills.pending.type })
    expect(state.status).toBe('loading')
    expect(state.error).toBeNull()
  })

  it('handles loadSkills fulfilled state', () => {
    const payload = [{ name: 'React', level: 88 }]
    const state = skillsReducer(undefined, {
      type: loadSkills.fulfilled.type,
      payload
    })

    expect(state.skills).toEqual(payload)
    expect(state.status).toBe('succeeded')
  })

  it('handles loadSkills rejected state', () => {
    const state = skillsReducer(undefined, {
      type: loadSkills.rejected.type,
      error: { message: 'Failed to fetch skills' }
    })

    expect(state.status).toBe('failed')
    expect(state.error).toBe('Failed to fetch skills')
  })

  it('handles addSkill fulfilled', () => {
    const skills = [{ name: 'TypeScript', level: 90 }]
    const state = skillsReducer(undefined, {
      type: addSkill.fulfilled.type,
      payload: skills
    })

    expect(state.skills).toEqual(skills)
  })

  it('returns selected data from state', () => {
    const state = {
      skills: {
        skills: [{ name: 'React', level: 88 }],
        status: 'succeeded',
        error: null
      }
    }

    expect(selectSkills(state)[0].name).toBe('React')
    expect(selectSkillsStatus(state)).toBe('succeeded')
  })
})
