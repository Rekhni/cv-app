import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchContacts } from '../../services/cvService'

export const loadContacts = createAsyncThunk(
  'contacts/loadContacts',
  fetchContacts
)

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadContacts.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(loadContacts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.contacts = action.payload
      })
      .addCase(loadContacts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const selectContacts = (state) => state.contacts.contacts
export const selectContactsStatus = (state) => state.contacts.status
export const selectContactsError = (state) => state.contacts.error

export default contactsSlice.reducer
