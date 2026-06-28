import { SKILLS_STORAGE_KEY } from './constants'

export function getStoredSkills() {
  try {
    const raw = localStorage.getItem(SKILLS_STORAGE_KEY)

    if (!raw) {
      return null
    }

    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : null
  } catch {
    return null
  }
}

export function saveSkills(skills) {
  localStorage.setItem(SKILLS_STORAGE_KEY, JSON.stringify(skills))
}
