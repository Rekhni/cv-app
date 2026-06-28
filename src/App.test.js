import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { setMockLocation } from './test-utils/react-router-dom.mock'
import cvReducer from './store/features/cv/cvSlice'
import App from './App'

const createStore = () =>
  configureStore({
    reducer: { cv: cvReducer }
  })

const mockMatchMedia = (matches = false) => {
  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches,
    media: query,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn()
  }))
}

beforeEach(() => {
  setMockLocation('/')
  mockMatchMedia(false)
  Element.prototype.scrollIntoView = jest.fn()
  window.scrollTo = jest.fn()
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: async () => ({
        educations: [],
        experience: [],
        feedbacks: [],
        skills: [],
        portfolio: [],
        contacts: []
      })
    })
  )
})

test('renders home page', () => {
  render(<App />)
  expect(screen.getByText(/know more/i)).toBeInTheDocument()
})

test('renders inner page sections', async () => {
  setMockLocation('/inner')
  render(
    <Provider store={createStore()}>
      <App />
    </Provider>
  )

  expect(await screen.findByRole('heading', { name: 'About me' })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'Education' })).toBeInTheDocument()
})
