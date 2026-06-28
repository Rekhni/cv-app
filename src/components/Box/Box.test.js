import { render, screen } from '@testing-library/react'
import Box from './Box'

test('renders title and content', () => {
  render(<Box title='About me' content='Profile description' />)
  expect(screen.getByRole('heading', { name: 'About me' })).toBeInTheDocument()
  expect(screen.getByText('Profile description')).toBeInTheDocument()
})

test('renders optional header action', () => {
  render(
    <Box
      title='Skills'
      action={<button type='button'>Open edit</button>}
      content='Skills content'
    />
  )

  expect(screen.getByRole('button', { name: 'Open edit' })).toBeInTheDocument()
})
