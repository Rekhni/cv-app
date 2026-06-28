import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  fetchEducations,
  fetchSkills,
  createSkill,
  fetchExperience,
  fetchPortfolio,
  fetchFeedbacks,
  fetchContacts
} from '../../../services/cvService'
import { getStoredSkills, saveSkills } from '../../../utils/skillsStorage'

export const loadEducations = createAsyncThunk('cv/loadEducations', fetchEducations)
export const loadSkills = createAsyncThunk('cv/loadSkills', async () => {
  const stored = getStoredSkills()

  if (stored) {
    return stored
  }

  const skills = await fetchSkills()
  saveSkills(skills)
  return skills
})
export const addSkill = createAsyncThunk('cv/addSkill', async (skill) => {
  const skills = await createSkill(skill)
  saveSkills(skills)
  return skills
})
export const loadExperience = createAsyncThunk('cv/loadExperience', fetchExperience)
export const loadPortfolio = createAsyncThunk('cv/loadPortfolio', fetchPortfolio)
export const loadFeedbacks = createAsyncThunk('cv/loadFeedbacks', fetchFeedbacks)
export const loadContacts = createAsyncThunk('cv/loadContacts', fetchContacts)

const cvSlice = createSlice({
  name: 'cv',
  initialState: {
    educations: [],
    skills: [],
    experience: [],
    portfolio: [],
    feedbacks: [],
    contacts: [],
    status: {
      educations: 'idle',
      skills: 'idle',
      experience: 'idle',
      portfolio: 'idle',
      feedbacks: 'idle',
      contacts: 'idle'
    },
    error: {
      educations: null,
      skills: null,
      experience: null,
      portfolio: null,
      feedbacks: null,
      contacts: null
    }
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadEducations.pending, (state) => {
        state.status.educations = 'loading'
        state.error.educations = null
      })
      .addCase(loadEducations.fulfilled, (state, action) => {
        state.status.educations = 'succeeded'
        state.educations = action.payload
      })
      .addCase(loadEducations.rejected, (state, action) => {
        state.status.educations = 'failed'
        state.error.educations = action.error.message
      })
      .addCase(loadSkills.pending, (state) => {
        state.status.skills = 'loading'
        state.error.skills = null
      })
      .addCase(loadSkills.fulfilled, (state, action) => {
        state.status.skills = 'succeeded'
        state.skills = action.payload
      })
      .addCase(loadSkills.rejected, (state, action) => {
        state.status.skills = 'failed'
        state.error.skills = action.error.message
      })
      .addCase(addSkill.fulfilled, (state, action) => {
        state.skills = action.payload
      })
      .addCase(loadExperience.pending, (state) => {
        state.status.experience = 'loading'
        state.error.experience = null
      })
      .addCase(loadExperience.fulfilled, (state, action) => {
        state.status.experience = 'succeeded'
        state.experience = action.payload
      })
      .addCase(loadExperience.rejected, (state, action) => {
        state.status.experience = 'failed'
        state.error.experience = action.error.message
      })
      .addCase(loadPortfolio.pending, (state) => {
        state.status.portfolio = 'loading'
        state.error.portfolio = null
      })
      .addCase(loadPortfolio.fulfilled, (state, action) => {
        state.status.portfolio = 'succeeded'
        state.portfolio = action.payload
      })
      .addCase(loadPortfolio.rejected, (state, action) => {
        state.status.portfolio = 'failed'
        state.error.portfolio = action.error.message
      })
      .addCase(loadFeedbacks.pending, (state) => {
        state.status.feedbacks = 'loading'
        state.error.feedbacks = null
      })
      .addCase(loadFeedbacks.fulfilled, (state, action) => {
        state.status.feedbacks = 'succeeded'
        state.feedbacks = action.payload
      })
      .addCase(loadFeedbacks.rejected, (state, action) => {
        state.status.feedbacks = 'failed'
        state.error.feedbacks = action.error.message
      })
      .addCase(loadContacts.pending, (state) => {
        state.status.contacts = 'loading'
        state.error.contacts = null
      })
      .addCase(loadContacts.fulfilled, (state, action) => {
        state.status.contacts = 'succeeded'
        state.contacts = action.payload
      })
      .addCase(loadContacts.rejected, (state, action) => {
        state.status.contacts = 'failed'
        state.error.contacts = action.error.message
      })
  }
})

export const selectEducations = (state) => state.cv.educations
export const selectSkills = (state) => state.cv.skills
export const selectExperience = (state) => state.cv.experience
export const selectEducationsStatus = (state) => state.cv.status.educations
export const selectSkillsStatus = (state) => state.cv.status.skills
export const selectExperienceStatus = (state) => state.cv.status.experience
export const selectExperienceError = (state) => state.cv.error.experience
export const selectPortfolio = (state) => state.cv.portfolio
export const selectPortfolioStatus = (state) => state.cv.status.portfolio
export const selectPortfolioError = (state) => state.cv.error.portfolio
export const selectFeedbacks = (state) => state.cv.feedbacks
export const selectFeedbacksStatus = (state) => state.cv.status.feedbacks
export const selectFeedbacksError = (state) => state.cv.error.feedbacks
export const selectContacts = (state) => state.cv.contacts
export const selectContactsStatus = (state) => state.cv.status.contacts
export const selectContactsError = (state) => state.cv.error.contacts

export default cvSlice.reducer
