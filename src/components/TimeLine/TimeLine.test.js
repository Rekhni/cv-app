import { render, screen } from '@testing-library/react'
import TimeLine from './TimeLine'
import { EDUCATION_ERROR_MESSAGE } from '../../utils/constants'

const mockData = [
  {
    date: 2023,
    title: 'Master of Science in Computer Science',
    text: 'Washington State University.'
  }
]

test('renders timeline items', () => {
  render(<TimeLine data={mockData} />)
  expect(screen.getByText('Master of Science in Computer Science')).toBeInTheDocument()
  expect(screen.getByText('2023')).toBeInTheDocument()
})

test('shows loading state', () => {
  const { container } = render(<TimeLine data={[]} isLoading />)
  expect(container.querySelector('.timeline__loading')).toBeInTheDocument()
})

test('shows error state', () => {
  render(<TimeLine data={[]} isError />)
  expect(screen.getByText(EDUCATION_ERROR_MESSAGE)).toBeInTheDocument()
})
