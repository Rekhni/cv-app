import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createSkill, fetchSkills } from '../../services/cvService'
import { getStoredSkills, saveSkills } from '../../utils/skillsStorage'

export const loadSkills = createAsyncThunk('skills/loadSkills', async () => {
  const stored = getStoredSkills()

  if (stored) {
    return stored
  }

  const skills = await fetchSkills()
  saveSkills(skills)
  return skills
})

export const addSkill = createAsyncThunk('skills/addSkill', async (skill) => {
  const skills = await createSkill(skill)
  saveSkills(skills)
  return skills
})

const skillsSlice = createSlice({
  name: 'skills',
  initialState: {
    skills: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadSkills.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(loadSkills.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.skills = action.payload
      })
      .addCase(loadSkills.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(addSkill.fulfilled, (state, action) => {
        state.skills = action.payload
      })
  }
})

export const selectSkills = (state) => state.skills.skills
export const selectSkillsStatus = (state) => state.skills.status
export const selectSkillsError = (state) => state.skills.error

export default skillsSlice.reducer
