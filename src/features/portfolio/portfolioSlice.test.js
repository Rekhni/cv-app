import portfolioReducer, {
  loadPortfolio,
  selectPortfolio,
  selectPortfolioStatus
} from './portfolioSlice'

describe('portfolioSlice', () => {
  it('handles loadPortfolio pending state', () => {
    const state = portfolioReducer(undefined, { type: loadPortfolio.pending.type })
    expect(state.status).toBe('loading')
    expect(state.error).toBeNull()
  })

  it('handles loadPortfolio fulfilled state', () => {
    const payload = [{ id: 'app', title: 'App', text: 'Demo', category: 'code' }]
    const state = portfolioReducer(undefined, {
      type: loadPortfolio.fulfilled.type,
      payload
    })

    expect(state.portfolio).toEqual(payload)
    expect(state.status).toBe('succeeded')
  })

  it('handles loadPortfolio rejected state', () => {
    const state = portfolioReducer(undefined, {
      type: loadPortfolio.rejected.type,
      error: { message: 'Failed to fetch portfolio' }
    })

    expect(state.status).toBe('failed')
    expect(state.error).toBe('Failed to fetch portfolio')
  })

  it('returns selected data from state', () => {
    const state = {
      portfolio: {
        portfolio: [{ id: 'app', title: 'App', text: 'Demo', category: 'code' }],
        status: 'succeeded',
        error: null
      }
    }

    expect(selectPortfolio(state)).toHaveLength(1)
    expect(selectPortfolioStatus(state)).toBe('succeeded')
  })
})
