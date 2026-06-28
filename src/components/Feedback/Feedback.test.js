import { render, screen } from '@testing-library/react'
import Feedback from './Feedback'

test('renders feedback items', () => {
  const data = [
    {
      feedback: 'Excellent developer.',
      reporter: {
        name: 'Jane Doe',
        photoUrl: 'https://example.com/photo.jpg',
        citeUrl: 'ACME Corp'
      }
    }
  ]

  render(<Feedback data={data} />)
  expect(screen.getByText('Excellent developer.')).toBeInTheDocument()
  expect(screen.getByText('Jane Doe')).toBeInTheDocument()
})
