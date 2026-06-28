import feedbacksReducer, {
  loadFeedbacks,
  selectFeedbacks,
  selectFeedbacksStatus
} from './feedbacksSlice'

describe('feedbacksSlice', () => {
  it('handles loadFeedbacks pending state', () => {
    const state = feedbacksReducer(undefined, { type: loadFeedbacks.pending.type })
    expect(state.status).toBe('loading')
    expect(state.error).toBeNull()
  })

  it('handles loadFeedbacks fulfilled state', () => {
    const payload = [{ feedback: 'Great work', reporter: { name: 'Jane', photoUrl: '', citeUrl: 'ACME' } }]
    const state = feedbacksReducer(undefined, {
      type: loadFeedbacks.fulfilled.type,
      payload
    })

    expect(state.feedbacks).toEqual(payload)
    expect(state.status).toBe('succeeded')
  })

  it('handles loadFeedbacks rejected state', () => {
    const state = feedbacksReducer(undefined, {
      type: loadFeedbacks.rejected.type,
      error: { message: 'Failed to fetch feedbacks' }
    })

    expect(state.status).toBe('failed')
    expect(state.error).toBe('Failed to fetch feedbacks')
  })

  it('returns selected data from state', () => {
    const state = {
      feedbacks: {
        feedbacks: [{ feedback: 'Great work', reporter: { name: 'Jane', photoUrl: '', citeUrl: 'ACME' } }],
        status: 'succeeded',
        error: null
      }
    }

    expect(selectFeedbacks(state)).toHaveLength(1)
    expect(selectFeedbacksStatus(state)).toBe('succeeded')
  })
})
