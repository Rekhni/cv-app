import educationReducer, {
  loadEducations,
  selectEducations,
  selectEducationsStatus
} from './educationSlice'

describe('educationSlice', () => {
  it('handles loadEducations pending state', () => {
    const state = educationReducer(undefined, { type: loadEducations.pending.type })
    expect(state.status).toBe('loading')
    expect(state.error).toBeNull()
  })

  it('handles loadEducations fulfilled state', () => {
    const payload = [{ date: 2021, title: 'Bachelor', text: 'University' }]
    const state = educationReducer(undefined, {
      type: loadEducations.fulfilled.type,
      payload
    })

    expect(state.educations).toEqual(payload)
    expect(state.status).toBe('succeeded')
  })

  it('handles loadEducations rejected state', () => {
    const state = educationReducer(undefined, {
      type: loadEducations.rejected.type,
      error: { message: 'Failed to fetch educations' }
    })

    expect(state.status).toBe('failed')
    expect(state.error).toBe('Failed to fetch educations')
  })

  it('returns selected data from state', () => {
    const state = {
      education: {
        educations: [{ date: 2021, title: 'Bachelor', text: 'University' }],
        status: 'succeeded',
        error: null
      }
    }

    expect(selectEducations(state)).toHaveLength(1)
    expect(selectEducationsStatus(state)).toBe('succeeded')
  })
})
