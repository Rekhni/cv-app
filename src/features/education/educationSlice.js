import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchEducations } from '../../services/cvService'

export const loadEducations = createAsyncThunk(
  'education/loadEducations',
  fetchEducations
)

const educationSlice = createSlice({
  name: 'education',
  initialState: {
    educations: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadEducations.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(loadEducations.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.educations = action.payload
      })
      .addCase(loadEducations.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const selectEducations = (state) => state.education.educations
export const selectEducationsStatus = (state) => state.education.status
export const selectEducationsError = (state) => state.education.error

export default educationSlice.reducer
