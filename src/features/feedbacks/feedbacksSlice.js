import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchFeedbacks } from '../../services/cvService'

export const loadFeedbacks = createAsyncThunk(
  'feedbacks/loadFeedbacks',
  fetchFeedbacks
)

const feedbacksSlice = createSlice({
  name: 'feedbacks',
  initialState: {
    feedbacks: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadFeedbacks.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(loadFeedbacks.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.feedbacks = action.payload
      })
      .addCase(loadFeedbacks.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const selectFeedbacks = (state) => state.feedbacks.feedbacks
export const selectFeedbacksStatus = (state) => state.feedbacks.status
export const selectFeedbacksError = (state) => state.feedbacks.error

export default feedbacksSlice.reducer
