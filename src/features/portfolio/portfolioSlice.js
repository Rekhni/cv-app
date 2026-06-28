import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchPortfolio } from '../../services/cvService'

export const loadPortfolio = createAsyncThunk(
  'portfolio/loadPortfolio',
  fetchPortfolio
)

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    portfolio: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadPortfolio.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(loadPortfolio.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.portfolio = action.payload
      })
      .addCase(loadPortfolio.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const selectPortfolio = (state) => state.portfolio.portfolio
export const selectPortfolioStatus = (state) => state.portfolio.status
export const selectPortfolioError = (state) => state.portfolio.error

export default portfolioSlice.reducer
