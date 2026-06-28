import contactsReducer, {
  loadContacts,
  selectContacts,
  selectContactsStatus
} from './contactsSlice'

describe('contactsSlice', () => {
  it('handles loadContacts pending state', () => {
    const state = contactsReducer(undefined, { type: loadContacts.pending.type })
    expect(state.status).toBe('loading')
    expect(state.error).toBeNull()
  })

  it('handles loadContacts fulfilled state', () => {
    const payload = [{ id: 'email', title: 'email@test.com', href: 'mailto:email@test.com' }]
    const state = contactsReducer(undefined, {
      type: loadContacts.fulfilled.type,
      payload
    })

    expect(state.contacts).toEqual(payload)
    expect(state.status).toBe('succeeded')
  })

  it('handles loadContacts rejected state', () => {
    const state = contactsReducer(undefined, {
      type: loadContacts.rejected.type,
      error: { message: 'Failed to fetch contacts' }
    })

    expect(state.status).toBe('failed')
    expect(state.error).toBe('Failed to fetch contacts')
  })

  it('returns selected data from state', () => {
    const state = {
      contacts: {
        contacts: [{ id: 'email', title: 'email@test.com', href: 'mailto:email@test.com' }],
        status: 'succeeded',
        error: null
      }
    }

    expect(selectContacts(state)).toHaveLength(1)
    expect(selectContactsStatus(state)).toBe('succeeded')
  })
})
