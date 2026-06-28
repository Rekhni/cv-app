import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchExperience } from '../../services/cvService'

export const loadExperience = createAsyncThunk(
  'experience/loadExperience',
  fetchExperience
)

const experienceSlice = createSlice({
  name: 'experience',
  initialState: {
    experience: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadExperience.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(loadExperience.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.experience = action.payload
      })
      .addCase(loadExperience.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const selectExperience = (state) => state.experience.experience
export const selectExperienceStatus = (state) => state.experience.status
export const selectExperienceError = (state) => state.experience.error

export default experienceSlice.reducer
