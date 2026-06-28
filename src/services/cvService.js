export async function fetchEducations() {
  const response = await fetch('/api/educations')

  if (!response.ok) {
    throw new Error('Failed to fetch educations')
  }

  const data = await response.json()
  return data.educations
}

export async function fetchSkills() {
  const response = await fetch('/api/skills')

  if (!response.ok) {
    throw new Error('Failed to fetch skills')
  }

  const data = await response.json()
  return data.skills
}

export async function createSkill(skill) {
  const response = await fetch('/api/skills', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(skill)
  })

  if (!response.ok) {
    throw new Error('Failed to add skill')
  }

  const data = await response.json()
  return data.skills
}

export async function fetchExperience() {
  const response = await fetch('/api/experience')

  if (!response.ok) {
    throw new Error('Failed to fetch experience')
  }

  const data = await response.json()
  return data.experience
}


export async function fetchPortfolio() {
  const response = await fetch('/api/portfolio')

  if (!response.ok) {
    throw new Error('Failed to fetch portfolio')
  }

  const data = await response.json()
  return data.portfolio
}

export async function fetchFeedbacks() {
  const response = await fetch('/api/feedbacks')

  if (!response.ok) {
    throw new Error('Failed to fetch feedbacks')
  }

  const data = await response.json()
  return data.feedbacks
}

export async function fetchContacts() {
  const response = await fetch('/api/contacts')

  if (!response.ok) {
    throw new Error('Failed to fetch contacts')
  }

  const data = await response.json()
  return data.contacts
}