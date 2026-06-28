import {
  createSkill,
  fetchContacts,
  fetchEducations,
  fetchExperience,
  fetchFeedbacks,
  fetchPortfolio,
  fetchSkills
} from './cvService'

describe('cvService', () => {
  beforeEach(() => {
    global.fetch = jest.fn()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('fetchEducations returns educations data', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ educations: [{ date: 2021, title: 'Bachelor', text: 'Uni' }] })
    })

    const result = await fetchEducations()
    expect(result).toHaveLength(1)
    expect(fetch).toHaveBeenCalledWith('/api/educations')
  })

  it('fetchEducations throws on failed response', async () => {
    global.fetch.mockResolvedValueOnce({ ok: false })
    await expect(fetchEducations()).rejects.toThrow('Failed to fetch educations')
  })

  it('fetchSkills returns skills data', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ skills: [{ name: 'React', level: 88 }] })
    })

    const result = await fetchSkills()
    expect(result[0].name).toBe('React')
  })

  it('fetchSkills throws on failed response', async () => {
    global.fetch.mockResolvedValueOnce({ ok: false })
    await expect(fetchSkills()).rejects.toThrow('Failed to fetch skills')
  })

  it('createSkill posts skill and returns updated list', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ skills: [{ name: 'TypeScript', level: 90 }] })
    })

    const result = await createSkill({ name: 'TypeScript', level: 90 })
    expect(result).toHaveLength(1)
    expect(fetch).toHaveBeenCalledWith('/api/skills', expect.objectContaining({ method: 'POST' }))
  })

  it('createSkill throws on failed response', async () => {
    global.fetch.mockResolvedValueOnce({ ok: false })
    await expect(createSkill({ name: 'TypeScript', level: 90 })).rejects.toThrow('Failed to add skill')
  })

  it('fetchExperience returns experience data', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ experience: [{ date: '2025', info: { company: 'ACME', job: 'Dev', description: 'Apps' } }] })
    })

    const result = await fetchExperience()
    expect(result).toHaveLength(1)
  })

  it('fetchPortfolio returns portfolio data', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ portfolio: [{ id: 'app', title: 'App' }] })
    })

    const result = await fetchPortfolio()
    expect(result).toHaveLength(1)
  })

  it('fetchFeedbacks returns feedbacks data', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ feedbacks: [{ feedback: 'Nice work' }] })
    })

    const result = await fetchFeedbacks()
    expect(result).toHaveLength(1)
  })

  it('fetchContacts returns contacts data', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ contacts: [{ id: 'email', title: 'test@test.com' }] })
    })

    const result = await fetchContacts()
    expect(result).toHaveLength(1)
  })

  it('fetchExperience throws on failed response', async () => {
    global.fetch.mockResolvedValueOnce({ ok: false })
    await expect(fetchExperience()).rejects.toThrow('Failed to fetch experience')
  })

  it('fetchPortfolio throws on failed response', async () => {
    global.fetch.mockResolvedValueOnce({ ok: false })
    await expect(fetchPortfolio()).rejects.toThrow('Failed to fetch portfolio')
  })

  it('fetchFeedbacks throws on failed response', async () => {
    global.fetch.mockResolvedValueOnce({ ok: false })
    await expect(fetchFeedbacks()).rejects.toThrow('Failed to fetch feedbacks')
  })

  it('fetchContacts throws on failed response', async () => {
    global.fetch.mockResolvedValueOnce({ ok: false })
    await expect(fetchContacts()).rejects.toThrow('Failed to fetch contacts')
  })
})
