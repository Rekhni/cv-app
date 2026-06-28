import { render, screen } from '@testing-library/react'
import Expertise from './Expertise'

test('renders experience items', () => {
  const data = [
    {
      date: '2025',
      info: {
        company: 'ACME Corp',
        job: 'Frontend Developer',
        description: 'Built UI components.'
      }
    }
  ]

  render(<Expertise data={data} />)
  expect(screen.getByText('ACME Corp')).toBeInTheDocument()
  expect(screen.getByText('Frontend Developer')).toBeInTheDocument()
})
