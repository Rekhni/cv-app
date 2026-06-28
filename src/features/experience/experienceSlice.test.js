import experienceReducer, {
  loadExperience,
  selectExperience,
  selectExperienceStatus
} from './experienceSlice'

describe('experienceSlice', () => {
  it('handles loadExperience pending state', () => {
    const state = experienceReducer(undefined, { type: loadExperience.pending.type })
    expect(state.status).toBe('loading')
    expect(state.error).toBeNull()
  })

  it('handles loadExperience fulfilled state', () => {
    const payload = [{ date: '2025', info: { company: 'ACME', job: 'Dev', description: 'Built apps' } }]
    const state = experienceReducer(undefined, {
      type: loadExperience.fulfilled.type,
      payload
    })

    expect(state.experience).toEqual(payload)
    expect(state.status).toBe('succeeded')
  })

  it('handles loadExperience rejected state', () => {
    const state = experienceReducer(undefined, {
      type: loadExperience.rejected.type,
      error: { message: 'Failed to fetch experience' }
    })

    expect(state.status).toBe('failed')
    expect(state.error).toBe('Failed to fetch experience')
  })

  it('returns selected data from state', () => {
    const state = {
      experience: {
        experience: [{ date: '2025', info: { company: 'ACME', job: 'Dev', description: 'Built apps' } }],
        status: 'succeeded',
        error: null
      }
    }

    expect(selectExperience(state)).toHaveLength(1)
    expect(selectExperienceStatus(state)).toBe('succeeded')
  })
})
