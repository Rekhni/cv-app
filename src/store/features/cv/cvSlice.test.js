import cvReducer, {
  addSkill,
  loadContacts,
  loadEducations,
  loadExperience,
  loadFeedbacks,
  loadPortfolio,
  loadSkills,
  selectContacts,
  selectEducations,
  selectExperience,
  selectFeedbacks,
  selectPortfolio,
  selectSkills
} from './cvSlice'

const asyncCases = [
  {
    name: 'educations',
    pending: loadEducations.pending,
    fulfilled: loadEducations.fulfilled,
    rejected: loadEducations.rejected,
    payload: [{ date: 2021, title: 'Bachelor', text: 'University' }],
    stateKey: 'educations',
    errorMessage: 'Failed to fetch educations'
  },
  {
    name: 'skills',
    pending: loadSkills.pending,
    fulfilled: loadSkills.fulfilled,
    rejected: loadSkills.rejected,
    payload: [{ name: 'React', level: 88 }],
    stateKey: 'skills',
    errorMessage: 'Failed to fetch skills'
  },
  {
    name: 'experience',
    pending: loadExperience.pending,
    fulfilled: loadExperience.fulfilled,
    rejected: loadExperience.rejected,
    payload: [{ date: '2025', info: { company: 'ACME', job: 'Dev', description: 'Built apps' } }],
    stateKey: 'experience',
    errorMessage: 'Failed to fetch experience'
  },
  {
    name: 'portfolio',
    pending: loadPortfolio.pending,
    fulfilled: loadPortfolio.fulfilled,
    rejected: loadPortfolio.rejected,
    payload: [{ id: 'app', title: 'App', text: 'Demo', category: 'code' }],
    stateKey: 'portfolio',
    errorMessage: 'Failed to fetch portfolio'
  },
  {
    name: 'feedbacks',
    pending: loadFeedbacks.pending,
    fulfilled: loadFeedbacks.fulfilled,
    rejected: loadFeedbacks.rejected,
    payload: [{ feedback: 'Great work', reporter: { name: 'Jane', photoUrl: '', citeUrl: 'ACME' } }],
    stateKey: 'feedbacks',
    errorMessage: 'Failed to fetch feedbacks'
  },
  {
    name: 'contacts',
    pending: loadContacts.pending,
    fulfilled: loadContacts.fulfilled,
    rejected: loadContacts.rejected,
    payload: [{ id: 'email', title: 'email@test.com', href: 'mailto:email@test.com' }],
    stateKey: 'contacts',
    errorMessage: 'Failed to fetch contacts'
  }
]

describe('cvSlice', () => {
  it.each(asyncCases)('handles $name pending state', ({ pending, stateKey }) => {
    const state = cvReducer(undefined, { type: pending.type })
    expect(state.status[stateKey]).toBe('loading')
    expect(state.error[stateKey]).toBeNull()
  })

  it.each(asyncCases)('handles $name fulfilled state', ({ fulfilled, payload, stateKey }) => {
    const state = cvReducer(undefined, {
      type: fulfilled.type,
      payload
    })

    expect(state[stateKey]).toEqual(payload)
    expect(state.status[stateKey]).toBe('succeeded')
  })

  it.each(asyncCases)('handles $name rejected state', ({ rejected, stateKey, errorMessage }) => {
    const state = cvReducer(undefined, {
      type: rejected.type,
      error: { message: errorMessage }
    })

    expect(state.status[stateKey]).toBe('failed')
    expect(state.error[stateKey]).toBe(errorMessage)
  })

  it('handles addSkill fulfilled', () => {
    const skills = [{ name: 'TypeScript', level: 90 }]
    const state = cvReducer(undefined, {
      type: addSkill.fulfilled.type,
      payload: skills
    })

    expect(state.skills).toEqual(skills)
  })

  it('returns selected data from state', () => {
    const state = {
      cv: {
        educations: [{ date: 2021, title: 'Bachelor', text: 'University' }],
        skills: [{ name: 'React', level: 88 }],
        experience: [],
        portfolio: [],
        feedbacks: [],
        contacts: []
      }
    }

    expect(selectEducations(state)).toHaveLength(1)
    expect(selectSkills(state)[0].name).toBe('React')
    expect(selectExperience(state)).toEqual([])
    expect(selectPortfolio(state)).toEqual([])
    expect(selectFeedbacks(state)).toEqual([])
    expect(selectContacts(state)).toEqual([])
  })
})
