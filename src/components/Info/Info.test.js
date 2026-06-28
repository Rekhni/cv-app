import { render, screen } from '@testing-library/react'
import Info from './Info'

test('renders text content', () => {
  render(<Info text='Sample info text' />)
  expect(screen.getByText('Sample info text')).toBeInTheDocument()
})
