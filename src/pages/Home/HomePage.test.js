import { render, screen } from '@testing-library/react'
import HomePage from './HomePage'

test('renders home page content', () => {
  render(<HomePage />)
  expect(screen.getByText(/know more/i)).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'Rakhymzhan Kuanysh' })).toBeInTheDocument()
})
