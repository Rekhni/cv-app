import { render, screen } from '@testing-library/react'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'

test('renders button with text', () => {
  render(<Button text='Go back' icon={faArrowLeft} />)
  expect(screen.getByRole('button', { name: /go back/i })).toBeInTheDocument()
})

test('renders collapsed button without text', () => {
  render(<Button text='Go back' icon={faArrowLeft} collapsed />)
  expect(screen.getByRole('button')).toBeInTheDocument()
  expect(screen.queryByText(/go back/i)).not.toBeInTheDocument()
})
